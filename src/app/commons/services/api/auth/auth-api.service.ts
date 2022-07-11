/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, User } from 'firebase/auth';

import { IRequestLogin, IRegisterUser, IPerfilUser } from './auth-model.interface';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
	userToken: any;
	constructor(private _auth: AngularFireAuth) {
		this._auth.authState.subscribe((user) => {
			if (user) {
				this.userToken = user.getIdToken();
				localStorage.setItem('userToken', JSON.stringify(this.userToken));
				JSON.parse(localStorage.getItem('userToken')!);
			} else {
				localStorage.setItem('userToken', 'null');
				JSON.parse(localStorage.getItem('userToken')!);
			}
		});
	}

	// Returns true when user is looged
	get isLoggedIn(): boolean {
		const userToken = JSON.parse(localStorage.getItem('userToken')!);
		return userToken !== null ? true : false;
	}

	loginWithEmailPassword(credentials: IRequestLogin) {
		return this._auth.signInWithEmailAndPassword(credentials.email, credentials.password);
	}

	registerWithEmailPassword(formData: IRegisterUser) {
		return this._auth.createUserWithEmailAndPassword(formData.email, formData.password);
	}
	/*get info user logged name, email, photo, email verified */
	getCurrentUser() {
		return this._auth.currentUser;
	}

	googleAuth() {
		const provider = new GoogleAuthProvider();
		return this._auth.signInWithPopup(provider);
	}
}
