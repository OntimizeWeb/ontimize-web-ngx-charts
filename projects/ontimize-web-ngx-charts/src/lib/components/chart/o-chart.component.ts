import 'd3';
import 'hammerjs';
import 'nvd3';
import 'nvd3-extra';

import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Injector, OnInit, Optional, Output, ViewChild } from '@angular/core';
import {
  ComponentStateServiceProvider,
  DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,
  DefaultComponentStateService,
  InputConverter,
  O_COMPONENT_STATE_SERVICE,
  OFormComponent,
  OntimizeServiceProvider,
  OServiceBaseComponent,
  OTranslateService,
  Util
} from 'ontimize-web-ngx';
import { nvD3 } from 'ontimize-web-ngx-nvd3';
import { Subscription } from 'rxjs';

import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartFactory } from '../../interfaces/ChartFactory.interface';
import { BulletChartConfiguration } from '../../models/options/BulletChartConfiguration.class';
import { CandlestickChartConfiguration } from '../../models/options/CandlestickChartConfiguration.class';
import { ChartConfiguration } from '../../models/options/ChartConfiguration.class';
import { GaugeDashboardChartConfiguration } from '../../models/options/GaugeDashboardChartConfiguration.class';
import { GaugeSlimChartConfiguration } from '../../models/options/GaugeSlimChartConfiguration.class';
import { GaugeSpaceChartConfiguration } from '../../models/options/GaugeSpaceChartConfiguration.class';
import { OHLCChartConfiguration } from '../../models/options/OHLCChartConfiguration.class';
import { RadialPercentChartConfiguration } from '../../models/options/RadialPercentChartConfiguration.class';
import { ChartService } from '../../services/chart.service';
import { ChartConfigurationUtils } from './../../models/chart-configuration-utils';
import { OChartDataAdapterFactory } from './o-chart-data-adapter.factory';
import { OChartFactory } from './o-chart.factory';

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

