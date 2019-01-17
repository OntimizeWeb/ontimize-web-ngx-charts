import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';

import { AreaRoutingModule } from 'app/main/area-chart/area-routing.module';
import { LineChartModule } from 'app/main/line-chart/line.module';
import { GaugeModule } from 'app/main/gauge-chart/gauge.module';
import { BarChartModule } from 'app/main/bar-chart/bar-chart.module';
import { OtherChartsModule } from 'app/main/other-charts/other-charts.module';
import { BubbleChartModule } from 'app/main/bubble-chart/bubblechart.module';

export function loadLineModule() {
  return LineChartModule;
}

export function loadHomeModule() {
  return HomeModule;
}

export function loadGaugeModule() {
  return GaugeModule;
}

export function loadAreaModule() {
  return AreaRoutingModule;
}

export function loadBarModule() {
  return BarChartModule;
}

export function loadOtherChartsModule() {
  return OtherChartsModule;
}

export function loadBubbleModule() {
  return BubbleChartModule;
}


export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'line-chart',
        loadChildren: loadLineModule
      },
      {
        path: 'bar-chart',
        loadChildren: loadBarModule
      },
      {
        path: 'area',
        loadChildren: loadAreaModule
      },
      {
        path: 'bubble',
        loadChildren: loadBubbleModule
      },
      {
        path: 'other-charts',
        loadChildren: loadOtherChartsModule
      },
      {
        path: 'gauge',
        loadChildren: loadGaugeModule
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
