import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  // MdIconRegistry,
  MdIconModule
} from '@angular/material';

import { OChartComponent } from './src/components/chart/o-chart.component';
import { OCHART_PROVIDERS } from './src/services';

/**
 * Exports
 */
export * from './src/components/chart/o-chart.component';
export * from './src/components/chart/o-chart.factory';
export * from './src/core';
export * from './src/interfaces';
export * from './src/services/chart.service';

import 'd3';
import 'nvd3';
import { NvD3Module } from 'ng2-nvd3';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    NvD3Module
  ],
  declarations: [
    OChartComponent
  ],
  exports: [
    OChartComponent
  ],
  providers: OCHART_PROVIDERS,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OChartModule { }
