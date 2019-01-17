import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectedGraphComponent } from './directed-graph.component';

const routes: Routes = [
  {
    path: '',
    component: DirectedGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectedGraphRoutingModule { }
