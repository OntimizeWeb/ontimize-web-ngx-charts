import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParallelCoordinatesModule } from 'app/main/line-chart/parallel-coordinates/parallel-coordinates.module';
import { OhlcModule } from 'app/main/line-chart/ohlc/ohlc.module';
import { LineplusbarModule } from 'app/main/line-chart/lineplusbar/lineplusbar.module';
import { LineModule } from 'app/main/line-chart/line/line.module';

export function loadParallelCoordinatesModule() {
  return ParallelCoordinatesModule;
}

export function loadOhlcModule() {
  return OhlcModule;
}

export function loadLinePlusBarModule() {
  return LineplusbarModule;
}

export function loadLineModule() {
  return LineModule;
}

const routes: Routes = [
    {
      path: 'line',
      loadChildren: loadLineModule
    },
    {
      path: 'lineplusbar',
      loadChildren: loadLinePlusBarModule
    },
    {
      path: 'ohlc',
      loadChildren: loadOhlcModule
    },
    {
      path: 'parallelCoordinates',
      loadChildren: loadParallelCoordinatesModule
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
