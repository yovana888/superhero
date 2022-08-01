import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHeroComponent } from '../../../../commons/components/card-hero/card-hero.component';
import { HeaderFilterComponent } from 'src/app/commons/components/header-filter/header-filter.component';
import { SuperheroPageComponent } from './superhero-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormSharedModule } from '../../../../modules-shared/form-shared.module';
import { HeroDetailModalModule } from '../../modals/hero-detail-modal/hero-detail-modal.module';

export const routes: Routes = [{ path: '', component: SuperheroPageComponent }];

@NgModule({
	declarations: [SuperheroPageComponent, HeaderFilterComponent, CardHeroComponent],
	imports: [RouterModule.forChild(routes), FormSharedModule, MatPaginatorModule, HeroDetailModalModule]
})
export class SuperHeroPageModule {}
