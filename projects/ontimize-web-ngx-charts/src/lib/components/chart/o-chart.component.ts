import { ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Inject, Injector, OnInit, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
  CurrencyUtil,
  DefaultComponentStateService,
  NumberInputConverter,
  O_COMPONENT_STATE_SERVICE,
  OColumn,
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
import { OHLCChartConfiguration } from '../../models/options/OHLCChartConfiguration.class';
import { ChartService } from '../../services/chart.service';
import { ChartConfigurationUtils } from './../../models/chart-configuration-utils';
import { OChartDataAdapterFactory } from './o-chart-data-adapter.factory';
import { OChartFactory } from './o-chart.factory';
import { CurrencyType } from '../../types/currency.type';
import moment from 'moment';


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
  'showDataLabel:show-data-label',
  'showLegend:show-legend',
  'legendPosition:legend-position',
  'legendTitle:legend-title',
  'xFormatting:x-formatting',
  'yFormatting:y-formatting',
  'showXAxisLabel:show-x-axis-label',
  'showYAxisLabel:show-y-axis-label',
  'autoScale: auto-scale',
  'showTooltip:show-tooltip',
  'gradient',
  'activeEntries: active-entries'
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class OChartComponent extends OServiceBaseComponent implements OnInit {

  public static DEFAULT_INPUTS_O_CHART = DEFAULT_INPUTS_O_CHART;
  public static CHART_TYPES = CHART_TYPES;
  @ViewChild('pieChart') pieChart: PieChartComponent;
  @ViewChild('donutChart') donutChart: PieChartComponent;
  @ViewChild('horizontalBarChart') horizontalBarChart: BarHorizontalComponent;
  @ViewChild('lineChart') lineChart: LineChartComponent;
  @ViewChild('stackedAreaChart') stackedAreaChart: AreaChartStackedComponent;
  @ViewChild('multiBarChart') multiBarChart: BarVerticalStackedComponent;
  @ViewChild('discreteBarChart') discreteBarChart: BarVerticalComponent;


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
  @BooleanInputConverter()
  showXAxisLabel: boolean = true;
  @BooleanInputConverter()
  showYAxisLabel: boolean = true;
  @BooleanInputConverter()
  autoScale: boolean = false;
  @BooleanInputConverter()
  gradient: boolean = false;
  @BooleanInputConverter()
  showTooltip: boolean = false;
  activeEntries: object[] = [];
  protected chartParameters: ChartConfiguration;
  xColumn: OColumn;
  yColumn: OColumn;
  @NumberInputConverter()
  cHeight: number = undefined;

  @NumberInputConverter()
  cWidth: number = undefined;
  @BooleanInputConverter()
  showLegend: boolean = false;
  legendPosition: string;
  legendTitle: string;


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

  @Output('onSelect') onSelect = new EventEmitter();
  @Output('onActivate') onActivate = new EventEmitter();
  @Output('onDeactivate') onDeactivate = new EventEmitter();
  @Output('onDataLoaded') onDataLoaded: EventEmitter<object> = new EventEmitter<object>();


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
    private appearanceService: AppearanceService,
    private _translateService: OTranslateService,
  ) {
    super(injector);

    this.translateService = this.injector.get(OTranslateService);
    this.chartService = this.injector.get(ChartService);
    this.cd = this.injector.get(ChangeDetectorRef);
    this.getAdaptData();
  }
  @ContentChild('tooltip', { static: false }) tooltipTemplateRef!: TemplateRef<any>;
  @ContentChild('seriesTooltip', { static: false }) seriesTooltipTemplateRef!: TemplateRef<any>;

  ngOnInit(): void {
    this.xFormatting = this.xFormatting !== undefined ? this.xFormatting : this.getTickFormatter(this.xAxisDataType);
    this.yFormatting = this.yFormatting !== undefined ? this.yFormatting : this.getTickFormatter(this.yAxisDataType);
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
    const chartComponents = [
      "pieChart",
      "discreteBarChart",
      "multiBarChart",
      "stackedAreaChart",
      "lineChart",
      "horizontalBarChart",
      "donutChart"
    ];

    if (this.queryOnInit && this.dataService !== undefined) {
      this.queryData();
    }

    chartComponents.forEach(chart => {
      if (Util.isDefined(this[chart])) {
        this[chart].margins = [0, 0, 0, 0];
        this[chart].update();
      }
    });

    this.cd.detectChanges();
  }
  getDateTickFormatter(dateFormat: string) {
    return d => (d !== undefined) ? moment(d).locale(this._translateService.getCurrentLang()).format(dateFormat) : '';
  }
  isDateType(type: string): boolean {
    return (
      type === 'time' ||
      type === 'TIME' ||
      type === 'TIMESTAMP' ||
      type === 'DATE' ||
      type === 'timeDay' ||
      type === 'timeDetail'
    );
  }

  selectChart(event: any) {
    this.onSelect.emit(event);
  }
  activateChart(event: any) {
    this.onActivate.emit(event);
  }
  deactivateChart(event: any) {
    this.onDeactivate.emit(event);
  }
  getTickFormatter(type: string, currency?: CurrencyType): any {
    const language = this.getLanguage(currency);
    const currencyCode = this.getCurrencyCode(language, currency);

    switch (type) {
      case 'intGrouped':
        return this.formatIntGrouped;
      case 'floatGrouped':
        return this.formatFloatGrouped;
      case 'int':
        return this.formatInt;
      case 'float':
        return this.formatFloat;
      case 'currency':
        return this.formatCurrency(language, currencyCode);
      case 'time':
      case 'TIME':
      case 'TIMESTAMP':
      case 'DATE':
        return this.auxFormatDate;
      case 'timeDay':
        return this.formatTime;
      case 'timeDetail':
        return this.formatDateTime;
      case 'percentage':
        return this.formatPercentage;
      default:
        return typeof type === 'function' ? type : undefined;
    }
  }

  private getLanguage(currency?: CurrencyType): string {
    if (currency) {
      return currency?.symbolPosition === 'left' ? 'en' : 'es';
    }
    else {
      return this._translateService.getCurrentLang();
    }

  }

  private getCurrencyCode(language: string, currency?: CurrencyType): string {
    if (currency) {
      return CurrencyUtil.getCurrencyCodeFromSymbol(currency.symbol);
    }
    else {
      return CurrencyUtil.getCurrencyCode(language);
    }
  }

  private formatIntGrouped(d: number): string {
    return (d !== undefined) ? d.toLocaleString() : '';
  }

  private formatFloatGrouped(d: number): string {
    return (d !== undefined) ? d.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';
  }

  private formatInt(d: number): string {
    return (d !== undefined) ? Math.round(d).toLocaleString() : '';
  }

  private formatFloat(d: number): string {
    return (d !== undefined) ? d.toFixed(2) : '';
  }

  private formatCurrency(language: string, currencyCode: string): (d: number) => string {
    return (d: number) => d.toLocaleString(language, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  private auxFormatDate(d: number): string {
    return (d !== undefined) ? new Date(d).toLocaleDateString() : '';
  }

  private formatTime(d: number): string {
    return (d !== undefined) ? new Date(d).toLocaleTimeString() : '';
  }

  private formatDateTime(d: number): string {
    return (d !== undefined) ? new Date(d).toLocaleString() : '';
  }

  private formatPercentage(d: number): string {
    return (d !== undefined) ? (d * 100).toFixed(0) + '%' : '';
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

      chartConf.showTooltip = chartConf.showTooltip ?? this.showTooltip;
      chartConf.showLegend = chartConf.showLegend ?? this.showLegend;
      chartConf.showGridLines = chartConf.showGridLines ?? this.showGridLines;
      chartConf.showDataLabel = chartConf.showDataLabel ?? this.showDataLabel;
      chartConf.showXAxisLabel = chartConf.showXAxisLabel ?? this.showXAxisLabel;
      chartConf.showYAxisLabel = chartConf.showYAxisLabel ?? this.showYAxisLabel;

      chartConf.height = chartConf.height ?? (this.cHeight !== -1 ? this.cHeight : null);
      chartConf.width = chartConf.width ?? (this.cWidth !== -1 ? this.cWidth : null);

      chartConf.xLabel = chartConf.xLabel ?? this.xAxisLabel;
      chartConf.yLabel = chartConf.yLabel ?? this.yAxisLabel;

      chartConf.xDataType = chartConf.xDataType ?? this.xAxisDataType;
      chartConf.yDataType = chartConf.yDataType ?? this.yAxisDataType;

      chartConf.xAxis = chartConf.xAxis ?? this.xAxis;
      chartConf.yAxis = chartConf.yAxis ?? this.yAxisArray;

      chartConf.legendPosition = chartConf.legendPosition ?? this.legendPosition;
      chartConf.legendTitle = chartConf.legendTitle ?? this.legendTitle;

      chartConf.xFormatting = chartConf.xFormatting ?? this.xFormatting;
      chartConf.yFormatting = chartConf.yFormatting ?? this.yFormatting;

      chartConf.autoScale = chartConf.autoScale ?? this.autoScale;
      chartConf.gradient = this.gradient ?? chartConf.gradient;
      chartConf.activeEntries = (this.activeEntries?.length ? this.activeEntries : chartConf.activeEntries);

      chartConf.color = chartConf.color ?? this.color;
      chartConf.translateService = this.translateService;
      chartConf.data = chartConf.data ?? this.dataArray;

    } else {
      chartConf = ChartConfigurationUtils.getConfigurationForType(this.type);

      chartConf.showTooltip = this.showTooltip;
      chartConf.showLegend = this.showLegend;
      chartConf.showGridLines = this.showGridLines;
      chartConf.showDataLabel = this.showDataLabel;
      chartConf.showXAxisLabel = this.showXAxisLabel;
      chartConf.showYAxisLabel = this.showYAxisLabel;

      chartConf.height = this.cHeight !== -1 ? this.cHeight : 0;
      chartConf.width = this.cWidth !== -1 ? this.cWidth : 0;

      chartConf.xLabel = this.xAxisLabel;
      chartConf.yLabel = this.yAxisLabel;

      chartConf.xDataType = this.xAxisDataType;
      chartConf.yDataType = this.yAxisDataType;

      chartConf.xAxis = this.xAxis;
      chartConf.yAxis = this.yAxisArray;

      chartConf.legendPosition = this.legendPosition;
      chartConf.legendTitle = this.legendTitle;

      chartConf.xFormatting = this.xFormatting;
      chartConf.yFormatting = this.yFormatting;

      chartConf.autoScale = this.autoScale;
      chartConf.gradient = this.gradient;
      chartConf.activeEntries = this.activeEntries;

      chartConf.color = this.color;
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
    let data;
    if (this.type === 'forceDirectedGraph' || this.type === 'bulletChart') {
      if (this.dataArray && this.dataArray[0]) {
        data = this.cleanArray(this.dataArray[0]);

      } else {
        data = [];
      }
    } else {
      data = this.cleanArray(this.dataArray);

    }
    this.onDataLoaded.emit(data);
    this.configureParams();
    return data
  }

  cleanArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === undefined) {
        arr[i].name = '';
      }
      if (arr[i].series) {
        for (let j = 0; j < arr[i].series.length; j++) {
          if (arr[i].series[j].name === undefined) {
            arr[i].series[j].name = '';
          }
          if (arr[i].series[j].value === undefined) {
            arr[i].series[j].value = '';
          }
        }
      } else if (arr[i].value === undefined) {
        arr[i].value = '';
      }
    }
    if (this.type == 'stackedAreaChart' && Util.isDefined(this.xColumn) && (this.xColumn.type == 'date' || this.yColumn.type == 'date')) {
      arr = this.filterArray(arr);
    }
    return arr;
  }
  filterArray(data) {
    data[0].series = data[0].series.filter(serie => serie.name !== "" && serie.value !== "");

    return data;
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
  getCurrency(column: OColumn): CurrencyType {
    let currency: CurrencyType;
    const symbol: string = column.renderer['currencySymbol'];
    const symbolPosition: string = column.renderer['currencySymbolPosition'];
    currency = { symbol, symbolPosition };
    return currency;
  }
  configureParams() {
    let chart = this.getChartByType();
    if (!chart) return;

    let config = this.getChartConfiguration();
    if (!config) return;

    this.setChartView(chart, config);
    this.setChartLabelsAndLegend(chart, config);
    this.setChartTooltip(chart, config);
    this.setChartColorScheme(chart, config);
    this.setChartGridLines(chart);
    this.setChartGradientAndActiveEntries(chart, config);
    if (this.type == 'pie' || this.type == 'donutChart') {
      this.setChartPieConfiguration(chart, config);
    }

    if (Util.isDefined(config['xDataType'])) {
      if (this.type != 'pie' && this.type != 'donutChart') {
        this.setChartAxisFormatting(chart, 'xAxisTickFormatting', config['xDataType'], this.xColumn);

      } else {
        this.setChartAxisFormatting(chart, 'labelFormatting', config['xDataType'], this.xColumn);
      }
    }

    if (Util.isDefined(config['yDataType'])) {
      if (this.type != 'pie' && this.type != 'donutChart') {
        this.setChartAxisFormatting(chart, 'yAxisTickFormatting', config['yDataType'], this.yColumn);
      }
    }
    if (this.type == 'line' || this.type == 'stackedAreaChart') {
      this.setChartLineConfiguration(chart, config);
    }
  }
  setChartLineConfiguration(chart, config) {

    // chart.schemeType = config['schemeType'];
    // chart.rangeFillOpacity = config['rangeFillOpacity'];
    chart.roundDomains = config['roundDomains'];
    // chart.timeline = config['timeline'];
    chart.curve = config['curve'];

    // chart.referenceLines = config['referenceLines'];
    // chart.showRefLines = config['showRefLines'];
    // chart.showRefLabels = config['showRefLabels'];

    // chart.xScaleMin = config['xScaleMin'];
    // chart.xScaleMax = config['xScaleMax'];
    // chart.yScaleMin = config['yScaleMin'];
    // chart.yScaleMax = config['yScaleMax'];

    // chart.trimXAxisTicks = config['trimXAxisTicks'];
    // chart.trimYAxisTicks = config['trimYAxisTicks'];
    // chart.rotateXAxisTicks = config['rotateXAxisTicks'];
    // chart.maxXAxisTickLength = config['maxXAxisTickLength'];
    // chart.maxYAxisTickLength = config['maxYAxisTickLength'];
    // chart.wrapTicks = config['wrapTicks'];
  }

  getChartByType() {
    switch (this.type) {
      case 'pie': return this.pieChart;
      case 'donutChart': return this.donutChart;
      case 'stackedAreaChart': return this.stackedAreaChart;
      case 'multiBarHorizontalChart': return this.horizontalBarChart;
      case 'line': return this.lineChart;
      case 'discreteBar': return this.discreteBarChart;
      case 'multiBar': return this.multiBarChart;
      default: return null;
    }
  }

  setChartView(chart, config) {
    if (this.isDefinedAndGreaterThanZero(config.width, config.height) || this.isDefinedAndGreaterThanZero(this.cWidth, this.cHeight)) {
      chart.view = [config.width || this.cWidth, config.height || this.cHeight];
    }
  }

  setChartLabelsAndLegend(chart, config) {
    chart.labels = config['showLabels'];
    chart.legend = this.showLegend || config?.showLegend;
    chart.legendPosition = this.legendPosition ?? config['legendPosition'];
    chart.legendTitle = this.legendTitle;
    chart.showXAxisLabel = this.showXAxisLabel;
    chart.showYAxisLabel = this.showYAxisLabel;
    chart.xAxisLabel = this.xAxisLabel;
    chart.yAxisLabel = this.yAxisLabel;
  }

  setChartTooltip(chart, config) {
    chart['tooltipDisabled'] = !config['showTooltip'];
  }

  setChartColorScheme(chart, config) {
    if (Util.isDefined(config['color'])) {
      chart['scheme'] = config['color'];
    }
  }
  setChartGridLines(chart) {
    if (chart.type != "pie" && chart.type != "donutChart") {
      chart.showGridLines = this.showGridLines;
    }
  }
  setChartGradientAndActiveEntries(chart, config) {
    chart.gradient = (this.gradient !== undefined) ? this.gradient : config['gradient'];
    chart.activeEntries = (this.activeEntries !== undefined) ? this.activeEntries : config['activeEntries'];
  }

  setChartPieConfiguration(chart, config) {

    chart.showLabels = config['showLabels'];
    chart.labelFormatting = config['labelFormatting'];
    chart.trimLabels = config['trimLabels'];
    chart.maxLabelLength = config['maxLabelLength'];
    chart.showLabels = config['showLabels'];
    chart.explodeSlices = config['explodeSlices'];
    chart.arcWidth = config['donutRatio']

  }

  setChartAxisFormatting(chart, axis, dataType, column) {
    if (Util.isDefined(dataType) && column != null && column.renderer && column.renderer['currencySymbol']) {
      chart[axis] = this.getTickFormatter(dataType, this.getCurrency(column));
    } else if (this.isDateType(dataType) && column != null && column.renderer && column.renderer['format']) {
      chart[axis] = this.getDateTickFormatter(column.renderer['format']);
    } else {
      chart[axis] = this.getTickFormatter(dataType);
    }
  }

  isDefinedAndGreaterThanZero(width: number, height: number): boolean {
    return Util.isDefined(width) && Util.isDefined(height) && width != 0 && height != 0;
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
  updateOptions(options: any, type: string, xColumn: OColumn, yColumn: OColumn) {
    this.xColumn = xColumn;
    this.yColumn = yColumn;
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
