import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'line',
      loadChildren: '../line-chart/line/line.module#LineModule'
    },
    {
      path: 'lineplusbar',
      loadChildren: '../line-chart/lineplusbar/lineplusbar.module#LineplusbarModule'
    },
    {
      path: 'ohlc',
      loadChildren: '../line-chart/ohlc/ohlc.module#OhlcModule'
    },
    {
      path: 'parallelCoordinates',
      loadChildren: '../line-chart/parallel-coordinates/parallel-coordinates.module#ParallelCoordinatesModule'
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
