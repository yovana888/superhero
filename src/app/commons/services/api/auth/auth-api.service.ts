/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, User } from 'firebase/auth';

import { IRequestLogin, IRegisterUser, IPerfilUser } from './auth-model.interface';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
	userHero: any;
	constructor(private _auth: AngularFireAuth) {
		this._auth.authState.subscribe((user) => {
			if (user) {
				this.userHero = user;
				localStorage.setItem('userHero', JSON.stringify(this.userHero));
			} else {
				localStorage.setItem('userHero', 'null');
			}
		});
	}

	// Returns true when user is looged
	get isLoggedIn(): boolean {
		const userHero = JSON.parse(localStorage.getItem('userHero')!);
		return userHero !== null ? true : false;
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

	getInfoUser() {
		return this._auth.authState;
	}

	googleAuth() {
		const provider = new GoogleAuthProvider();
		return this._auth.signInWithPopup(provider);
	}

	signOut() {
		return this._auth.signOut();
	}
}
