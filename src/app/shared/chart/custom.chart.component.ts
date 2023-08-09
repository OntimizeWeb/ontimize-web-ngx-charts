import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Injector, NgModule, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { dataServiceFactory, OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartFactory, OChartComponent } from 'ontimize-web-ngx-charts';


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
    protected injector: Injector, ref:ViewContainerRef, com:ComponentFactoryResolver) {

    super(form, elRef, injector,ref, com);
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
  imports: [CommonModule, CommonModule, MatIconModule],
  declarations: [CustomChartComponent],
  exports: [CustomChartComponent]
})
export class CustomChartComponentModule { }
