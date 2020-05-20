import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'line',
      loadChildren: () => import('./line/line.module').then(m => m.LineModule)
    },
    {
      path: 'lineplusbar',
      loadChildren: () => import('./lineplusbar/lineplusbar.module').then(m => m.LineplusbarModule)
    },
    {
      path: 'ohlc',
      loadChildren: () => import('./ohlc/ohlc.module').then(m => m.OhlcModule)
    },
    {
      path: 'parallelCoordinates',
      loadChildren: () => import('./parallel-coordinates/parallel-coordinates.module').then(m => m.ParallelCoordinatesModule)
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineRoutingModule { }
