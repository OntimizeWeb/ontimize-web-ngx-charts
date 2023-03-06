import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ontimize-web-ngx-nvd3';

import { OChartComponent } from './o-chart.component';
@NgModule({
  imports: [CommonModule, NvD3Module],
  declarations: [OChartComponent],
  exports: [OChartComponent]
})
export class OChartComponentModule { }