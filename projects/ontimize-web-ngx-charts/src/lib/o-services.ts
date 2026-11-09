import { Injector } from '@angular/core';
import { O_CHART_ON_DEMAND_SERVICE, OntimizePreferencesService, preferencesServiceFactory } from 'ontimize-web-ngx';

import { ChartService } from './services/chart.service';
import { OChartOnDemandService } from './services/chart-on-demand.service';
import { TranslateChartService } from './services/translate-chart.service';

export * from './services/chart.service';
export * from './services/chart-on-demand.service';
export * from './services/translate-chart.service'

export function getChartServiceProvider() {
  return new ChartService();
}

export const OCHART_PROVIDERS: any = [{
  provide: ChartService,
  useFactory: getChartServiceProvider,
  deps: [Injector]
}, TranslateChartService,
  OChartOnDemandService,
  { provide: O_CHART_ON_DEMAND_SERVICE, useExisting: OChartOnDemandService },
  { provide: OntimizePreferencesService, useFactory: preferencesServiceFactory, deps: [Injector] }
];
