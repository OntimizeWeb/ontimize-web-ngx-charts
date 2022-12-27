import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Injector, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatRadioGroup, MatSidenav, MAT_DIALOG_DATA } from '@angular/material';
import domtoimage from 'dom-to-image';
import { OColumn, OComboComponent, OFormComponent, OntimizeService, ORadioComponent, OTableComponent, OValueChangeEvent, SnackBarService, Util } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from '../../models/options/DiscreteBarChartConfiguration.class';
import { LineChartConfiguration } from '../../models/options/LineChartConfiguration.class';
import { MultiBarChartConfiguration } from '../../models/options/MultiBarChartConfiguration.class';
import { PieChartConfiguration } from '../../models/options/PieChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../../models/options/StackedAreaChartConfiguration.class';
import { ChartConfiguration, DataAdapterUtils, OChartComponent } from '../../ontimize-web-ngx-charts.module';
import { D3LocaleService } from '../../services/d3Locale.service';
import { PreferencesService } from '../../services/preferences.service';
import { DefaultOChartPreferences, OChartPreferences } from '../../types/chart-preferences.type';
import { PreferencesConfiguration } from '../../types/preferences-configuration.type';
import { Utils } from '../../util/utils';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';
import { AnimationOptions } from 'ngx-lottie';
declare var d3: any;
@Component({
  selector: 'o-chart-on-demand',
  templateUrl: './o-chart-on-demand.component.html',
  styleUrls: ['./o-chart-on-demand.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class OChartOnDemandComponent implements AfterViewInit {

  public chartParametersLineChart: LineChartConfiguration;
  public chartParametersDiscreteBarChart: DiscreteBarChartConfiguration;
  public chartParametersMultiBarChart: MultiBarChartConfiguration;
  public chartParametersAreaChart: StackedAreaChartConfiguration;
  public chartParametersPieChart: PieChartConfiguration;
  public arrayComboYAxis: Array<Object>;

  public appliedConfiguration: boolean = false;

  protected snackBarService: SnackBarService;
  public currentPreference: OChartPreferences;
  public currentConfiguration: PreferencesConfiguration;
  public preferencesService: PreferencesService;

  showPlaceholder: boolean = true;
  dateXAxis: boolean = false;
  dateYAxis: boolean = false;
  multiSelectionCombo: boolean = false;
  dataTypes = this.getDataType();
  types = this.getDataArrayRadioGraphics();
  chartParameters;
  comboData: Array<Object>;

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('chart', { static: false }) chart: OChartComponent;
  @ViewChild('formChart', { static: false }) formChart: OFormComponent;
  @ViewChild('radioType', { static: false }) radioType: MatRadioGroup;
  @ViewChild('radioDataType', { static: false }) radioDataType: MatRadioGroup;
  opened: boolean = true;
  fullscreen: boolean = false;

  private _arrayColumns = [];
  arrayYAxis = [];
  sqlTypes = {};
  public d3Locale;

  @Input() description: string = '';
  @Input() buttonText: string = '';

  fixedInViewport = true;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private d3LocaleService: D3LocaleService,
    private dialogRef: MatDialogRef<any>,
    public dialog: MatDialog,
    protected injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: OTableComponent,
  ) {
    this.currentPreference = new DefaultOChartPreferences();
    this.currentPreference.entity = this.data.entity;
    this.currentPreference.service = this.data.service;
    this.sqlTypes = this.data.getSqlTypes();
    this.preferencesService = this.injector.get<PreferencesService>(PreferencesService);
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration(this.currentPreference.service));
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(this.d3Locale);
    this._configureMultiBarChart(this.d3Locale);
    this._configAreaChart(this.d3Locale);
    this._configurePieChart(this.d3Locale);


  }

  ngAfterViewInit(): void {
    let dataArray = this.parseColumnsVisible();
    let columnTitles = [];
    dataArray.forEach((element, index) => {
      columnTitles.push({
        'key': index,
        'value': element,
      });
    });
    this.comboData = columnTitles;
    this.currentConfiguration = { ENTITY: this.currentPreference.entity };
    this.cd.detectChanges();
  }
  options: AnimationOptions = {
    path: '/assets/chart_animation.json',
    autoplay: false
  };

  protected parseColumnsVisible() {
    const columnsArray = Util.parseArray(this.data.columns);
    return this.data.oTableOptions.columns.filter(oCol => oCol.type !== "image" && oCol.visible && columnsArray.findIndex(column => column === oCol.attr) > -1).map(
      (x: OColumn) => x.attr
    )
  }

  captureValueYAxis(event: any) {
    this.arrayComboYAxis = [];
    this.currentPreference.selectedYAxis = [];
    this.arrayComboYAxis = event.value;
    this.currentPreference.selectedYAxis = event.value;
    let type = this.sqlTypes[this.currentPreference.selectedYAxis[0]];
    let elementYAxis = this.arrayDataType.find(item => item.type == type);
    if (elementYAxis != undefined) {
      this.currentPreference.selectedYAxisType = elementYAxis.key;
    }

  }

  captureValueXAxis(event: any) {
    this.currentPreference.selectedXAxis = "";
    this.currentPreference.selectedXAxis = event.value;
    // if (this.currentPreference.selectedXAxisType == "") {
    let type = this.sqlTypes[this.currentPreference.selectedXAxis];
    let elementXAxis = this.arrayDataType.find(item => item.type == type);
    if (elementXAxis != undefined) {
      this.currentPreference.selectedXAxisType = elementXAxis.key;
    }
    // }

  }

  captureTypeChart(event: OValueChangeEvent) {
    this.currentPreference.selectedTypeChart = event.newValue;
    this.multiSelectionCombo = (this.currentPreference.selectedTypeChart == 1 || this.currentPreference.selectedTypeChart == 2);
  }
  captureDataTypeChart(): any[] {
    let data;
    switch (this.currentPreference.selectedDataTypeChart) {
      case 1:
        if (this.data.pageable) {
          data = this.data.getDataArray();
        } else {
          data = this.data.getAllValues();
        } break;
      case 2:
        if (this.data.pageable) {
          data = this.data.getDataArray();
        } else {
          data = this.data.getAllValues();
        } break;
      case 3:
        if (this.data.pageable) {
          data = this.data.getDataArray();
        } else {
          data = this.data.getDataArray();
        } break;
    }
    return data;
  }


  showChart() {
    if (this.currentPreference.selectedXAxis != undefined) {
      if (this.currentPreference.selectedYAxis != undefined && this.currentPreference.selectedYAxis.length != 0) {
        if (this.currentPreference.selectedTypeChart != undefined) {
          this.configureChart();
        }
      }
    } else {
      this.hideChart();
    }
  }


  hideChart() {
    this.showPlaceholder = true;
  }

  configureLineChart(elementXAxis, elementYAxis) {
    this.chartParametersLineChart.xAxis = this.currentPreference.selectedXAxis;
    this.chartParametersLineChart.yAxis = this.currentPreference.selectedYAxis;
    this.chartParametersLineChart.xLabel = this.currentPreference.selectedXAxis;
    this.chartParametersLineChart.yLabel = this.currentPreference.selectedYAxis.toString();
    this.chartParametersLineChart.xDataType = elementXAxis.f;
    this.chartParametersLineChart.yDataType = elementYAxis.f;
    this.chartParameters = this.chartParametersLineChart;
    DataAdapterUtils.createDataAdapter(this.chartParametersLineChart);
  }
  configureMultiBarChart(elementXAxis, elementYAxis) {
    this.chartParametersMultiBarChart.xAxis = this.currentPreference.selectedXAxis;
    this.chartParametersMultiBarChart.yAxis = this.currentPreference.selectedYAxis;
    this.chartParametersMultiBarChart.xLabel = this.currentPreference.selectedXAxis;
    this.chartParametersMultiBarChart.yLabel = this.currentPreference.selectedYAxis.toString();
    this.chartParametersMultiBarChart.xDataType = elementXAxis.f;
    this.chartParametersMultiBarChart.yDataType = elementYAxis.f;
    this.chartParameters = this.chartParametersMultiBarChart;
    DataAdapterUtils.createDataAdapter(this.chartParametersMultiBarChart);
  }
  configureAreaChart(elementXAxis, elementYAxis) {
    this.chartParametersAreaChart.xAxis = this.currentPreference.selectedXAxis;
    this.chartParametersAreaChart.yAxis = this.currentPreference.selectedYAxis;
    this.chartParametersAreaChart.xLabel = this.currentPreference.selectedXAxis;
    this.chartParametersAreaChart.yLabel = this.currentPreference.selectedYAxis.toString();
    this.chartParametersAreaChart.xDataType = elementXAxis.f;
    this.chartParametersAreaChart.yDataType = elementYAxis.f;
    this.chartParameters = this.chartParametersAreaChart;
    DataAdapterUtils.createDataAdapter(this.chartParametersAreaChart);
  }
  configurePieChart(elementXAxis, elementYAxis) {
    this.chartParametersPieChart.xAxis = this.currentPreference.selectedXAxis;
    this.chartParametersPieChart.yAxis = this.currentPreference.selectedYAxis;
    this.chartParametersPieChart.xLabel = this.currentPreference.selectedXAxis;
    this.chartParametersPieChart.yLabel = this.currentPreference.selectedYAxis.toString();
    this.chartParametersPieChart.valueType = elementYAxis.f;
    this.chartParameters = this.chartParametersPieChart;
    DataAdapterUtils.createDataAdapter(this.chartParametersPieChart);
  }

  configureChart() {
    this.showPlaceholder = false;
    let elementXAxis = this.arrayDataType.find(item => item.key == this.currentPreference.selectedXAxisType);
    let elementYAxis = this.arrayDataType.find(item => item.key == this.currentPreference.selectedYAxisType);
    let data = this.captureDataTypeChart();
    switch (this.currentPreference.selectedTypeChart) {
      case 1: this.configureLineChart(elementXAxis, elementYAxis);
        break;
      case 2: this.configureMultiBarChart(elementXAxis, elementYAxis);
        break;
      case 3: this.configureAreaChart(elementXAxis, elementYAxis);
        break;
      case 4: this.configurePieChart(elementXAxis, elementYAxis);
        break;
    }
    this.chart.setDataArray(DataAdapterUtils.adapter.adaptResult(data))

    this.chart.updateOptions(this.chartParameters);
  }


  get arrayColumns(): Array<Object> {
    return this._arrayColumns;
  }

  array: Array<Object> = [];

  getDataArrayRadioGraphics() {
    this.array = [];
    this.array.push({
      'key': 1,
      'value': 'CHART_ON_DEMAND.LINE'
    });
    this.array.push({
      'key': 2,
      'value': 'CHART_ON_DEMAND.MULTI_BAR'
    });
    this.array.push({
      'key': 3,
      'value': 'CHART_ON_DEMAND.AREA'
    });
    this.array.push({
      'key': 4,
      'value': 'CHART_ON_DEMAND.PIE'
    });
    return this.array;
  }
  getDataType() {
    this.array = [];
    this.array.push({
      'key': 1,
      'value': 'CHART_ON_DEMAND.CURRENT_PAGE'
    });
    this.array.push({
      'key': 2,
      'value': 'CHART_ON_DEMAND.FILTER_DATA'
    });
    this.array.push({
      'key': 3,
      'value': 'CHART_ON_DEMAND.ALL_DATA'
    });
    return this.array;
  }
  getValueDao(): any[] {
    return this.arrayColumns;
  }

  getData() {
    return this.arrayColumns;
  }

  modifiedValueComboDataTypeXAxis(value) {
    if (value != undefined) {
      this.chartParametersLineChart.xDataType = value.f;
      this.chartParametersMultiBarChart.xDataType = value.f;
      this.chartParametersAreaChart.xDataType = value.f;
      this.chartParametersPieChart.valueType = value.f;

      this.currentPreference.selectedXAxisType = value.key;
    }
  }

  captureValueComboDataTypeXAxis(eventXAxis: OValueChangeEvent) {
    let elementXAxis = this.arrayDataType.find(item => item.key == eventXAxis.newValue);
    this.modifiedValueComboDataTypeXAxis(elementXAxis)
  }

  modifiedValueComboDataTypeYAxis(value) {
    if (value != undefined) {
      this.chartParametersLineChart.yDataType = value.f;
      this.chartParametersMultiBarChart.yDataType = value.f;
      this.chartParametersAreaChart.yDataType = value.f;
      this.chartParametersPieChart.valueType = value.f;
      this.currentPreference.selectedYAxisType = value.key;
    }
  }
  captureValueComboDataTypeYAxis(eventYAxis: OValueChangeEvent) {
    let elementYAxis = this.arrayDataType.find(item => item.key == eventYAxis.newValue);
    this.modifiedValueComboDataTypeYAxis(elementYAxis);

  }

  arrayDataType: Array<any> = this.getArrayDataType();

  getArrayDataType() {
    this.arrayDataType = [];

    this.arrayDataType.push({
      'key': 2,
      'type': 3,
      'value': 'Decimal ',
      'f': d => d3.format('.02f')(d)

    });
    this.arrayDataType.push({
      'key': 3,
      'type': 93,
      'value': 'Date',
      'f': "time"

    });
    this.arrayDataType.push({
      'key': 4,
      'type': 4,
      'value': 'Integer',
      'f': d => d3.format('.02f')(d)

    });
    this.arrayDataType.push({
      'key': 5,
      'type': 12,
      'value': 'String'
    });
    this.arrayDataType.push({
      'key': 6,
      'type': 1111,
      'value': 'Amount'
    });
    return this.arrayDataType;
  }


  private _configureLineChart(locale: any): void {
    this.chartParametersLineChart = new LineChartConfiguration();
  }

  private _configureMultiBarChart(locale: any): void {
    this.chartParametersMultiBarChart = new MultiBarChartConfiguration();
  }

  private _configAreaChart(locale: any): void {
    this.chartParametersAreaChart = new StackedAreaChartConfiguration();
  }


  private _configurePieChart(locale: any): void {
    this.chartParametersPieChart = new PieChartConfiguration();
    this.chartParametersPieChart.legendPosition = 'bottom';
  }

  updatePreferences(): void {
    if (Util.isDefined(this.currentConfiguration.ID)) {
      this.savePreferences({ name: this.currentConfiguration.NAME, description: this.currentConfiguration.DESCRIPTION }, true);
    }
  }
  openSaveAsPreferencesDialog(): void {
    this.dialog
      .open(SavePreferencesDialogComponent, {
        panelClass: ['o-dialog-class', 'o-table-dialog']
      })
      .afterClosed()
      .subscribe((data: { name: string, description: string }) => {
        if (Util.isDefined(data) && data) {
          this.savePreferences(data, false);
        }
      });

  }
  savePreferences(data: any, update?: boolean) {
    let preference = {
      "name": data.name, "description": data.description,
      "entity": this.currentPreference.entity, "service": this.currentPreference.service, "type": "CHART", "params": {
        "title": this.currentPreference.title,
        "subtitle": this.currentPreference.subtitle, "entity": this.currentPreference.entity, "service": this.currentPreference.service, "selectedXAxis": this.currentPreference.selectedXAxis,
        "selectedYAxis": this.currentPreference.selectedYAxis, "selectedXAxisType": this.currentPreference.selectedXAxisType, "selectedYAxisType": this.currentPreference.selectedYAxisType,
        "selectedTypeChart": this.currentPreference.selectedTypeChart, "selectedDataTypeChart": this.currentPreference.selectedDataTypeChart
      }
    }

    if (update) {
      this.preferencesService.savePreferences(this.currentConfiguration.ID, preference).subscribe(res => {
        this.showConfirmOperatinInSnackBar(res);
      });
    } else {
      this.preferencesService.saveAsPreferences(preference).subscribe(res => {
        if (res && res.code === 0) {
          this.showConfirmOperatinInSnackBar(res);
        }
      });
    }
  }

  private showConfirmOperatinInSnackBar(res: any) {
    if (res && res.code === 0) {
      this.snackBarService.open('MESSAGES.SAVED', { icon: 'check_circle' });
    }
  }
  public openLoadPreferencesDialog(): void {
    this.dialog.open(LoadPreferencesDialogComponent, {
      width: 'calc((75em - 100%) * 1000)',
      maxWidth: '65vw',
      minWidth: '30vw',
      disableClose: true,
      panelClass: ['o-dialog-class', 'o-table-dialog'],
      data: { entity: this.currentPreference.entity, service: this.currentPreference.service },
    }).afterClosed()
      .subscribe((data: PreferencesConfiguration) => {
        if (Util.isDefined(data) && data) {
          this.applyConfiguration(data);
          this.appliedConfiguration = true;
        }
      }, _error => {
        this.appliedConfiguration = false;
      });
  }
  applyConfiguration(configuration: any) {
    this.currentConfiguration = configuration;
    this.currentPreference = JSON.parse(this.currentConfiguration.PREFERENCES);
  }
  setFullscreenDialog(): void {
    Utils.setFullscreenDialog(this.fullscreen, this.dialogRef);
    this.fullscreen = !this.fullscreen;
    if (!this.showPlaceholder) {
      this.configureChart();
    }
  }

  refreshTitle(value) {
    this.currentPreference.title = value.newValue;
  }
  refreshSubtitle(value) {
    this.currentPreference.subtitle = value.newValue;
  }
  exportChart() {
    let node = document.getElementById('sidenav-container-content');
    let options = { quality: 1 };
    let fileName;
    if (this.currentPreference.title != "") {
      fileName = this.currentPreference.title;
    }
    else {
      fileName = "Chart on demand " + new Date().getDate();
    }
    domtoimage.toJpeg(node, options).then((dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${fileName}.jpg`
      link.click();
    });
  }
  clearCurrentPreferences() {
    this.currentPreference.entity = this.data.entity;
    this.currentPreference.service = this.data.service;
    this.currentPreference.title = "";
    this.currentPreference.subtitle = "";
    this.currentPreference.selectedDataTypeChart = 1;
    this.currentPreference.selectedTypeChart = "";
    this.currentPreference.selectedXAxis = undefined;
    this.currentPreference.selectedYAxis = [];
    this.hideChart();
  }
  enabledPreview() {
    return (this.currentPreference.selectedXAxis != "" && this.currentPreference.selectedYAxis.length != 0 && this.currentPreference.selectedTypeChart && this.currentPreference.selectedDataTypeChart)

  }
}
