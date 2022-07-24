import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { FormSharedModule } from '../../../../modules-shared/form-shared.module';

export const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
	declarations: [LoginPageComponent],
	imports: [RouterModule.forChild(routes), FormSharedModule]
})
export class LoginPageModule {}
