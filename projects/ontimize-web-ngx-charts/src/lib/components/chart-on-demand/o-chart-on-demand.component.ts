import { AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, Input, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSidenav } from '@angular/material';
import { OComboComponent, OFormComponent, OntimizeService, OValueChangeEvent } from 'ontimize-web-ngx';

import { DiscreteBarChartConfiguration } from '../../models/options/DiscreteBarChartConfiguration.class';
import { LineChartConfiguration } from '../../models/options/LineChartConfiguration.class';
import { MultiBarChartConfiguration } from '../../models/options/MultiBarChartConfiguration.class';
import { PieChartConfiguration } from '../../models/options/PieChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../../models/options/StackedAreaChartConfiguration.class';
import { DataAdapterUtils, OChartComponent } from '../../ontimize-web-ngx-charts.module';
import { D3LocaleService } from '../../services/d3Locale.service';
import { OChartPreferences } from '../../types/chart-preferences.type';
import { Utils } from '../../util/utils';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { SavePreferencesAsDialogComponent } from './save-preferences-as-dialog/save-preferences-as-dialog.component';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';


declare var d3: any;
@Component({
  selector: 'o-chart-on-demand',
  templateUrl: './o-chart-on-demand.component.html',
  styleUrls: ['./o-chart-on-demand.component.scss']
})

export class OChartOnDemandComponent implements AfterViewInit {

  public chartParametersLineChart: LineChartConfiguration;
  public chartParametersDiscreteBarChart: DiscreteBarChartConfiguration;
  public chartParametersMultiBarChart: MultiBarChartConfiguration;
  public chartParametersAreaChart: StackedAreaChartConfiguration;
  public chartParametersPieChart: PieChartConfiguration;
  public arrayComboYAxis: Array<Object>;
  public entity;
  public service;

  public currentPreference: OChartPreferences;

  showLineChart: boolean = false;
  showMultiBarHorizontalChart: boolean = false;
  showMultiBarChart: boolean = false;
  showAreaChart: boolean = false;
  showPieChart: boolean = false;
  showPlaceholder: boolean = true;
  dateXAxis: boolean = false;
  dateYAxis: boolean = false;
  showConfiguration: boolean = false;

  @ViewChild('wrapper', { static: false }) template: TemplateRef<any>;
  @ViewChild('comboXAxis', { static: true }) comboXAxis: OComboComponent;
  @ViewChild('comboYAxis', { static: true }) comboYAxis: OComboComponent;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('pieChart', { static: false }) pieChart: OChartComponent;
  @ViewChild('lineChartBasic', { static: false }) lineChartBasic: OChartComponent;
  @ViewChild('multiBar', { static: false }) multiBar: OChartComponent;
  @ViewChild('multiHorizoltalBar', { static: false }) multiHorizontalBar: OChartComponent;
  @ViewChild('stackedAreaChart', { static: false }) stackedAreaChart: OChartComponent;
  @ViewChild('formChart', { static: false }) formChart: OFormComponent;
  opened: boolean = true;
  fullscreen: boolean = false;


  private _arrayColumns = [];
  arrayYAxis = [];
  selectedDataType: any;

  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input()
  set arrayColumns(value: Array<Object>) {
    this.hideChart();
    this.arrayComboYAxis = [];
    this.selectedYAxis = "";
    this._arrayColumns = value;
    this.comboXAxis.setDataArray(value);
    this.comboYAxis.setDataArray(value);
    if (this.comboYAxis.value != undefined) {
      this.comboYAxis.clearValue();
    }
    this.comboXAxis.setValue(undefined)

  }

