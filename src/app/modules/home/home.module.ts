import { NgModule } from '@angular/core';
import { GalleryLayoutComponent } from 'src/app/layouts/gallery-layout/gallery-layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { SideNavSharedModule } from 'src/app/modules-shared/sidenav-shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
	imports: [HomeRoutingModule, SideNavSharedModule, NgxSpinnerModule],
	declarations: [GalleryLayoutComponent]
})
export class HomeModule {}
