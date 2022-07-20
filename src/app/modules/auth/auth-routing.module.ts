import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from 'src/app/modules/auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/modules/auth/pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from 'src/app/modules/auth/pages/reset-password-page/reset-password-page.component';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

import { PATHS_AUTH_PAGES } from './../../commons/config/path-pages';

const routes: Routes = [
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: PATHS_AUTH_PAGES.loginPage.onlyPath,
				component: LoginPageComponent
			},
			{
				path: PATHS_AUTH_PAGES.registerPage.onlyPath,
				component: RegisterPageComponent
			},
			{
				path: PATHS_AUTH_PAGES.resetPasswordPage.onlyPath,
				component: ResetPasswordPageComponent
			},
			{
				path: '',
				redirectTo: PATHS_AUTH_PAGES.loginPage.onlyPath
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
