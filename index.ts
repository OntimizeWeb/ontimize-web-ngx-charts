import { NgModule } from '@angular/core';

import { OCHART_MODULES } from './src/components';
import { OCHART_PROVIDERS } from './src/services';

/**
 * Exports
 */
export * from './src/adapters';
export * from './src/components';
export * from './src/models';
export * from './src/interfaces';
export * from './src/services';

@NgModule({
  imports: OCHART_MODULES,
  exports: OCHART_MODULES,
  providers: OCHART_PROVIDERS
})
export class OChartModule { }
