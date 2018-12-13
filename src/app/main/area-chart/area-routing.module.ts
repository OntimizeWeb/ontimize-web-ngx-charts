import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackedAreaModule } from 'app/main/area-chart/stacked-area/stacked-area.module';
import { RadarModule } from 'app/main/area-chart/radar/radar.module';

export function loadStackedAreaModule() {
  return StackedAreaModule;
}

export function loadRadarModule() {
  return RadarModule;
}

const routes: Routes = [
  {
    path: 'radar',
    loadChildren: loadRadarModule
  },
  {
    path: 'stackedArea',
    loadChildren: loadStackedAreaModule
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
