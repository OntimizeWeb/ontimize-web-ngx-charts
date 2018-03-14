import { Injector, forwardRef, ElementRef, OnInit, Optional, Inject, Component, NgModule } from '@angular/core';
import { MdIconRegistry, MdIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { OComponent, OFormComponent, OntimizeService, dataServiceFactory } from 'ontimize-web-ngx';

import { nvD3, NvD3Module } from 'ng2-nvd3';
import {
  OChartComponent, ChartService,
  ChartFactory, ChartDataAdapterFactory
} from 'ontimize-web-ngx-charts';

import { CustomChartFactory } from './custom.chart.factory';

// @OComponent({
//   selector: 'custom-chart',
//   providers: [
//     ChartService,
//     { provide: OChartComponent, useExisting: forwardRef(() => CustomChartComponent) }
//   ],
//   inputs: [
//     ...OChartComponent.DEFAULT_INPUTS
//   ]
// })

@Component({
  selector: 'custom-chart',
  providers: [
    MdIconRegistry,
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    { provide: OChartComponent, useExisting: forwardRef(() => CustomChartComponent) }
  ],
  inputs: OChartComponent.DEFAULT_INPUTS,
  templateUrl: './o-chart.component.html',
  styleUrls: ['./o-chart.component.scss']
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

@NgModule({
  imports: [CommonModule, NvD3Module, CommonModule, MdIconModule],
  declarations: [CustomChartComponent],
  exports: [CustomChartComponent]
})
export class CustomChartComponentModule {
}

