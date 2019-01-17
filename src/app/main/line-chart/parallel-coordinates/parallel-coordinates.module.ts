import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallelCoordinatesRoutingModule } from './parallel-coordinates-routing.module';
import { ParallelCoordinatesComponent } from './parallel-coordinates.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ParallelCoordinatesRoutingModule,
    SharedModule
  ],
  declarations: [
    ParallelCoordinatesComponent
  ]
})
export class ParallelCoordinatesModule { }
