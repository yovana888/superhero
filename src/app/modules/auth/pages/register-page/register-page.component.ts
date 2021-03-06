import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customPasswordValidator } from '../../../../commons/validators/password-custom.validators';
import { PATHS_AUTH_PAGES } from '../../../../commons/config/path-pages';
import { AuthApiService } from '../../../../commons/services/api/auth/auth-api.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmailVerifiedModalComponent } from '../../modals/email-verified-modal/email-verified-modal.component';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	readonly pathLogin = PATHS_AUTH_PAGES.loginPage.withSlash;

	showSectionConfirmation: boolean = false;
	isShowPassword: boolean = false;
	disableButton: boolean = false;
	formGroup!: FormGroup;

	constructor(
		private _formBuilder: FormBuilder,
		private _authService: AuthApiService,
		private _toast: NgToastService,
		private _router: Router,
		private _matDialog: MatDialog
	) {
		this._loadFormGroup();
	}

	showPassword(): void {
		this.isShowPassword = !this.isShowPassword;
	}

	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			email: ['', [Validators.email, Validators.required]],
			fullName: ['', Validators.required],
			password: ['', [customPasswordValidator, Validators.required]]
		});
	}

	submitRegisterEmailWithPassword(): void {
		if (this.formGroup.valid) {
			const formDataValue = this.formGroup.value;
			this.disableButton = true;
			this._authService
				.registerWithEmailPassword(formDataValue)
				.then((res) => {
					this.setPerfilUser(formDataValue.fullName);
				})
				.catch((e) => {
					this.disableButton = false;
					const message = e.code == 'auth/email-already-in-use' ? 'Email is already registered' : e.code;
					this._toast.error({ detail: 'Error', summary: message, duration: 5000 });
				});
		}
	}

	openDialogVerificationEmail(): void {
		this._matDialog.open(EmailVerifiedModalComponent, {
			width: '450px',
			disableClose: true,
			data: {
				message: `We have sent email to ${this.formGroup.value.email} to confirm the validity of our email adress. Don't forget to check your spam`,
				type: 'register'
			}
		});
	}

	setPerfilUser(fullName: string): void {
		this._authService
			.getCurrentUser()
			.then((res) => {
				res?.updateProfile({ displayName: fullName });
				res?.sendEmailVerification();
			})
			.then(() => this.openDialogVerificationEmail())
			.catch((e) => this._toast.error({ detail: 'Error', summary: e.code, duration: 5000 }))
			.finally(() => (this.disableButton = false));
	}

	registerWithGoogle(): void {
		this._authService
			.googleAuth()
			.then((res) => this._router.navigateByUrl('/home'))
			.catch((e) => this._toast.error({ detail: 'Error', summary: e.code, duration: 6000 }));
	}
}
