import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

@NgModule({
	declarations: [AuthLayoutComponent],
	imports: [AuthRoutingModule]
})
export class AuthModule {}
