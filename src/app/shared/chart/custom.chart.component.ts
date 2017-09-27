import { Injector, forwardRef, ElementRef, OnInit, Optional, Inject } from '@angular/core';
import { OComponent, OFormComponent } from 'ontimize-web-ngx';

import {
  OChartComponent, ChartService,
  ChartFactory, ChartDataAdapterFactory
} from 'ontimize-web-ngx-charts';

import { CustomChartFactory } from './custom.chart.factory';

@OComponent({
  selector: 'custom-chart',
  providers: [
    ChartService,
    { provide: OChartComponent, useExisting: forwardRef(() => CustomChartComponent) }],
  inputs: [
    ...OChartComponent.DEFAULT_INPUTS
  ]
})
export class CustomChartComponent extends OChartComponent implements OnInit {

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector) {

    super(form, elRef, injector);
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  getChartFactory(): ChartFactory {
    return new CustomChartFactory();
  }

  getChartDataAdapterFactory(): ChartDataAdapterFactory {
    return super.getChartDataAdapterFactory();
  }

}
