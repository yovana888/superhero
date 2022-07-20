import { NgModule } from '@angular/core';
import { GalleryLayoutComponent } from 'src/app/layouts/gallery-layout/gallery-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { SuperheroPageComponent } from './pages/superhero-page/superhero-page.component';
import { ComicsPageComponent } from './pages/comics-page/comics-page.component';

@NgModule({
	imports: [HomeRoutingModule],
	declarations: [GalleryLayoutComponent, SuperheroPageComponent, ComicsPageComponent],
	providers: []
})
export class HomeModule {}
