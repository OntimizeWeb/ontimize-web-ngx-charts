import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BarChartRoutingModule } from 'app/main/bar-chart/bar-chart-routing.module';

@NgModule({
  imports: [
    SharedModule,
    BarChartRoutingModule
  ]
})
export class BarChartModule { }
