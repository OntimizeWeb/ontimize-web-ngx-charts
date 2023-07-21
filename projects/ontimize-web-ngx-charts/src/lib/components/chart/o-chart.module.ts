import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ontimize-web-ngx-nvd3';

import { OChartComponent } from './o-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [CommonModule, NvD3Module, NgxChartsModule],
  declarations: [OChartComponent],
  exports: [OChartComponent]
})
export class OChartComponentModule { }