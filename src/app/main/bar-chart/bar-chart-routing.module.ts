import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'bullet',
    loadChildren: () => import('./bullet/bullet.module').then(m => m.BulletModule)
  },
  {
    path: 'discrete-bar',
    loadChildren: () => import('./discrete-bar/discrete-bar.module').then(m => m.DiscreteBarModule)
  },
  {
    path: 'multi-bar',
    loadChildren: () => import('./multi-bar/multi-bar.module').then(m => m.MultiBarModule)
  },
  {
    path: 'multi-bar-horizontal',
    loadChildren: () => import('./multi-bar-horizontal/multi-bar-horizontal.module').then(m => m.MultiBarHorizontalModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarChartRoutingModule { }
