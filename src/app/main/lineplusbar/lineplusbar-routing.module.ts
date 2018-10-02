import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineplusbarComponent } from './lineplusbar.component';

const routes: Routes = [
  {
    path: '',
    component: LineplusbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineplusbarRoutingModule { }
