import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandlestickComponent } from './candlestick.component';

const routes: Routes = [
  {
    path: '',
    component: CandlestickComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandlestickRoutingModule { }
