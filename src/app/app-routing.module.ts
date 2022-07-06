import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*Layouts */
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
/*Pages */
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../app/pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from '../app/pages/reset-password-page/reset-password-page.component';
import { NotfoundPageComponent } from '../app/pages/notfound-page/notfound-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'auth/login',
		pathMatch: 'full'
	},
	{
		path: 'auth',
		component: AuthLayoutComponent,
		children: [
			{ path: 'login', component: LoginPageComponent },
			{ path: 'register', component: RegisterPageComponent },
			{ path: 'reset', component: ResetPasswordPageComponent }
		]
	},
	{
		path: '**',
		component: NotfoundPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
