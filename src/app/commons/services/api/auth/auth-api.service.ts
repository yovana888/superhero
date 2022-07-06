import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat/app';

import { IRequestLogin, IRegisterUser, ICreatePerfilUser } from './auth-model.interface';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
	constructor(private _auth: AngularFireAuth, private _firestore: AngularFirestore) {}

	loginWithEmailPassword(credentials: IRequestLogin): Promise<firebase.auth.UserCredential> {
		return this._auth.signInWithEmailAndPassword(credentials.email, credentials.password);
	}

	registerWithEmailPassword(formData: IRegisterUser): Promise<any> {
		return this._auth.createUserWithEmailAndPassword(formData.email, formData.password);
	}

	createProfileUser(idUser: string, formData: ICreatePerfilUser): Promise<any> {
		return this._firestore.collection('users').doc(idUser).set(formData);
	}
}
