import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadarComponent } from './radar.component';

const routes: Routes = [
  {
    path: '',
    component: RadarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadarRoutingModule { }
