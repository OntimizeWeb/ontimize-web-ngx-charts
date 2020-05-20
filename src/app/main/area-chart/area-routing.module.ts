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
    loadChildren: () => import('./radar/radar.module').then(m => m.RadarModule)
  },
  {
    path: 'stackedArea',
    loadChildren: () => import('./stacked-area/stacked-area.module').then(m => m.StackedAreaModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
