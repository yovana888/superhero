import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PATHS_AUTH_PAGES } from 'src/app/commons/config/path-pages';
import { customPasswordValidator } from 'src/app/commons/validators/password-custom.validators';
import { customRepeatPasswordMatch, PasswordStateMatcher } from 'src/app/commons/validators/repeat-password.validators';

@Component({
	selector: 'app-reset-password-page',
	templateUrl: './reset-password-page.component.html',
	styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent {
	readonly pathLogin = PATHS_AUTH_PAGES.loginPage.withSlash;
	passwordStateMatcher = new PasswordStateMatcher();

	isShowPassword: boolean = false;
	disableButton = false;
	showFormNewPassword = false;
	formGroupEmail!: FormGroup;
	formGroupNewPassword!: FormGroup;

	constructor(private _formBuilder: FormBuilder) {
		this._loadFormGroup();
	}

	private _loadFormGroup(): void {
		this.formGroupEmail = this._formBuilder.group({
			email: ['', [Validators.email, Validators.required]]
		});

		this.formGroupNewPassword = this._formBuilder.group(
			{
				password: ['', [customPasswordValidator, Validators.required]],
				repeatPassword: ['']
			},
			{ validators: customRepeatPasswordMatch }
		);
	}

	showPassword(): void {
		this.isShowPassword = !this.isShowPassword;
	}

	validEmail(): void {
		if (this.formGroupEmail.valid) {
			this.showFormNewPassword = true;
		}
	}

	resetPassword(): void {
		if (this.formGroupNewPassword.valid) {
			console.log('bien');
		} else {
			alert('corrija pz');
		}
	}
}
