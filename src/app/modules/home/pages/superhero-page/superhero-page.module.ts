import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHeroComponent } from 'src/app/commons/components/card-hero/card-hero.component';
import { HeaderFilterComponent } from 'src/app/commons/components/header-filter/header-filter.component';
import { SuperheroPageComponent } from './superhero-page.component';
import { MatGridListModule } from '@angular/material/grid-list';

export const routes: Routes = [{ path: '', component: SuperheroPageComponent }];

@NgModule({
	declarations: [SuperheroPageComponent, HeaderFilterComponent, CardHeroComponent],
	imports: [RouterModule.forChild(routes), MatGridListModule]
})
export class SuperHeroPageModule {}
