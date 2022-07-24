import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPageComponent } from './reset-password-page.component';
import { FormSharedModule } from '../../../../modules-shared/form-shared.module';
export const routes: Routes = [{ path: '', component: ResetPasswordPageComponent }];

@NgModule({
	declarations: [ResetPasswordPageComponent],
	imports: [RouterModule.forChild(routes), FormSharedModule]
})
export class ResetPasswordPageModule {}
