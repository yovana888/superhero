import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { GalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		LoginLayoutComponent,
		GalleryLayoutComponent,
		RegisterPageComponent,
		ResetPasswordPageComponent,
		NotfoundPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
