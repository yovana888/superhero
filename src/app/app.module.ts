import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseModule } from './modules-shared/firebase-shared.module';

import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