  selectedXAxis: string;
  selectedYAxis: string;
  selectedTypeChart: any;
  fixedInViewport = true;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private d3LocaleService: D3LocaleService,
    private dialogRef: MatDialogRef<any>,
    public dialog: MatDialog,
    protected injector: Injector,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.entity = this.data.entity;
    this.service = this.data.service;
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration(this.service));
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
    this._configureMultiBarChart(d3Locale);
    this._configAreaChart(d3Locale);
    this._configurePieChart(d3Locale);
  }

  ngAfterViewInit(): void {
    let columnTitles = [];
    let columns = Object.keys(this.data.arrayColumns[0]);
    columns.forEach((element, index) => {
      columnTitles.push({
        'key': index,
        'value': element,
      });
    });
    this.arrayColumns = this.data.arrayColumns;
    this.comboXAxis.setDataArray(columnTitles);
    this.comboYAxis.setDataArray(columnTitles);
  }

  captureValueYAxis(event: any) {
    this.arrayComboYAxis = [];
    this.selectedYAxis = "";
    this.arrayComboYAxis = event;
    this.selectedYAxis = event;
    this.showChart();
  }

  captureValueXAxis(event: OValueChangeEvent) {
    this.selectedXAxis = "";
    this.selectedXAxis = event.newValue;
    this.showChart();
  }

  captureTypeChart(event: OValueChangeEvent) {
    this.selectedTypeChart = event.newValue;
    this.showChart();
  }



  showChart() {
    this.hideChart();
    if (this.selectedXAxis != undefined) {
      if (this.selectedYAxis != undefined && this.selectedYAxis.length != 0) {
        if (this.selectedTypeChart != undefined) {
          this.configureChart();
        }
      }
    } else {
      this.hideChart();
    }
  }


  hideChart() {
    this.showLineChart = false;
    this.showMultiBarHorizontalChart = false;
    this.showMultiBarChart = false;
    this.showPieChart = false;
    this.showAreaChart = false;
    this.showPlaceholder = true;
  }


  configureChart() {
    this.showPlaceholder = false;
    if (this.selectedTypeChart == 1) {
      this.showLineChart = true;
      this.chartParametersLineChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersLineChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersLineChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersLineChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersLineChart);
      this.lineChartBasic.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    } else if (this.selectedTypeChart == 2) {
      this.showMultiBarChart = true;
      this.chartParametersMultiBarChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersMultiBarChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersMultiBarChart);
      this.multiBar.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    } else if (this.selectedTypeChart == 3) {
      this.showMultiBarChart = true;
      this.chartParametersMultiBarChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersMultiBarChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersMultiBarChart);
      this.multiHorizontalBar.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    } else if (this.selectedTypeChart == 4) {
      this.showAreaChart = true;
      this.chartParametersAreaChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersAreaChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersAreaChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersAreaChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersAreaChart);
      this.stackedAreaChart.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    }
    else if (this.selectedTypeChart == 5) {
      this.showPieChart = true;
      this.chartParametersPieChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersPieChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersPieChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersPieChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersPieChart);
      this.pieChart.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    }
  }


  get arrayColumns(): Array<Object> {
    return this._arrayColumns;
  }

  array: Array<Object> = [];

  getDataArrayRadioGraphics() {
    this.array = [];
    this.array.push({
      'key': 1,
      'value': 'Line'
    });
    this.array.push({
      'key': 2,
      'value': 'Multi Bar'
    });
    this.array.push({
      'key': 3,
      'value': 'Multi Horizontal Bar'
    });
    this.array.push({
      'key': 4,
      'value': 'Area'
    });
    this.array.push({
      'key': 5,
      'value': 'Pie'
    });
    return this.array;
  }

  getValueDao(): any[] {
    return this.arrayColumns;
  }

  getData() {
    return this.arrayColumns;
  }

  captureValueComboDataTypeXAxis(eventXAxis: OValueChangeEvent) {
    var elementXAxis = this.arrayDataType.find(item => item.key == eventXAxis.newValue);

    this.chartParametersLineChart.xDataType = elementXAxis.f;
    this.chartParametersMultiBarChart.xDataType = elementXAxis.f;
    this.chartParametersAreaChart.xDataType = elementXAxis.f;
    this.chartParametersPieChart.valueType = elementXAxis.f;
  }


  captureValueComboDataTypeYAxis(eventYAxis: OValueChangeEvent) {
    // this.selectedDataType = event.newValue;
    // console.log("this.selectedDataType " + this.selectedDataType);
    let elementYAxis = this.arrayDataType.find(item => item.key == eventYAxis.newValue);

    this.chartParametersLineChart.yDataType = elementYAxis.f;
    this.chartParametersMultiBarChart.yDataType = elementYAxis.f;
    this.chartParametersAreaChart.yDataType = elementYAxis.f;
    this.chartParametersPieChart.valueType = elementYAxis.f;

    if (elementYAxis != undefined) {
      this.showChart();
    }
  }

  arrayDataType: Array<any> = [];

  getArrayDataType() {
    this.arrayDataType = [];
    this.arrayDataType.push({
      'key': 1,
      'value': 'Number',
      'f': d => d3.format('d')(d)
    });
    this.arrayDataType.push({
      'key': 2,
      'value': 'Decimal ',
      'f': d => d3.format('.02f')(d)

    });
    this.arrayDataType.push({
      'key': 3,
      'value': 'Date',
      'f': d => d3.time.format('%x')(new Date(d))

    });
    this.arrayDataType.push({
      'key': 4,
      'value': 'Integer',
      'f': d => d3.format('.0%')(d)

    });
    this.arrayDataType.push({
      'key': 5,
      'value': 'Name'
    });
    this.arrayDataType.push({
      'key': 6,
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

  showConfigurationMenu(): void {
    this.showConfiguration = !this.showConfiguration;
  }

  openSavePreferencesDialog(): void {
    this.dialog
      .open(SavePreferencesDialogComponent, {
        minWidth: "576px",
        minHeight: "336px",
      })
      .afterClosed()
      .subscribe((data: String) => {
        console.log("Data");
        console.log(data);
      });
  }

  openSavePreferencesAsDialog(): void {
    this.dialog
      .open(SavePreferencesAsDialogComponent, {
        minWidth: "576px",
        minHeight: "336px",
      })
      .afterClosed()
      .subscribe((data: String) => {
        console.log("Data");
        console.log(data);
      });
  }

  openLoadPreferencesDialog(): void {
    this.dialog.open(LoadPreferencesDialogComponent, {
      minWidth: "576px",
      minHeight: "336px",
    }).afterClosed()
      .subscribe((data: String) => {
        console.log("Data");
        console.log(data);
      });
  }

  setFullscreenDialog(): void {
    Utils.setFullscreenDialog(this.fullscreen, this.dialogRef);
    this.fullscreen = !this.fullscreen;
  }

  savePreferences() {
    console.log("Save Preferences");
  }

}
