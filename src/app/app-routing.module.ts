import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*Layouts */
import { LoginLayoutComponent } from '../app/layouts/login-layout/login-layout.component';
/*Pages */
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { RegisterPageComponent } from '../app/pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from '../app/pages/reset-password-page/reset-password-page.component';
import { NotfoundPageComponent } from '../app/pages/notfound-page/notfound-page.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'init/login',
		pathMatch: 'full'
	},
	{
		path: 'init',
		component: LoginLayoutComponent,
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
	/* {
    path:'waiter', component:ViewWaiterComponent,
    canActivate: [AccessViewWaiterGuard],
    canActivateChild:[AccessViewWaiterGuard],
    children: [
      {path:'menu', component: ContainerWaiterComponent},
      {path:'sent', component:ContainerSentComponent},
      {path:'ready', component:ContainerReadyComponent}
    ]
  },*/
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