export const DEFAULT_INPUTS_O_CHART: any = [
  ...DEFAULT_INPUTS_O_SERVICE_BASE_COMPONENT,

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
  inputs: DEFAULT_INPUTS_O_CHART,
  providers: [
    OntimizeServiceProvider,
    ComponentStateServiceProvider,
    { provide: O_COMPONENT_STATE_SERVICE, useClass: DefaultComponentStateService },
  ]
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
  dataArray: Object[] = [];
  protected dataService: any;
  protected yAxisArray: Array<string> = [];

  protected ChartOptions: any;

  @ViewChild('nvChart', { static: false })
  protected chartWrapper: nvD3;

  protected formDataSubcribe;

  @Output('onTap') onTap = new EventEmitter();
  @Output('onDoubleTap') onDoubleTap = new EventEmitter();
  @Output('onPress') onPress = new EventEmitter();
  @Output('onSwipe') onSwipe = new EventEmitter();
  @Output('onRotate') onRotate = new EventEmitter();
  @Output('onPinch') onPinch = new EventEmitter();


  protected langSubscription: Subscription;

  protected clickEvtEmitter: EventEmitter<any> = new EventEmitter();
  protected chartService: ChartService;
  protected translateService: OTranslateService;
  cd: ChangeDetectorRef;

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector
  ) {
    super(injector);
    this.translateService = this.injector.get(OTranslateService);
    this.chartService = this.injector.get(ChartService);
    this.cd = this.injector.get(ChangeDetectorRef);
  }

  ngOnInit(): void {
    super.initialize();

    this.yAxisArray = Util.parseArray(this.yAxis);
    if (Util.isDefined(this.state['type'])) {
      this.type = this.state['type'];
    }
    this.configureChart();
    this.bindChartEvents();

    this.langSubscription = this.translateService.onLanguageChanged.subscribe(_event => {
      this.configureChart();
    });
  }

  ngAfterViewInit(): void {
    if (this.queryOnInit && this.dataService !== undefined) {
      this.queryData();
    }
    this.chartService.chartWrapper = this.chartWrapper;
  }

  ngAfterViewChecked(): void {
    let color: string;
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
      const elements = document.getElementsByClassName('nv-pie-title');
      for (let i = 0; i < elements.length; i++) {
        (elements.item(i) as SVGTextElement).style.fill = color;
      }
    }
  }

  ngOnDestroy(): void {
    super.destroy();
    if (this.formDataSubcribe) {
      this.formDataSubcribe.unsubscribe();
    }
    const elements = document.getElementsByClassName('nvtooltip xy-tooltip');
    for (let i = 0; i < elements.length; i++) {
      elements.item(i).remove();
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
      chartConf = ChartConfigurationUtils.getConfigurationForType(this.type);

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

  public setChartConfiguration(conf: ChartConfiguration): void {
    this.chartParameters = conf;
    this.configureChart();
  }

  getAdaptData(): any {
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
    return new OChartFactory(this.translateService);
  }

  getChartDataAdapterFactory(): OChartDataAdapterFactory {
    return new OChartDataAdapterFactory(this.getChartConfiguration());
  }

  /**
   * Configures the chart depending on input parameters
   */
  protected configureChart(): void {
    const chartConf: ChartConfiguration = this.getChartConfiguration();
    this.options = this.getChartFactory().createChartOptions(chartConf);
  }

  public getChartService(): ChartService {
    return this.chartService;
  }

  protected onFormDataBind(bindedData: Object): void {
    let filter = {};
    const keys = Object.keys(this._pKeysEquiv);
    if (keys && keys.length > 0 && bindedData) {
      keys.forEach(item => {
        const value = bindedData[item];
        if (value) {
          filter[this._pKeysEquiv[item]] = value;
        }
      });
    }
    filter = (this.type === 'ohlcBarChart') ? {} : (this.type === 'candlestickBarChart') ? {} : filter;
    this.queryData(filter);
  }

  public setData(data: any, _sqlTypes?: any, _replace?: boolean): void {
    const factory = this.getChartDataAdapterFactory();
    const adapter: ChartDataAdapter = factory.getAdapter(this.type);
    const adaptedResult = adapter.adaptResult(data);
    this.setDataArray(adaptedResult);
    this.configureChart();
    this.cd.detectChanges();
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
        const OHLCParams = this.chartParameters as OHLCChartConfiguration;
        columns.push(OHLCParams.xColumn);
        columns.push(OHLCParams.openAxis);
        columns.push(OHLCParams.closeAxis);
        columns.push(OHLCParams.highAxis);
        columns.push(OHLCParams.lowAxis);
        break;
      case 'candlestickBarChart':
        columns = [];
        const candlestickParams = this.chartParameters as CandlestickChartConfiguration;
        columns.push(candlestickParams.xColumn);
        columns.push(candlestickParams.openAxis);
        columns.push(candlestickParams.closeAxis);
        columns.push(candlestickParams.highAxis);
        columns.push(candlestickParams.lowAxis);
        break;
      case 'bulletChart':
        columns = [];
        const bulletParams = this.chartParameters as BulletChartConfiguration;
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
    const chart = this.getChartService().chart;
    if (chart && chart.on) {
      chart.on('click', (evt: any) => this.clickEvtEmitter.emit(evt));
    }
  }

  onClickEvent(onNext: (value: any) => void): Object {
    return this.clickEvtEmitter.subscribe(onNext);
  }

  tapChart(event: any) {
    this.onTap.emit(event);
  }

  doubleTapChart(event: any) {
    this.onDoubleTap.emit(event);
  }

  pressChart(event: any) {
    this.onPress.emit(event);
  }

  swipeChart(event: any) {
    this.onSwipe.emit(event);
  }

  rotateChart(event: any) {
    this.onRotate.emit(event);
  }

  pinchChart(event: any) {
    this.onPinch.emit(event);
  }
  updateOptions(options: any) {
    this.setChartConfiguration(options);
    this.chartWrapper.update();
  }

}
