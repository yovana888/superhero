import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsPageComponent } from './comics-page.component';

export const routes: Routes = [{ path: '', component: ComicsPageComponent }];

@NgModule({
	declarations: [ComicsPageComponent],
	imports: [RouterModule.forChild(routes)]
})
export class ComicsPageModule {}
