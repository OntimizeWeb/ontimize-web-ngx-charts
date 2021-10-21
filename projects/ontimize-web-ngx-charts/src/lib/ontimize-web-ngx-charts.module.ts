import { NgModule } from '@angular/core';

import { OCHART_MODULES } from './o-components';
import { OCHART_PROVIDERS } from './o-services';
import { OChartOnDemandService } from './services/chart-on-demand.service';

/**
 * Exports
 */
export * from './o-components';
export * from './o-models';
export * from './o-adapters';
export * from './o-interfaces';
export * from './o-services';
// export * from './util/o-chart-translate.pipe';

@NgModule({
  imports: OCHART_MODULES,
  exports: OCHART_MODULES,
  providers: [OCHART_PROVIDERS, OChartOnDemandService]
})

export class OChartModule { }
