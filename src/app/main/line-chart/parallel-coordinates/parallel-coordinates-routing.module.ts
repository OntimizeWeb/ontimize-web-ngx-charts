import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParallelCoordinatesComponent } from './parallel-coordinates.component';

const routes: Routes = [
  {
    path: '',
    component: ParallelCoordinatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParallelCoordinatesRoutingModule { }
