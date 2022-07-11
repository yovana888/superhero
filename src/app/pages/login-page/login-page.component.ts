import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PATHS_AUTH_PAGES } from './../../commons/config/path-pages';
import { AuthApiService } from '../../commons/services/api/auth/auth-api.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
	readonly pathRegister = PATHS_AUTH_PAGES.registerPage.withSlash;
	readonly pathForgetPassword = PATHS_AUTH_PAGES.resetPasswordPage.withSlash;
	isShowPassword: boolean = false;
	disableButton = false;
	formGroup!: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _authService: AuthApiService,
		private _toast: NgToastService,
		private _router: Router
	) {
		this._loadFormGroup();
	}

	showPassword(): void {
		this.isShowPassword = !this.isShowPassword;
	}

	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			email: ['', [Validators.email, Validators.required]],
			password: ['', Validators.required]
		});
	}

	submitLoginEmailWithPassword(): void {
		if (this.formGroup.valid) {
			this.disableButton = true;
			this._authService
				.loginWithEmailPassword(this.formGroup.value)
				.then((res) => {
					console.log(res.user, 'data user login');
					this._router.navigateByUrl('/gallery');
				})
				.catch((e) => {
					this._toast.error({ detail: 'Error', summary: e.code, duration: 6000 });
				})
				.finally(() => (this.disableButton = false));
		}
	}
}
