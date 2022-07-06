import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 *  Esta función la usaremos para el campo de "repeat-password" sea igual a "password"
 * @param control
 * @returns
 */
export const customRepeatPasswordMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	const password = control.get('password');
	const repeatPassword = control.get('repeatPassword');

	if (password && repeatPassword && password.value !== repeatPassword.value) {
		return { crossConfirmPasswordError: true };
	}
	return null;
};

/**
 * Esta clase extiende de ErrorStateMatcher para que los controles de Angular Material se comporten adecuadamente: https://material.angular.io/components/input/overview
 * Angular material brinda un ejemplo, pero esto solo es valido si lo amplicamos a un atributo del modelo de datos del formulario reactivo, al usar la validación cruzada
 * el error se aloja en FormGroup es por eso que usamos la propiedad "parent" y dentro buscamos el error "confirmPasswordError"
 *
 */
export class PasswordStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null): boolean {
		return !!(control && control.parent && control.parent.hasError('crossConfirmPasswordError'));
	}
}
