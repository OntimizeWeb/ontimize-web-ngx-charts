import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'bubble',
      loadChildren: '../bubble-chart/bubble/bubble.module#BubbleModule'
    },
    {
      path: 'scatter',
      loadChildren: '../bubble-chart/scatter/scatter.module#ScatterModule'
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleChartRoutingModule { }
