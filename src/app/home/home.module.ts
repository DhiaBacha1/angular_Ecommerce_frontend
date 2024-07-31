import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbCarouselModule




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule // Add NgbCarouselModule here

  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
