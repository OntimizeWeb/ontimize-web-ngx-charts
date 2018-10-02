import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { LineModule } from './line/line.module';
import { PieModule } from './pie/pie.module';
import { DiscreteBarModule } from './discrete-bar/discrete-bar.module';
import { MultiBarModule } from './multi-bar/multi-bar.module';
import { MultiBarHorizontalModule } from './multi-bar-horizontal/multi-bar-horizontal.module';
import { ScatterModule } from './scatter/scatter.module';
import { DonutModule } from './donut/donut.module';
import { LineplusbarModule } from './lineplusbar/lineplusbar.module';
import { DirectedGraphModule } from './directed-graph/directed-graph.module';
import { CandlestickModule } from './candlestick/candlestick.module';
import { OhlcModule } from './ohlc/ohlc.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadLineModule() {
  return LineModule;
}

export function loadPieModule() {
  return PieModule;
}

export function loadDiscreteBarModule() {
  return DiscreteBarModule;
}

export function loadMultiBarModule() {
  return MultiBarModule;
}

export function loadMultiBarHorizontalModule() {
  return MultiBarHorizontalModule;
}

export function loadScatterModule() {
  return ScatterModule;
}

export function loadDonutModule(){
  return DonutModule;
}

export function loadLinePlusBarModule(){
  return LineplusbarModule;
}

export function loadDirectedGraph(){
  return DirectedGraphModule;
}

export function loadCandlestickChart(){
  return CandlestickModule;
}

export function loadOhlcChart(){
  return OhlcModule;
}

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        path: 'line',
        loadChildren: loadLineModule
      },
      {
        path: 'pie',
        loadChildren: loadPieModule
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
      {
        path: 'scatter',
        loadChildren: loadScatterModule
      },
      {
        path: 'donut',
        loadChildren: loadDonutModule
      },
      {
        path: 'lineplusbar',
        loadChildren: loadLinePlusBarModule
      },
      {
        path: 'directedGraph',
        loadChildren: loadDirectedGraph
      },
      {
        path: 'candlestick',
        loadChildren: loadCandlestickChart
      },
      {
        path: 'ohlc',
        loadChildren: loadOhlcChart
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
