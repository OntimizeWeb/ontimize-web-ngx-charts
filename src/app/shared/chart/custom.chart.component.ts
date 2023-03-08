import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, Inject, Injector, NgModule, OnInit, Optional } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { dataServiceFactory, OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartFactory, OChartComponent } from 'ontimize-web-ngx-charts';
import { NvD3Module } from 'ontimize-web-ngx-nvd3';

import { CustomChartFactory } from './custom.chart.factory';

@Component({
  selector: 'custom-chart',
  providers: [
    MatIconRegistry,
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    { provide: OChartComponent, useExisting: forwardRef(() => CustomChartComponent) }
  ],
  inputs: OChartComponent.DEFAULT_INPUTS_O_CHART,
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
    return new CustomChartFactory(this.injector.get(OTranslateService));
  }

  getChartDataAdapterFactory() {
    return super.getChartDataAdapterFactory();
  }

}

@NgModule({
  imports: [CommonModule, NvD3Module, CommonModule, MatIconModule],
  declarations: [CustomChartComponent],
  exports: [CustomChartComponent]
})
export class CustomChartComponentModule { }
