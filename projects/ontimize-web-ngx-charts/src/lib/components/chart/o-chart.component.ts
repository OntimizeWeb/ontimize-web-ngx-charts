import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Injector, OnInit, Optional, Output, ViewChild } from '@angular/core';
import {
  AreaChartStackedComponent,
  BarHorizontalComponent,
  BarVerticalComponent,
  BarVerticalStackedComponent,
  LineChartComponent,
  PieChartComponent
} from '@swimlane/ngx-charts';
import {
  AppearanceService,
  BooleanInputConverter,
  ComponentStateServiceProvider,
  DefaultComponentStateService,
  NumberInputConverter,
  O_COMPONENT_STATE_SERVICE,
  OFormComponent,
  OntimizeServiceProvider,
  OServiceBaseComponent,
  OTranslateService,
  Util
} from 'ontimize-web-ngx';
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
  'color',
  'showGridLines: show-grid-lines',
  'showDataLabel:show-data-label'
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
  @ViewChild('pieChart') pieChart: ElementRef<PieChartComponent>;
  @ViewChild('donutChart') donutChart: ElementRef<PieChartComponent>;
  @ViewChild('horizontalBarChart') horizontalBarChart: ElementRef<BarHorizontalComponent>;
  @ViewChild('lineChart') lineChart: ElementRef<LineChartComponent>;
  @ViewChild('stackedAreaChart') stackedAreaChart: ElementRef<AreaChartStackedComponent>;
  @ViewChild('multiBarChart') multiBarChart: ElementRef<BarVerticalStackedComponent>;
  @ViewChild('discreteBarChart') discreteBarChart: ElementRef<BarVerticalComponent>;

  /* Inputs */
  type: string;
  xAxis: string;
  yAxis: string;
  xAxisLabel: string;
  yAxisLabel: string;
  xAxisDataType: string;
  xFormatting: any;
  yFormatting: any;
  yAxisDataType: string;
  @BooleanInputConverter()
  showGridLines: boolean = false;
  @BooleanInputConverter()
  showDataLabel: boolean = true;
  protected chartParameters: ChartConfiguration;

  @NumberInputConverter()
  cHeight: number = undefined;

  @NumberInputConverter()
  cWidth: number = undefined;

  protected _options: any;
  dataArray: Object[] = [];
  protected dataService: any;
  protected yAxisArray: Array<string> = [];
  color: Object = "air";
  protected ChartOptions: any;

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
  chartData: any[] = [];
  isDarkMode: boolean;

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector,
    private appearanceService: AppearanceService
  ) {
    super(injector);
    this.translateService = this.injector.get(OTranslateService);
    this.chartService = this.injector.get(ChartService);
    this.cd = this.injector.get(ChangeDetectorRef);
    this.getAdaptData();
  }

  ngOnInit(): void {
    this.xFormatting = this.getTickFormatter(this.xAxisDataType);
    this.yFormatting = this.getTickFormatter(this.yAxisDataType);
    this.chartData = this.getAdaptData();
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
    this.appearanceService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  get chartClass(): string {
    return this.isDarkMode ? 'dark-chart' : '';
  }
  ngAfterViewInit(): void {
    if (this.queryOnInit && this.dataService !== undefined) {
      this.queryData();
    }
  }
  getTickFormatter(type: string): any {
    switch (type) {
      case 'intGrouped':
        return d => d.toLocaleString();
      case 'floatGrouped':
        return d => d.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case 'int':
        return d => Math.round(d).toLocaleString();
      case 'float':
        return d => d.toFixed(2);
      case 'currency':
        return d => d.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case 'time':
      case 'TIME':
      case 'TIMESTAMP':
      case 'DATE':
        return d => new Date(d).toLocaleDateString();
      case 'timeDay':
        return d => new Date(d).toLocaleTimeString();
      case 'timeDetail':
        return d => new Date(d).toLocaleString();
      case 'percentage':
        return d => (d * 100).toFixed(0) + '%';
      default:
        if (typeof type === 'function') {
          return type;
        }
        return void 0;
    }
  }
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();

    return `${day}/${month}/${year}`;
  }
  formatDate(date: number): string {
    const formattedDate = new Date(date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    return formattedDate;
  }

  // ngAfterViewChecked(): void {
  //   let color: string;
  //   switch (this.type) {
  //     case 'gaugeDashboardChart':
  //       color = this.chartParameters && (this.chartParameters as GaugeDashboardChartConfiguration).color ? (this.chartParameters as GaugeDashboardChartConfiguration).color[0] : 'black';
  //       break;
  //     case 'gaugeSlimChart':
  //       color = this.chartParameters && (this.chartParameters as GaugeSlimChartConfiguration).color ? (this.chartParameters as GaugeSlimChartConfiguration).color[0] : 'black';
  //       break;
  //     case 'gaugeSpaceChart':
  //       color = this.chartParameters && (this.chartParameters as GaugeSpaceChartConfiguration).color ? (this.chartParameters as GaugeSpaceChartConfiguration).color : 'black';
  //       break;
  //     case 'radialPercentChart':
  //       color = this.chartParameters && (this.chartParameters as RadialPercentChartConfiguration).color ? (this.chartParameters as RadialPercentChartConfiguration).color[0] : 'black';
  //       break;
  //     default:
  //       break;
  //   }
  //   if (color) {
  //     const elements = document.getElementsByClassName('nv-pie-title');
  //     for (let i = 0; i < elements.length; i++) {
  //       (elements.item(i) as SVGTextElement).style.fill = color;
  //     }
  //   }
  // }

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

    this.configureParams();

    this.cd.detectChanges();
  }
  configureParams() {
    let config = this.getChartConfiguration();
    if (Util.isDefined(config['color'])) {
      this.color = config['color'];
    }
    switch (this.type) {
      case 'pie':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.pieChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.pieChart['view'] = [this.cWidth, this.cHeight];
        }
        this.pieChart['labels'] = config['showLabels'];;
        this.pieChart['legend'] = config['showLeyend'];
        this.pieChart['legendPosition'] = config['legendPosition'];
        this.pieChart['tooltipDisabled'] = !config['showTooltip'];
        if (Util.isDefined(config['color'])) {
          this.pieChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.pieChart['labelFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        break;
      case 'donutChart':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.donutChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.donutChart['view'] = [this.cWidth, this.cHeight];
        }
        this.donutChart['labels'] = config['showLabels'];
        this.donutChart['legend'] = config['showLeyend'];
        this.donutChart['legendPosition'] = config['legendPosition'];
        this.donutChart['tooltipDisabled'] = !config['showTooltip'];
        if (Util.isDefined(config['color'])) {
          this.donutChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.donutChart['labelFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        break;
      case 'stackedAreaChart':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.stackedAreaChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.stackedAreaChart['view'] = [this.cWidth, this.cHeight];
        }
        this.stackedAreaChart['labels'] = config['showLabels'];
        this.stackedAreaChart['legend'] = config['showLeyend'];
        this.stackedAreaChart['legendPosition'] = config['legendPosition'];
        this.stackedAreaChart['tooltipDisabled'] = !config['showTooltip'];
        if (Util.isDefined(config['color'])) {
          this.stackedAreaChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.stackedAreaChart['xAxisTickFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        if (Util.isDefined(config['yDataType'])) {
          this.stackedAreaChart['yAxisTickFormatting'] = this.getTickFormatter(config['yDataType']);
        }
        break;
      case 'multiBarHorizontalChart':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.horizontalBarChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.horizontalBarChart['view'] = [this.cWidth, this.cHeight];
        }
        this.horizontalBarChart['labels'] = config['showLabels'];
        this.horizontalBarChart['legend'] = config['showLeyend'];
        this.horizontalBarChart['legendPosition'] = config['legendPosition'];
        this.horizontalBarChart['xAxis'] = config['showXAxis'];
        this.horizontalBarChart['yAxis'] = config['showYAxis'];
        this.horizontalBarChart['showGridLines'] = this.showGridLines;
        if (Util.isDefined(config['color'])) {
          this.horizontalBarChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.horizontalBarChart['xAxisTickFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        if (Util.isDefined(config['yDataType'])) {
          this.horizontalBarChart['yAxisTickFormatting'] = this.getTickFormatter(config['yDataType']);
        }
        break;
      case 'line':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.lineChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.lineChart['view'] = [this.cWidth, this.cHeight];
        }
        this.lineChart['labels'] = config['showLabels'];
        this.lineChart['legend'] = config['showLeyend'];
        this.lineChart['legendPosition'] = config['legendPosition'];
        this.lineChart['tooltipDisabled'] = !config['showTooltip'];
        this.lineChart['xAxis'] = config['showXAxis'];
        this.lineChart['yAxis'] = config['showYAxis'];
        if (Util.isDefined(config['color'])) {
          this.lineChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.lineChart['xAxisTickFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        if (Util.isDefined(config['yDataType'])) {
          this.lineChart['yAxisTickFormatting'] = this.getTickFormatter(config['yDataType']);
        }
        break;
      case 'discreteBar':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.discreteBarChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.discreteBarChart['view'] = [this.cWidth, this.cHeight];
        }
        this.discreteBarChart['labels'] = config['showLabels'];
        this.discreteBarChart['legend'] = config['showLeyend'];
        this.discreteBarChart['legendPosition'] = config['legendPosition'];
        this.discreteBarChart['tooltipDisabled'] = !config['showTooltip'];
        this.discreteBarChart['xAxis'] = config['showXAxis'];
        this.discreteBarChart['yAxis'] = config['showYAxis'];
        if (Util.isDefined(config['color'])) {
          this.discreteBarChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.discreteBarChart['xAxisTickFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        if (Util.isDefined(config['yDataType'])) {
          this.discreteBarChart['yAxisTickFormatting'] = this.getTickFormatter(config['yDataType']);
        }
        break;
      case 'multiBar':
        if (Util.isDefined(config.width) && Util.isDefined(config.height)) {
          this.multiBarChart['view'] = [config.width, config.height];
        }
        else if (Util.isDefined(this.cWidth) && Util.isDefined(this.cHeight)) {
          this.multiBarChart['view'] = [this.cWidth, this.cHeight];
        }
        this.multiBarChart['labels'] = config['showLabels'];
        this.multiBarChart['legend'] = config['showLeyend'];
        this.multiBarChart['legendPosition'] = config['legendPosition'];
        this.multiBarChart['tooltipDisabled'] = !config['showTooltip'];
        this.multiBarChart['xAxis'] = config['showXAxis'];
        this.multiBarChart['yAxis'] = config['showYAxis'];
        if (Util.isDefined(config['color'])) {
          this.multiBarChart['scheme'] = config['color'];
        }
        if (Util.isDefined(config['xDataType'])) {
          this.multiBarChart['xAxisTickFormatting'] = this.getTickFormatter(config['xDataType']);
        }
        if (Util.isDefined(config['yDataType'])) {
          this.multiBarChart['yAxisTickFormatting'] = this.getTickFormatter(config['yDataType']);
        }
        break;
    }
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
  updateOptions(options: any, type: string) {
    if (type === this.type) {
      this.forceRerender(type);
    } else {
      this.setChartConfiguration(options);
      this.type = type;
      this.configureParams();
    }
    setTimeout(() => {
      this.setChartConfiguration(options);
      this.type = type;
      this.configureParams();
    }, 10);
  }
  forceRerender(type: string) {
    this.type = '';
    setTimeout(() => {
      this.type = type;
    }, 0);
  }


}
