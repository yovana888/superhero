import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { PATHS_HOME_PAGES, PATHS_AUTH_PAGES } from 'src/app/commons/config/path-pages';
import { AuthApiService } from 'src/app/commons/services/api/auth/auth-api.service';

@Component({
	selector: 'app-gallery-layout',
	templateUrl: './gallery-layout.component.html',
	styleUrls: ['./gallery-layout.component.scss']
})
export class GalleryLayoutComponent implements OnInit {
	constructor(private _auth: AuthApiService, private _router: Router, private _toast: NgToastService) {}

	// eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
	ngOnInit(): void {}
	superHeroPath = PATHS_HOME_PAGES.superhero.withSlash;
	comicsPath = PATHS_HOME_PAGES.comics.withSlash;
	loginPath = PATHS_AUTH_PAGES.loginPage.withSlash;

	isExpanded = false;
	indexPrevious = 0;
	objMenu = [
		{ title: 'SuperHeros', active: true, icon: 'settings_accessibility', link: this.superHeroPath },
		{ title: 'Comics', active: false, icon: 'menu_book', link: this.comicsPath },
		{ title: 'My account', active: false, icon: 'account_circle', link: '' },
		{ title: 'Logout', active: false, icon: 'logout', link: '' }
	];

	toggleActive(index: number): void {
		const itemMenuActual = this.objMenu[index];

		this.objMenu[this.indexPrevious].active = false;
		itemMenuActual.active = true;
		this.indexPrevious = index;

		if (itemMenuActual.link !== '') {
			this._router.navigateByUrl(itemMenuActual.link);
		}
	}

	logout(): void {
		this._auth
			.signOut()
			.then(() => {
				localStorage.removeItem('userHero');
				this._router.navigateByUrl(this.loginPath);
			})
			.catch(() =>
				this._toast.error({ detail: 'Error', summary: 'There was an error closing session', duration: 6000 })
			);
	}
}
