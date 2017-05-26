export * from './services/chart.service';

import {
  Injector
} from '@angular/core';

import { ChartService } from './services/chart.service';

export function chartsProviders(args: any = {}): any {
 return [
   getChartServiceProvider()
 ];
}

function getChartServiceProvider() {
  return [
    {
      provide: ChartService,
      useFactory: () => new ChartService(),
      deps: [Injector]
    }
  ];
}
