import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, forwardRef, Inject, Injector, NgModule, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { AppearanceService, dataServiceFactory, OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { ChartFactory, OChartComponent } from 'ontimize-web-ngx-charts';


import { CustomChartFactory } from './custom.chart.factory';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'custom-chart',
  providers: [
    MatIconRegistry,
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] },
    { provide: OChartComponent, useExisting: forwardRef(() => CustomChartComponent) }
  ],
  inputs: [
    // attr [string]: list identifier. It is mandatory if data are provided through the data attribute. Default: entity (if set).
    'oattr: attr',

    // service [string]: JEE service path. Default: no value.
    'service',

    'serviceType : service-type',

    // entity [string]: entity of the service. Default: no value.
    'entity',

    // query-on-init [no|yes]: query on init. Default: yes.
    'queryOnInit: query-on-init',

    // query-on-init [no|yes]: query on bind. Default: yes.
    'queryOnBind: query-on-bind',

    'queryOnEvent: query-on-event',

    'pageable',

    // columns [string]: columns of the entity, separated by ';'. Default: no value.
    'columns',

    // keys [string]: entity keys, separated by ';'. Default: no value.
    'keys',

    // parent-keys [string]: parent keys to filter, separated by ';'. Default: no value.
    'parentKeys: parent-keys',

    // static-data [Array<any>] : way to populate with static data. Default: no value.
    'staticData: static-data',

    // query-method [string]: name of the service method to perform queries. Default: query.
    'queryMethod: query-method',

    // paginated-query-method [string]: name of the service method to perform paginated queries. Default: advancedQuery.
    'paginatedQueryMethod : paginated-query-method',

    // query-rows [number]: number of rows per page. Default: 10.
    'oQueryRows: query-rows',

    // insert-method [string]: name of the service method to perform inserts. Default: insert.
    'insertMethod: insert-method',

    // update-method [string]: name of the service method to perform updates. Default: update.
    'updateMethod: update-method',

    // delete-method [string]: name of the service method to perform deletions. Default: delete.
    'deleteMethod: delete-method',

    'storeState: store-state',

    // query-with-null-parent-keys [string][yes|no|true|false]: Indicates whether or not to trigger query method when parent-keys filter is null. Default: false
    'queryWithNullParentKeys: query-with-null-parent-keys',

    // [function]: function to execute on query error. Default: no value.
    'queryFallbackFunction: query-fallback-function',
    // ,

    // 'insertFallbackFunction: insert-fallback-function',

    // 'updateFallbackFunction: update-fallback-function',

    // 'deleteFallbackFunction: delete-fallback-function',

    'cHeight: chart-height',
    'cWidth: chart-width',
    // type [string]: Defines the type of graph to be painted (Line, Pie, ...)
    'type',
    'xAxis: x-axis',
    'yAxis: y-axis',
    'xAxisLabel: x-label',
    'yAxisLabel: y-label',
    // x-axis-type [string][int | float | time ]. Default 'int'
    'xAxisDataType: x-data-type',
    'yAxisDataType: y-data-type',
    'data',
    'chartParameters: chart-parameters',
    'color'
  ],
  templateUrl: './o-chart.component.html',
  styleUrls: ['./o-chart.component.scss']
})
export class CustomChartComponent extends OChartComponent implements OnInit {

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector, appearanceService: AppearanceService) {

    super(form, elRef, injector, appearanceService);
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
