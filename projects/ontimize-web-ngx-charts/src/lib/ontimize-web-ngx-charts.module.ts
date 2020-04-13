import { NgModule } from '@angular/core';

import { OCHART_PROVIDERS } from './o-services';

// import { OChartComponentModule } from './components/chart/o-chart.module';
/**
 * Exports
 */
//TODO
export * from './o-components';
export * from './o-models';
export * from './o-adapters';
export * from './o-interfaces';
export * from './o-services';

@NgModule({
  // imports: OCHART_MODULES,
  // exports: OCHART_MODULES,
  providers: OCHART_PROVIDERS
})

export class OChartModule { }
