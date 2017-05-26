import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MdIconModule,
  MdIconRegistry
} from '@angular/material';

// Importing d3 and nv packages
import * as d3 from 'd3';
import * as nv from 'nvd3';

if (!d3) {
  console.error('D3 library not found');
}
if (!nv) {
  console.error('nvD3 library not found');
}

import { nvD3 } from 'ng2-nvd3';
import { OChartComponent } from './src/components/chart/o-chart.component';

/**
 * Exports
 */
export * from './src/components/chart/o-chart.component';
export * from './src/components/chart/o-chart.factory';
export * from './src/core';
export * from './src/interfaces';
export * from './src/services';

/**
 * Collection of component directives.
 */
const OCHART_DIRECTIVES: any[] = [
  OChartComponent,
  nvD3
];

@NgModule({
  imports: [
    CommonModule,
    MdIconModule
  ],
  declarations: OCHART_DIRECTIVES,
  exports: [
    OChartComponent,
    nvD3
  ],
  providers: [
    MdIconRegistry
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OChartModule { }
