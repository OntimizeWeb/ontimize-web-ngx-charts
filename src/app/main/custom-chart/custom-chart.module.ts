import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartComponentModule } from 'ontimize-web-ngx-charts';
import { CustomChartComponent } from './custom-chart.component';
import { CustomChartRoutingModule } from './custom-chart-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CustomChartComponent],
  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FormsModule,
    OChartComponentModule,
    CustomChartRoutingModule
  ]
})
export class CustomChartModule { }
