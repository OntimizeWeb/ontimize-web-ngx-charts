import {
  Component,
  OnInit,
  ElementRef,
  Injector,
  Inject,
  forwardRef,
  EventEmitter,
  ViewChild,
  Optional
} from '@angular/core';

import { MdIcon, MdIconRegistry } from '@angular/material';
import { OntimizeService, OTranslateService, OFormComponent, InputConverter, Util } from 'ontimize-web-ng2/ontimize';

import * as d3 from 'd3';
import * as nv from 'nvd3';
import { nvD3 } from 'ng2-nvd3';

import { OChartFactory } from './o-chart.factory';
import { OChartDataAdapterFactory } from './o-chart-data-adapter.factory';
import { ChartFactory, ChartDataAdapterFactory, ChartDataAdapter } from '../../interfaces';
import { ChartService } from '../../services';
import { ChartConfiguration } from '../../core/ChartConfiguration.class';


export const CHART_TYPES = [
  'line',
  'discreteBar',
  'pie',
  'multiBar'
  // 'scatterChart',
  // 'candlestickBarChart',
  // 'ohlcBarChart',
  // 'boxPlotChart',
  // 'donutChart',
  // 'multiBarHorizontalChart',
  // 'linePlusBarWithFocusChart',
  // 'forceDirectedGraph'
];

const DEFAULT_INPUTS = [
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
  'entity',
  'service',
  'columns',
  'parentKeys: parent-keys',
  'queryOnInit: query-on-init'
];

@Component({
  selector: 'o-chart',
  providers: [ChartService, MdIconRegistry],
  inputs: [
    ...DEFAULT_INPUTS
  ],
  templateUrl: '/chart/o-chart.component.html',
  styleUrls: ['/chart/o-chart.component.css'],
})
export class OChartComponent implements OnInit {
  public static DEFAULT_INPUTS = DEFAULT_INPUTS;
  public static CHART_TYPES = CHART_TYPES;

  /* Inputs */
  protected type: string;
  protected xAxis: string;
  protected yAxis: string;
  protected xAxisLabel: string;
  protected yAxisLabel: string;
  protected xAxisDataType: string;
  protected yAxisDataType: string;
  protected entity: string;
  protected service: string;
  protected columns: string;

  protected parentKeys: string;

  @InputConverter()
  protected queryOnInit: boolean = true;

  protected options: any;
  protected dataArray: Object[] = [];
  protected dataService: any;
  protected yAxisArray: Array<string> = [];
  protected columnsArray: Array<string>;
  protected pKeysEquiv = {};

  @ViewChild('nvChart')
  protected chartWrapper: nvD3;

  protected formDataSubcribe;

  private clickEvtEmitter: EventEmitter<any> = new EventEmitter();
  private chartService: ChartService;
  private translateService: OTranslateService;

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector) {

    this.chartService = this.injector.get(ChartService);
    this.translateService = this.injector.get(OTranslateService);
  }

  ngOnInit() {

    this.yAxisArray = Util.parseArray(this.yAxis);

    let pkArray = Util.parseArray(this.parentKeys);
    this.pKeysEquiv = Util.parseParentKeysEquivalences(pkArray);

    if (this.columns !== undefined) {
      this.columnsArray = Util.parseArray(this.columns);
    } else {
      this.columnsArray = [];
      if (this.xAxis && this.xAxis.length) {
        this.columnsArray.push(this.xAxis);
      }
      if (this.yAxisArray && this.yAxisArray.length) {
        this.columnsArray = this.columnsArray.concat(this.yAxisArray);
      }
    }

    if (this.form) {
      var self = this;
      this.formDataSubcribe = this.form.onFormDataLoaded.subscribe(data => {
        self.onFormDataBind(data);
      });
    }

    this.configureChart();
    this.bindChartEvents();
    this.configureService();

  }

  ngAfterViewInit(): void {
    if (this.queryOnInit && this.dataService !== undefined) {
      this.queryData();
    }
    this.chartService.chartWrapper = this.chartWrapper;
  }

  ngOnDestroy() {
    if (this.formDataSubcribe) {
      this.formDataSubcribe.unsubscribe();
    }
  }

  set data(value: any) {
    if (value) {
      this.setDataArray(value);
    }
  }

  getChartConfiguration(): ChartConfiguration {
    let chartConf = new ChartConfiguration();
    chartConf.type = this.type;

    chartConf.xLabel = this.xAxisLabel;
    chartConf.yLabel = this.yAxisLabel;

    chartConf.xDataType = this.xAxisDataType;
    chartConf.yDataType = this.yAxisDataType;

    chartConf.xAxis = this.xAxis;
    chartConf.yAxis = this.yAxisArray;

    chartConf.translateService = this.translateService;

    return chartConf;
  }

  getChartFactory(): ChartFactory {
    return new OChartFactory();
  }

  getChartDataAdapterFactory(): ChartDataAdapterFactory {
    return new OChartDataAdapterFactory(this.getChartConfiguration());
  }

  /**
   * Configures the chart depending on input parameters
   *  */
  protected configureChart() {
    let chartConf: ChartConfiguration = this.getChartConfiguration();
    this.options = this.getChartFactory().createChartOptions(chartConf);
  }

  public getChartService(): ChartService {
    return this.chartService;
  }

  protected configureService() {
    if (this.entity === undefined && this.service === undefined) {
      return;
    }
    this.dataService = this.injector.get(OntimizeService);

    if (Util.isDataService(this.dataService)) {
      let serviceCfg = this.dataService.getDefaultServiceConfiguration(this.service);
      if (this.entity) {
        serviceCfg['entity'] = this.entity;
      }
      this.dataService.configureService(serviceCfg);
    }
  }

  protected setDataArray(data: any): void {
    if (Util.isArray(data)) {
      this.dataArray = data;
    } else if (Util.isObject(data)) {
      this.dataArray = [data];
    } else {
      console.warn('Chart has received not supported service data. Supported data are Array or Object');
      this.dataArray = [];
    }
  }

  protected onFormDataBind(bindedData: Object) {
    let filter = {};
    let keys = Object.keys(this.pKeysEquiv);
    if (keys && keys.length > 0 && bindedData) {
      keys.forEach(item => {
        let value = bindedData[item];
        if (value) {
          filter[this.pKeysEquiv[item]] = value;
        }
      });
    }
    this.queryData(filter);
  }

  queryData(filter: Object = {}) {
    var self = this;
    if (this.dataService === undefined) {
      console.warn('No service configured! aborting query');
      return;
    }
    this.dataService.query(filter, this.columnsArray, this.entity)
      .subscribe(resp => {
        if (resp.code === 0) {
          self.onQueryResponse(resp);
        } else {
          console.log('error');
        }
      }, err => {
        console.log(err);
      });
  }

  protected onQueryResponse(resp: Object) {
    if (resp && resp['code'] === 0 && resp['data']) {
      let factory = this.getChartDataAdapterFactory();
      let adapter: ChartDataAdapter = factory.getAdapter(this.type);
      let adaptedResult = adapter.adaptResult(resp['data']);
      this.setDataArray(adaptedResult);
    }
  }

  /**
   *  Binds chart events.
   * @returns void
   */
  bindChartEvents(): void {
    var self = this;
    let chart = this.getChartService().chart;
    if (chart) {
      chart.on('click', function (evt: any) {
        self.clickEvtEmitter.emit(evt);
      });
    }

  }

  onClickEvent(onNext: (value: any) => void): Object {
    return this.clickEvtEmitter.subscribe(onNext);
  }

}

