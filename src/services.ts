import { Injector } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { ChartService } from './services/chart.service';

export * from './services/chart.service';

export function getChartServiceProvider() {
  return new ChartService();
}

export const OCHART_PROVIDERS: any = [
  MatIconRegistry,
  {
    provide: ChartService,
    useFactory: getChartServiceProvider,
    deps: [Injector]
  }
];
