import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from '../app/pages/notfound-page/notfound-page.component';

/*guards */
import { AuthGuard } from './commons/guards/auth.guard';
import { PATHS_AUTH_PAGES, PATHS_HOME_PAGES } from './commons/config/path-pages';

const routes: Routes = [
	{
		path: PATHS_AUTH_PAGES.onlyPath,
		loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: PATHS_HOME_PAGES.onlyPath,
		loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
		canActivate: [AuthGuard]
	},
	{
		path: '',
		redirectTo: PATHS_HOME_PAGES.onlyPath,
		pathMatch: 'full'
	},
	{
		path: '**',
		component: NotfoundPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
