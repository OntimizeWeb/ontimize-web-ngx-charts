import { Component, ElementRef, EventEmitter, forwardRef, Inject, Injector, OnInit, Optional, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nvD3, NvD3Module } from 'ontimize-web-ngx-nvd3';
import 'd3';
import 'nvd3';
import { dataServiceFactory, InputConverter, OFormComponent, OntimizeService, OTranslateService, Util, OServiceBaseComponent } from 'ontimize-web-ngx';

import { OChartFactory } from './o-chart.factory';
import { ChartService } from '../../services/chart.service';
import { ChartConfiguration } from '../../core/chart-options/ChartConfiguration.class';
import { OChartDataAdapterFactory } from './o-chart-data-adapter.factory';
import { ChartFactory, ChartDataAdapterFactory, ChartDataAdapter } from '../../interfaces';
import {
  PieChartConfiguration, LineChartConfiguration, ScatterChartConfiguration, MultiBarChartConfiguration,
  MultiBarHorizontalChartConfiguration, DonutChartConfiguration, DiscreteBarChartConfiguration,
  BulletChartConfiguration, GaugeDashboardChartConfiguration, LinePlusBarFocusChartConfiguration,
  ForceDirectedGraphConfiguration, CandlestickChartConfiguration, OHLCChartConfiguration,
  GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration, RadialPercentChartConfiguration,
  GaugeSimpleChartConfiguration, BubbleChartConfiguration, StackedAreaChartConfiguration,
  RadarChartConfiguration, ParallelCoordinatesChartConfiguration
} from './../../core';

export const CHART_TYPES = [
  'bubbleChart',
  'bulletChart',
  'candlestickBarChart',
  'discreteBar',
  'donutChart',
  'forceDirectedGraph',
  'gaugeDashboardChart',
  'gaugeSimpleChart',
  'gaugeSlimChart',
  'gaugeSpaceChart',
  'line',
  'linePlusBarWithFocusChart',
  'multiBar',
  'multiBarHorizontalChart',
  'ohlcBarChart',
  'parallelCoordinatesChart',
  'pie',
  'radarChart',
  'radialPercentChart',
  'scatterChart',
  'stackedAreaChart'
];

export const DEFAULT_INPUTS_O_CHART = [
  ...OServiceBaseComponent.DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,

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
  'chartParameters: chart-parameters'
];

@Component({
  selector: 'o-chart',
  templateUrl: './o-chart.component.html',
  styleUrls: ['./o-chart.component.scss'],
  providers: [
    OTranslateService,
    { provide: OntimizeService, useFactory: dataServiceFactory, deps: [Injector] }
  ],
  inputs: DEFAULT_INPUTS_O_CHART
})

export class OChartComponent extends OServiceBaseComponent implements OnInit {

  public static DEFAULT_INPUTS_O_CHART = DEFAULT_INPUTS_O_CHART;
  public static CHART_TYPES = CHART_TYPES;

  /* Inputs */
  protected type: string;
  protected xAxis: string;
  protected yAxis: string;
  protected xAxisLabel: string;
  protected yAxisLabel: string;
  protected xAxisDataType: string;
  protected yAxisDataType: string;
  protected chartParameters: ChartConfiguration;
  @InputConverter()
  protected cHeight: number = -1;
  @InputConverter()
  protected cWidth: number = -1;

  protected _options: any;
  protected dataArray: Object[] = [];
  protected dataService: any;
  protected yAxisArray: Array<string> = [];

  protected ChartOptions: any;

  @ViewChild('nvChart')
  protected chartWrapper: nvD3;

  protected formDataSubcribe;

