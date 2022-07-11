import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*Layouts */
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
/*Pages */
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../app/pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from '../app/pages/reset-password-page/reset-password-page.component';
import { NotfoundPageComponent } from '../app/pages/notfound-page/notfound-page.component';
import { GalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout.component';
/*guards */
import { AuthGuard } from './commons/guards/auth.guard';

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
		path: 'gallery',
		component: GalleryLayoutComponent,
		canActivate: [AuthGuard]
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
