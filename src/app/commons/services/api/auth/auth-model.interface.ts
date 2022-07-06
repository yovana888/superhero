export interface IReponseUser {
	uid: string;
	email: string;
	displayName: string;
	photoURL?: string;
	emailVerified: boolean;
}

export interface IRequestLogin {
	email: string;
	password: string;
}

export interface IRegisterUser {
	fullName: string;
	email: string;
	password: string;
}

export interface ICreatePerfilUser {
	fullName: string;
	photoUrl: string;
	description: string;
}
