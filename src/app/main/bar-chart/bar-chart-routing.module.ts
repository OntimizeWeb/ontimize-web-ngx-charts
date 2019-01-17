

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiBarModule } from 'app/main/bar-chart/multi-bar/multi-bar.module';
import { MultiBarHorizontalModule } from 'app/main/bar-chart/multi-bar-horizontal/multi-bar-horizontal.module';
import { DiscreteBarModule } from 'app/main/bar-chart/discrete-bar/discrete-bar.module';
import { BulletModule } from 'app/main/bar-chart/bullet/bullet.module';

export function loadDiscreteBarModule() {
  return DiscreteBarModule;
}

export function loadMultiBarModule() {
  return MultiBarModule;
}

export function loadMultiBarHorizontalModule() {
  return MultiBarHorizontalModule;
}

export function loadBulletModule() {
  return BulletModule;
}

const routes: Routes = [
  {
    path: 'bullet',
    loadChildren: loadBulletModule
  },
  {
    path: 'discrete-bar',
    loadChildren: loadDiscreteBarModule
  },
  {
    path: 'multi-bar',
    loadChildren: loadMultiBarModule
  },
  {
    path: 'multi-bar-horizontal',
    loadChildren: loadMultiBarHorizontalModule
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarChartRoutingModule { }
