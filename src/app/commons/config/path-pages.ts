//#region  PATH AUTH
const loginPage = 'login';
const registerPage = 'register';
const resetPasswordPage = 'reset';
const galleryPage = 'gallery';
const superHerosPage = 'superheros';
const comicsPage = 'comics';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: `/${registerPage}`,
		onlyPath: registerPage
	},
	resetPasswordPage: {
		withSlash: `/${resetPasswordPage}`,
		onlyPath: resetPasswordPage
	}
};
//#endregion

//#region HOME

export const PATHS_HOME_PAGES = {
	withSlash: `/${galleryPage}`,
	onlyPath: galleryPage,

	superhero: {
		withSlash: `/${galleryPage}/${superHerosPage}`,
		onlyPath: superHerosPage
	},
	comics: {
		withSlash: `/${galleryPage}/${comicsPage}`,
		onlyPath: comicsPage
	}
};

//#region NOT FOUND
export const PATH_NOT_FOUND_PAGE = {
	'not-found': {
		withSlash: '/not-found',
		onlyPath: 'not-found'
	}
};
//#endregion
