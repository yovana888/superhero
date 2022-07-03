import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
	isShowPassword: boolean = false;
	constructor() {}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {}

	showPassword(): void {
		this.isShowPassword = !this.isShowPassword;
	}
}
