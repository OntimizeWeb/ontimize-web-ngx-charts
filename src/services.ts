import { Injector } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { ChartService } from './services/chart.service';

export const OCHART_PROVIDERS: any = [
  MdIconRegistry,
  {
    provide: ChartService,
    useFactory: () => new ChartService(),
    deps: [Injector]
  }
];
