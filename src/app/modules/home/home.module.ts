import { NgModule } from '@angular/core';
import { GalleryLayoutComponent } from 'src/app/layouts/gallery-layout/gallery-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { SideNavSharedModule } from 'src/app/modules-shared/sidenav-shared.module';

@NgModule({
	imports: [HomeRoutingModule, SideNavSharedModule],
	declarations: [GalleryLayoutComponent],
	providers: []
})
export class HomeModule {}
