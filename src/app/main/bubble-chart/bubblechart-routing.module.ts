import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
      path: 'bubble',
      loadChildren: () => import('./bubble/bubble.module').then(m => m.BubbleModule)
    },
    {
      path: 'scatter',
      loadChildren: () => import('./scatter/scatter.module').then(m => m.ScatterModule)
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleChartRoutingModule { }
