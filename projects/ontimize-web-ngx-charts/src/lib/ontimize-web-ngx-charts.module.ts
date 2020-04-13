import { NgModule } from '@angular/core';

// import { OCHART_MODULES } from './components';
import { OChartComponentModule } from './components/chart/o-chart.module';
// import { OCHART_PROVIDERS } from './services';

/**
 * Exports
 */

@NgModule({
  imports: OChartComponentModule,
  exports: OChartComponentModule,
  providers: OCHART_PROVIDERS
})

export class OntimizeWebNgxChartsModule { }
