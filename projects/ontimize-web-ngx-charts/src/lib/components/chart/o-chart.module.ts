import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OChartComponent } from './o-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, NgxChartsModule],
  declarations: [OChartComponent],
  exports: [OChartComponent]
})
export class OChartComponentModule { }