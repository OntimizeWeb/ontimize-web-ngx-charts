import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: 'bullet',
    loadChildren: '../bar-chart/bullet/bullet.module#BulletModule'
  },
  {
    path: 'discrete-bar',
    loadChildren: '../bar-chart/discrete-bar/discrete-bar.module#DiscreteBarModule'
  },
  {
    path: 'multi-bar',
    loadChildren: '../bar-chart/multi-bar/multi-bar.module#MultiBarModule'
  },
  {
    path: 'multi-bar-horizontal',
    loadChildren: '../bar-chart/multi-bar-horizontal/multi-bar-horizontal.module#MultiBarHorizontalModule'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarChartRoutingModule { }
