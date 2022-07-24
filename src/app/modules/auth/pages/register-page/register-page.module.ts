import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerifiedModalComponent } from '../../modals/email-verified-modal/email-verified-modal.component';
import { RegisterPageComponent } from './register-page.component';
import { FormSharedModule } from '../../../../modules-shared/form-shared.module';

export const routes: Routes = [{ path: '', component: RegisterPageComponent }];

@NgModule({
	declarations: [RegisterPageComponent, EmailVerifiedModalComponent],
	imports: [RouterModule.forChild(routes), FormSharedModule]
})
export class RegisterPageModule {}
