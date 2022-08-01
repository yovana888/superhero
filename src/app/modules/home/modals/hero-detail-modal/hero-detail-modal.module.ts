import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeroDetailModalComponent } from './hero-detail-modal.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [MatIconModule, MatExpansionModule, CommonModule, MatButtonModule],
	exports: [],
	declarations: [HeroDetailModalComponent],
	providers: []
})
export class HeroDetailModalModule {}
