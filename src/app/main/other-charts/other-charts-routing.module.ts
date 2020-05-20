import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'donut',
    loadChildren: () => import('./donut/donut.module').then(m => m.DonutModule)
  },
  {
    path: 'directedGraph',
    loadChildren: () => import('./directed-graph/directed-graph.module').then(m => m.DirectedGraphModule)
  },
  {
    path: 'candlestick',
    loadChildren: () => import('./candlestick/candlestick.module').then(m => m.CandlestickModule)
  },
  {
    path: 'pie',
    loadChildren: () => import('./pie/pie.module').then(m => m.PieModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherChartsRoutingModule { }
