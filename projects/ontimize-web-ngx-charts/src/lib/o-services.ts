import { Injector } from '@angular/core';

import { ChartService } from './services/chart.service';

export * from './services/chart.service';

export function getChartServiceProvider() {
  return new ChartService();
}

export const OCHART_PROVIDERS: any = [{
  provide: ChartService,
  useFactory: getChartServiceProvider,
  deps: [Injector]
}];
