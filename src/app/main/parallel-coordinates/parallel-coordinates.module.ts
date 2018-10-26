import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { ParallelCoordinatesRoutingModule } from './parallel-coordinates-routing.module';
import { ParallelCoordinatesComponent } from './parallel-coordinates.component';

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
