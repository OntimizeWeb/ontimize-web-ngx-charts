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
import { GaugeModule } from './gauge/gauge.module';
import { BubbleModule } from './bubble/bubble.module';
import { BulletModule } from './bullet/bullet.module';
import {  StackedAreaModule } from './stacked-area/stacked-area.module';

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

export function loadDirectedGraphModule(){
  return DirectedGraphModule;
}

export function loadCandlestickModule(){
  return CandlestickModule;
}

export function loadOhlcModule(){
  return OhlcModule;
}

export function loadGaugeModule() {
  return GaugeModule;
}

export function loadBubbleModule() {
  return BubbleModule;
}

export function loadBulletModule() {
  return BulletModule;
}

export function loadStackedAreaModule() {
  return StackedAreaModule;
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
        loadChildren: loadDirectedGraphModule
      },
      {
        path: 'candlestick',
        loadChildren: loadCandlestickModule
      },
      {
        path: 'ohlc',
        loadChildren: loadOhlcModule
      },
      {
        path: 'gauge',
        loadChildren: loadGaugeModule
      },
      {
        path: 'bubble',
        loadChildren: loadBubbleModule
      },
      {
        path: 'bullet',
        loadChildren: loadBulletModule
      },
      {
        path: 'stackedArea',
        loadChildren: loadStackedAreaModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
