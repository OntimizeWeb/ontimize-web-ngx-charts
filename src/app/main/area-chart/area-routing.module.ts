import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadarModule } from '../area-chart/radar/radar.module';
import { StackedAreaModule } from '../area-chart/stacked-area/stacked-area.module';

export function loadStackedAreaModule() {
  return StackedAreaModule;
}

export function loadRadarModule() {
  return RadarModule;
}

const routes: Routes = [
  {
    path: 'radar',
    loadChildren: '../area-chart/radar/radar.module#RadarModule'
  },
  {
    path: 'stackedArea',
    loadChildren: '../area-chart/stacked-area/stacked-area.module#StackedAreaModule'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