  protected clickEvtEmitter: EventEmitter<any> = new EventEmitter();
  protected chartService: ChartService;
  protected translateService: OTranslateService;
  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector
  ) {
    super(injector);
    this.translateService = this.injector.get(OTranslateService);
    this.chartService = this.injector.get(ChartService);
  }

  ngOnInit() {

    super.initialize();

    this.yAxisArray = Util.parseArray(this.yAxis);
    if (Util.isDefined(this.state['type'])) {
      this.type = this.state['type'];
    }
    this.configureChart();
    this.bindChartEvents();
  }

  ngAfterViewInit(): void {
    if (this.queryOnInit && this.dataService !== undefined) {
      this.queryData();
    }
    this.chartService.chartWrapper = this.chartWrapper;
  }

  ngAfterViewChecked() {
    let color = undefined;
    switch (this.type) {
      case 'gaugeDashboardChart':
        color = this.chartParameters && (this.chartParameters as GaugeDashboardChartConfiguration).color ? (this.chartParameters as GaugeDashboardChartConfiguration).color[0] : 'black';
        break;
      case 'gaugeSlimChart':
        color = this.chartParameters && (this.chartParameters as GaugeSlimChartConfiguration).color ? (this.chartParameters as GaugeSlimChartConfiguration).color[0] : 'black';
        break;
      case 'gaugeSpaceChart':
        color = this.chartParameters && (this.chartParameters as GaugeSpaceChartConfiguration).color ? (this.chartParameters as GaugeSpaceChartConfiguration).color : 'black';
        break;
      case 'radialPercentChart':
        color = this.chartParameters && (this.chartParameters as RadialPercentChartConfiguration).color ? (this.chartParameters as RadialPercentChartConfiguration).color[0] : 'black';
        break;
      default:
        break;
    }
    if (color) {
      let elements = document.getElementsByClassName('nv-pie-title');
      for (let i = 0; i < elements.length; i++) {
        (elements.item(i) as SVGTextElement).style.fill = color;
      }
    }
  }

  ngOnDestroy() {
    super.destroy();
    if (this.formDataSubcribe) {
      this.formDataSubcribe.unsubscribe();
    }
  }

  set data(value: any) {
    if (value) {
      this.setDataArray(value);
    }
  }

  get options(): any {
    return this._options;
  }

  set options(value: any) {
    this._options = value;
  }

  getChartConfiguration(): ChartConfiguration {
    let chartConf: ChartConfiguration;
    if (this.chartParameters) {
      chartConf = this.chartParameters;
      chartConf.height = chartConf.height ? chartConf.height : (this.cHeight !== -1) ? this.cHeight : null;
      chartConf.width = chartConf.width ? chartConf.width : (this.cWidth !== -1) ? this.cWidth : null;
      chartConf.xLabel = chartConf.xLabel ? chartConf.xLabel : this.xAxisLabel ? this.xAxisLabel : '';
      chartConf.yLabel = chartConf.yLabel ? chartConf.yLabel : this.yAxisLabel ? this.yAxisLabel : '';
      chartConf.xDataType = chartConf.xDataType ? chartConf.xDataType : this.xAxisDataType ? this.xAxisDataType : null;
      chartConf.yDataType = chartConf.yDataType ? chartConf.yDataType : this.yAxisDataType ? this.yAxisDataType : null;
      chartConf.xAxis = chartConf.xAxis ? chartConf.xAxis : this.xAxis ? this.xAxis : null;
      chartConf.yAxis = chartConf.yAxis ? chartConf.yAxis : this.yAxisArray ? this.yAxisArray : null;

      chartConf.translateService = this.translateService;
      chartConf.data = this.dataArray ? this.dataArray : null;
    } else {
      switch (this.type) {
        case 'line':
          chartConf = new LineChartConfiguration();
          break;
        case 'pie':
          chartConf = new PieChartConfiguration();
          break;
        case 'donutChart':
          chartConf = new DonutChartConfiguration();
          break;
        case 'discreteBar':
          chartConf = new DiscreteBarChartConfiguration();
          break;
        case 'multiBar':
          chartConf = new MultiBarChartConfiguration();
          break;
        case 'multiBarHorizontalChart':
          chartConf = new MultiBarHorizontalChartConfiguration();
          break;
        case 'scatterChart':
          chartConf = new ScatterChartConfiguration();
          break;
        case 'linePlusBarWithFocusChart':
          chartConf = new LinePlusBarFocusChartConfiguration();
          break;
        case 'forceDirectedGraph':
          chartConf = new ForceDirectedGraphConfiguration();
          break;
        case 'candlestickBarChart':
          chartConf = new CandlestickChartConfiguration();
          break;
        case 'ohlcBarChart':
          chartConf = new OHLCChartConfiguration();
          break;
        case 'bulletChart':
          chartConf = new BulletChartConfiguration();
          break;
        case 'gaugeDashboardChart':
          chartConf = new GaugeDashboardChartConfiguration();
          break;
        case 'gaugeSlimChart':
          chartConf = new GaugeSlimChartConfiguration();
          break;
        case 'gaugeSpaceChart':
          chartConf = new GaugeSpaceChartConfiguration();
          break;
        case 'radialPercentChart':
          chartConf = new RadialPercentChartConfiguration();
          break;
        case 'gaugeSimpleChart':
          chartConf = new GaugeSimpleChartConfiguration();
          break;
        case 'bubbleChart':
          chartConf = new BubbleChartConfiguration();
          break;
        case 'stackedAreaChart':
          chartConf = new StackedAreaChartConfiguration();
          break;
        case 'radarChart':
          chartConf = new RadarChartConfiguration();
          break;
        case 'parallelCoordinatesChart':
          chartConf = new ParallelCoordinatesChartConfiguration();
          break;
        default:
          chartConf = new ChartConfiguration();
      }

      chartConf.height = this.cHeight !== -1 ? this.cHeight : 0;
      chartConf.width = this.cWidth !== -1 ? this.cWidth : 0;

      chartConf.xLabel = this.xAxisLabel;
      chartConf.yLabel = this.yAxisLabel;

      chartConf.xDataType = this.xAxisDataType;
      chartConf.yDataType = this.yAxisDataType;

      chartConf.xAxis = this.xAxis;
      chartConf.yAxis = this.yAxisArray;

      chartConf.translateService = this.translateService;

      chartConf.data = this.dataArray;
    }

    return chartConf;
  }

  public setChartConfiguration(conf: ChartConfiguration) {
    this.chartParameters = conf;
    this.configureChart();
  }

  getAdaptData() {
    if (this.type === 'forceDirectedGraph' || this.type === 'bulletChart') {
      if (this.dataArray && this.dataArray[0]) {
        return this.dataArray[0];
      } else {
        return [];
      }
    } else {
      return this.dataArray;
    }
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

  protected onFormDataBind(bindedData: Object) {
    let filter = {};
    let keys = Object.keys(this._pKeysEquiv);
    if (keys && keys.length > 0 && bindedData) {
      keys.forEach(item => {
        let value = bindedData[item];
        if (value) {
          filter[this._pKeysEquiv[item]] = value;
        }
      });
    }
    filter = (this.type === 'ohlcBarChart') ? {} : (this.type === 'candlestickBarChart') ? {} : filter;
    this.queryData(filter);
  }

  public setData(data: any, _sqlTypes?: any, _replace?: boolean) {
    let factory = this.getChartDataAdapterFactory();
    let adapter: ChartDataAdapter = factory.getAdapter(this.type);
    let adaptedResult = adapter.adaptResult(data);
    this.setDataArray(adaptedResult);
    this.configureChart();
  }

  getAttributesValuesToQuery(): Array<string> {
    let columns = super.getAttributesValuesToQuery();
    if (this.yAxisArray && this.yAxisArray.length) {
      this.yAxisArray.forEach((item: any, _index: number) => {
        if (columns.filter((val: Object) => (val === item))) {
          columns.push(item);
        }
      });
    }
    if (this.xAxis && this.xAxis.length) {
      if (columns.filter((val: Object) => (val === this.xAxis))) {
        columns.push(this.xAxis);
      }
    }
    switch (this.type) {
      case 'ohlcBarChart':
        columns = [];
        let OHLCParams = this.chartParameters as OHLCChartConfiguration;
        columns.push(OHLCParams.xColumn);
        columns.push(OHLCParams.openAxis);
        columns.push(OHLCParams.closeAxis);
        columns.push(OHLCParams.highAxis);
        columns.push(OHLCParams.lowAxis);
        break;
      case 'candlestickBarChart':
        columns = [];
        let candlestickParams = this.chartParameters as CandlestickChartConfiguration;
        columns.push(candlestickParams.xColumn);
        columns.push(candlestickParams.openAxis);
        columns.push(candlestickParams.closeAxis);
        columns.push(candlestickParams.highAxis);
        columns.push(candlestickParams.lowAxis);
        break;
      case 'bulletChart':
        columns = [];
        let bulletParams = this.chartParameters as BulletChartConfiguration;
        columns.push(bulletParams.markersAxis);
        columns.push(bulletParams.measuresAxis);
        columns.push(bulletParams.rangesAxis);
        break;
      default:
        break;
    }
    return columns;
  }

  /**
   *  Binds chart events.
   * @returns void
   */

  bindChartEvents(): void {
    var self = this;
    let chart = this.getChartService().chart;
    if (chart && chart.on) {
      chart.on('click', function (evt: any) {
        self.clickEvtEmitter.emit(evt);
      });
    }
  }

  onClickEvent(onNext: (value: any) => void): Object {
    return this.clickEvtEmitter.subscribe(onNext);
  }

}

@NgModule({
  imports: [CommonModule, NvD3Module],
  declarations: [OChartComponent],
  exports: [OChartComponent]
})
export class OChartComponentModule { }
