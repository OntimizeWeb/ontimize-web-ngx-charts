import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';


export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'line-chart',
        loadChildren: '../main/line-chart/line.module#LineChartModule'
      },
      {
        path: 'bar-chart',
        loadChildren: '../main/bar-chart/bar-chart.module#BarChartModule'
      },
      {
        path: 'area',
        loadChildren: '../main/area-chart/area-routing.module#AreaRoutingModule'
      },
      {
        path: 'bubble',
        loadChildren: '../main/bubble-chart/bubblechart.module#BubbleChartModule'
      },
      {
        path: 'other-charts',
        loadChildren: '../main/other-charts/other-charts.module#OtherChartsModule'
      },
      {
        path: 'gauge',
        loadChildren: '../main/gauge-chart/gauge.module#GaugeModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
