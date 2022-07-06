import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customPasswordValidator } from '../../commons/validators/password-custom.validators';
import { PATHS_AUTH_PAGES } from './../../commons/config/path-pages';
import { AuthApiService } from '../../commons/services/api/auth/auth-api.service';
import { NgToastService } from 'ng-angular-popup';
import { ICreatePerfilUser } from 'src/app/commons/services/api/auth/auth-model.interface';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
	readonly pathLogin = PATHS_AUTH_PAGES.loginPage.withSlash;

	isShowPassword: boolean = false;
	disableButton = false;
	formGroup!: FormGroup;

	constructor(private _formBuilder: FormBuilder, private _authService: AuthApiService, private _toast: NgToastService) {
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
		const formDataValue = this.formGroup.value;
		this.disableButton = true;
		this._authService
			.registerWithEmailPassword(formDataValue)
			.then((res) => {
				const dataPerfil = {
					fullName: formDataValue.fullName,
					photoUrl: '',
					description: ''
				};
				this.createPerfil(res.user.uid, dataPerfil);
			})
			.catch((e) => {
				//this._toast.error({detail:"ERROR",summary:e,sticky:true})
				this.disableButton = false;
				console.log(e, 'Error :v');
			});
	}

	createPerfil(uid: string, dataPerfil: ICreatePerfilUser): void {
		this._authService
			.createProfileUser(uid, dataPerfil)
			.then((res) =>
				this._toast.error({ detail: 'ERROR', summary: 'Bienvenido ' + dataPerfil.fullName, sticky: true })
			);
	}
}
