import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

import { PATHS_AUTH_PAGES } from './../../commons/config/path-pages';

const routes: Routes = [
	{
		path: '',
		component: AuthLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: PATHS_AUTH_PAGES.loginPage.onlyPath,
				pathMatch: 'full'
			},
			{
				path: PATHS_AUTH_PAGES.resetPasswordPage.onlyPath,
				loadChildren: () =>
					import('./pages/reset-password-page/reset-password-page.module').then((m) => m.ResetPasswordPageModule)
			},
			{
				path: PATHS_AUTH_PAGES.registerPage.onlyPath,
				loadChildren: () => import('./pages/register-page/register-page.module').then((m) => m.RegisterPageModule)
			},
			{
				path: PATHS_AUTH_PAGES.loginPage.onlyPath,
				loadChildren: () => import('./pages/login-page/login-page.module').then((m) => m.LoginPageModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
