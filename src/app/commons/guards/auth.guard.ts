import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthApiService } from '../services/api/auth/auth-api.service';
import { PATHS_AUTH_PAGES } from '../config/path-pages';
@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(public authService: AuthApiService, public router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		if (this.authService.isLoggedIn !== true) {
			this.router.navigateByUrl(PATHS_AUTH_PAGES.loginPage.withSlash);
		}
		return true;
	}
}
