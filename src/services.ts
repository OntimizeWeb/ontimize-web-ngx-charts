import { Injector } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { ChartService } from './services/chart.service';

export function getChartServiceProvider() {
    return new ChartService();
}

export const OCHART_PROVIDERS: any = [
  MdIconRegistry,
  {
    provide: ChartService,
    useFactory: getChartServiceProvider,
    deps: [Injector]
  }
];
