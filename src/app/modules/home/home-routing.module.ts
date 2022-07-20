import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryLayoutComponent } from 'src/app/layouts/gallery-layout/gallery-layout.component';
import { SuperheroPageComponent } from './pages/superhero-page/superhero-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';

import { PATHS_HOME_PAGES } from './../../commons/config/path-pages';

const routes: Routes = [
	{
		path: '',
		component: GalleryLayoutComponent,
		children: [
			{
				path: PATHS_HOME_PAGES.superhero.onlyPath,
				component: SuperheroPageComponent
			},
			{
				path: PATHS_HOME_PAGES.comics.onlyPath,
				component: ComicsPageComponent
			},
			{
				path: '',
				redirectTo: PATHS_HOME_PAGES.onlyPath
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
