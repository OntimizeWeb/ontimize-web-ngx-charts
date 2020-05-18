import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'donut',
    loadChildren: '../other-charts/donut/donut.module#DonutModule'
  },
  {
    path: 'directedGraph',
    loadChildren: '../other-charts/directed-graph/directed-graph.module#DirectedGraphModule'
  },
  {
    path: 'candlestick',
    loadChildren: '../other-charts/candlestick/candlestick.module#CandlestickModule'
  },
  {
    path: 'pie',
    loadChildren: '../other-charts/pie/pie.module#PieModule'
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherChartsRoutingModule { }
