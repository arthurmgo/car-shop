import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCardComponent } from './components/car-card/car-card.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CarCardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    
  ]
})
export class CoreModule { }
