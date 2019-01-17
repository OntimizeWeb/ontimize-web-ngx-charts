import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiBarComponent } from './multi-bar.component';

const routes: Routes = [
  {
    path: '',
    component: MultiBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiBarRoutingModule { }
