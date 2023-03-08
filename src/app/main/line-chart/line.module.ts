import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LineRoutingModule } from 'app/main/line-chart/line-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LineRoutingModule
  ]
})
export class LineChartModule { }
