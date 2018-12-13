import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScatterModule } from 'app/main/bubble-chart/scatter/scatter.module';
import { BubbleModule } from 'app/main/bubble-chart/bubble/bubble.module';


export function loadBubbleModule() {
  return BubbleModule;
}

export function loadScatterModule() {
  return ScatterModule;
}
const routes: Routes = [
    {
      path: 'bubble',
      loadChildren: loadBubbleModule
    },
    {
      path: 'scatter',
      loadChildren: loadScatterModule
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BubbleChartRoutingModule { }
