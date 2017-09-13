import { NgModule } from '@angular/core';
// import {
//   NgModule,
//   CUSTOM_ELEMENTS_SCHEMA
// } from '@angular/core';

import { OCHART_MODULES } from './src/components';
import { OCHART_PROVIDERS } from './src/services';

/**
 * Exports
 */
export * from './src/components';
export * from './src/core';
export * from './src/interfaces';
export * from './src/services';

// import 'd3';
// import 'nvd3';

@NgModule({
  imports: OCHART_MODULES,
  exports: OCHART_MODULES,
  providers: OCHART_PROVIDERS
  // ,
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class OChartModule {
}
