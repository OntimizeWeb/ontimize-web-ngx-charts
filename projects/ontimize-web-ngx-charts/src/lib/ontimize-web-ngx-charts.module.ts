import { NgModule } from '@angular/core';

import { OCHART_MODULES } from './o-components';
import { OCHART_PROVIDERS } from './o-services';

/**
 * Exports
 */
export * from './o-components';
export * from './o-models';
export * from './o-adapters';
export * from './o-interfaces';
export * from './o-services';

@NgModule({
  imports: OCHART_MODULES,
  exports: OCHART_MODULES,
  providers: OCHART_PROVIDERS
})

export class OChartModule { }
