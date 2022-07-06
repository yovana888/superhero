import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { GalleryLayoutComponent } from './layouts/gallery-layout/gallery-layout.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

import { FormSharedModule } from './modules-shared/form-shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseModule } from './modules-shared/firebase-shared.module';

import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		GalleryLayoutComponent,
		RegisterPageComponent,
		ResetPasswordPageComponent,
		NotfoundPageComponent,
		AuthLayoutComponent
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		FirebaseModule, // resto de modulos para firebase
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormSharedModule, // elementos basicos para form
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
