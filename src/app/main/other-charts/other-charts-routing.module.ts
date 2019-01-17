import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutModule } from 'app/main/other-charts/donut/donut.module';
import { DirectedGraphModule } from 'app/main/other-charts/directed-graph/directed-graph.module';
import { CandlestickModule } from 'app/main/other-charts/candlestick/candlestick.module';
import { PieModule } from 'app/main/other-charts/pie/pie.module';

export function loadDonutModule() {
  return DonutModule;
}

export function loadDirectedGraphModule() {
  return DirectedGraphModule;
}

export function loadCandlestickModule() {
  return CandlestickModule;
}

export function loadPieModule() {
  return PieModule;
}


const routes: Routes = [
  {
    path: 'donut',
    loadChildren: loadDonutModule
  },
  {
    path: 'directedGraph',
    loadChildren: loadDirectedGraphModule
  },
  {
    path: 'candlestick',
    loadChildren: loadCandlestickModule
  },
  {
    path: 'pie',
    loadChildren: loadPieModule
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherChartsRoutingModule { }
