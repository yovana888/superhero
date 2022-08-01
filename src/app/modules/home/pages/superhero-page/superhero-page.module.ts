import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHeroComponent } from '../../../../commons/components/card-hero/card-hero.component';
import { HeaderFilterComponent } from 'src/app/commons/components/header-filter/header-filter.component';
import { SuperheroPageComponent } from './superhero-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormSharedModule } from '../../../../modules-shared/form-shared.module';
import { LoaderComponent } from 'src/app/commons/components/loader/loader.component';

export const routes: Routes = [{ path: '', component: SuperheroPageComponent }];

@NgModule({
	declarations: [SuperheroPageComponent, HeaderFilterComponent, CardHeroComponent, LoaderComponent],
	imports: [RouterModule.forChild(routes), FormSharedModule, MatPaginatorModule]
})
export class SuperHeroPageModule {}
