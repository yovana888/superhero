import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryLayoutComponent } from 'src/app/layouts/gallery-layout/gallery-layout.component';

import { PATHS_HOME_PAGES } from './../../commons/config/path-pages';
import { AuthGuard } from 'src/app/commons/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: GalleryLayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				redirectTo: PATHS_HOME_PAGES.superhero.onlyPath,
				pathMatch: 'full'
			},
			{
				path: PATHS_HOME_PAGES.comics.onlyPath,
				loadChildren: () => import('./pages/comics-page/comics-page.module').then((m) => m.ComicsPageModule)
			},
			{
				path: PATHS_HOME_PAGES.superhero.onlyPath,
				loadChildren: () => import('./pages/superhero-page/superhero-page.module').then((m) => m.SuperHeroPageModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
