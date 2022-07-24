//#region  PATH AUTH
const auth = 'auth';
const loginPage = 'login';
const registerPage = 'register';
const resetPasswordPage = 'reset';

export const PATHS_AUTH_PAGES = {
	withSlash: `/${auth}`,
	onlyPath: auth,
	loginPage: {
		withSlash: `/${auth}/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: `/${auth}/${registerPage}`,
		onlyPath: registerPage
	},
	resetPasswordPage: {
		withSlash: `/${auth}/${resetPasswordPage}`,
		onlyPath: resetPasswordPage
	}
};
//#endregion

//#region HOME
const homePage = 'home';
const superHerosPage = 'superheros';
const comicsPage = 'comics';

export const PATHS_HOME_PAGES = {
	withSlash: `/${homePage}`,
	onlyPath: homePage,

	superhero: {
		withSlash: `/${homePage}/${superHerosPage}`,
		onlyPath: superHerosPage
	},
	comics: {
		withSlash: `/${homePage}/${comicsPage}`,
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
