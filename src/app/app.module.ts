import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseModule } from './modules-shared/firebase-shared.module';

import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { LoaderInterceptor } from './commons/services/spinner/interceptor.service';
import { LoaderService } from './commons/services/spinner/spinner.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		CommonModule,
		AngularFireModule.initializeApp(environment.firebase),
		FirebaseModule, // resto de modulos para firebase
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgToastModule
	],
	providers: [LoaderService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
