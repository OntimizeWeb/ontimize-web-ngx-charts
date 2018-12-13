import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BubbleChartRoutingModule } from 'app/main/bubble-chart/bubblechart-routing.module';


@NgModule({
  imports: [
    SharedModule,
    BubbleChartRoutingModule
  ],
  declarations: [

  ]
})
export class BubbleChartModule { }
