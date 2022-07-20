import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { FormSharedModule } from '../../modules-shared/form-shared.module';

import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { EmailVerifiedModalComponent } from './modals/email-verified-modal/email-verified-modal.component';

@NgModule({
	declarations: [
		AuthLayoutComponent,
		RegisterPageComponent,
		LoginPageComponent,
		ResetPasswordPageComponent,
		EmailVerifiedModalComponent
	],
	imports: [AuthRoutingModule, FormSharedModule]
})
export class AuthModule {}
