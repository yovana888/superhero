//#region  PATH AUTH
const init = 'auth';
const loginPage = 'login';
const registerPage = 'register';
const resetPasswordPage = 'reset';
const gallery = 'gallery';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${init}/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: `/${init}/${registerPage}`,
		onlyPath: registerPage
	},
	resetPasswordPage: {
		withSlash: `/${init}/${resetPasswordPage}`,
		onlyPath: resetPasswordPage
	},
	gallery: {
		withSlash: `/${init}/${gallery}`,
		onlyPath: gallery
	}
};
//#endregion

//#region NOT FOUND
export const PATH_NOT_FOUND_PAGE = {
	'not-found': {
		withSlash: '/not-found',
		onlyPath: 'not-found'
	}
};
//#endregion