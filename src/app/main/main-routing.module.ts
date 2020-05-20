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
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'line-chart',
        loadChildren: () => import('./line-chart/line.module').then(m => m.LineChartModule)
      },
      {
        path: 'bar-chart',
        loadChildren: () => import('./bar-chart/bar-chart.module').then(m => m.BarChartModule)
      },
      {
        path: 'area',
        loadChildren: () => import('./area-chart/area-routing.module').then(m => m.AreaRoutingModule)
      },
      {
        path: 'bubble',
        loadChildren: () => import('./bubble-chart/bubblechart.module').then(m => m.BubbleChartModule)
      },
      {
        path: 'other-charts',
        loadChildren: () => import('./other-charts/other-charts.module').then(m => m.OtherChartsModule)
      },
      {
        path: 'gauge',
        loadChildren: () => import('./gauge-chart/gauge.module').then(m => m.GaugeModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
