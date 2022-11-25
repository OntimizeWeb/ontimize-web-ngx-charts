import { AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSidenav, MAT_DIALOG_DATA } from '@angular/material';
import domtoimage from 'dom-to-image';
import { OComboComponent, OFormComponent, OntimizeService, OValueChangeEvent, SnackBarService, Util } from 'ontimize-web-ngx';
import { DiscreteBarChartConfiguration } from '../../models/options/DiscreteBarChartConfiguration.class';
import { LineChartConfiguration } from '../../models/options/LineChartConfiguration.class';
import { MultiBarChartConfiguration } from '../../models/options/MultiBarChartConfiguration.class';
import { PieChartConfiguration } from '../../models/options/PieChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../../models/options/StackedAreaChartConfiguration.class';
import { DataAdapterUtils, OChartComponent } from '../../ontimize-web-ngx-charts.module';
import { D3LocaleService } from '../../services/d3Locale.service';
import { PreferencesService } from '../../services/preferences.service';
import { DefaultOChartPreferences, OChartPreferences } from '../../types/chart-preferences.type';
import { PreferencesConfiguration } from '../../types/preferences-configuration.type';
import { Utils } from '../../util/utils';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
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

  public appliedConfiguration: boolean = false;

  protected snackBarService: SnackBarService;
  public currentPreference: OChartPreferences;
  public currentConfiguration: PreferencesConfiguration;
  public preferencesService: PreferencesService;

  showLineChart: boolean = false;
  showMultiBarChart: boolean = false;
  showAreaChart: boolean = false;
  showPieChart: boolean = false;
  showPlaceholder: boolean = true;
  dateXAxis: boolean = false;
  dateYAxis: boolean = false;
  showConfiguration: boolean = false;

  @ViewChild('comboXAxis', { static: true }) comboXAxis: OComboComponent;
  @ViewChild('comboYAxis', { static: true }) comboYAxis: OComboComponent;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  @ViewChild('pieChart', { static: false }) pieChart: OChartComponent;
  @ViewChild('lineChartBasic', { static: false }) lineChartBasic: OChartComponent;
  @ViewChild('multiBar', { static: false }) multiBar: OChartComponent;
  @ViewChild('stackedAreaChart', { static: false }) stackedAreaChart: OChartComponent;
  @ViewChild('formChart', { static: false }) formChart: OFormComponent;
  opened: boolean = true;
  fullscreen: boolean = false;


  private _arrayColumns = [];
  arrayYAxis = [];
  sqlTypes = {};

  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input()
  set arrayColumns(value: Array<Object>) {
    this.hideChart();
    this.arrayComboYAxis = [];
    this._arrayColumns = value;
    this.comboXAxis.setDataArray(value);
    this.comboYAxis.setDataArray(value);
    if (this.comboYAxis.value != undefined) {
      this.comboYAxis.clearValue();
    }
    this.comboXAxis.setValue(undefined)

  }
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
    this.currentPreference = new DefaultOChartPreferences();
    this.currentPreference.entity = this.data.entity;
    this.currentPreference.service = this.data.service;
    this.sqlTypes = this.data.sqlTypes;
    this.preferencesService = this.injector.get<PreferencesService>(PreferencesService);
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration(this.currentPreference.service));
    const d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this._configureLineChart(d3Locale);
    this._configureMultiBarChart(d3Locale);
    this._configAreaChart(d3Locale);
    this._configurePieChart(d3Locale);
  }

  ngAfterViewInit(): void {
    let dataArray = this.data.getDataArray();
    let columnTitles = [];
    let columns = Object.keys(dataArray[0]);
    columns.forEach((element, index) => {
      columnTitles.push({
        'key': index,
        'value': element,
      });
    });
    this.arrayColumns = dataArray;
    this.comboXAxis.setDataArray(columnTitles);
    this.comboYAxis.setDataArray(columnTitles);
    this.currentConfiguration = { ENTITY: this.currentPreference.entity };
  }

  captureValueYAxis(event: any) {
    this.arrayComboYAxis = [];
    this.currentPreference.selectedYAxis = "";
    this.arrayComboYAxis = event;
    this.currentPreference.selectedYAxis = event;
    let type = this.sqlTypes[this.currentPreference.selectedYAxis[0]];
    let elementYAxis = this.arrayDataType.find(item => item.type == type);
    this.currentPreference.selectedYAxisType = elementYAxis.key;

    this.showChart();
  }

  captureValueXAxis(event: OValueChangeEvent) {
    this.currentPreference.selectedXAxis = "";
    this.currentPreference.selectedXAxis = event.newValue;
    if (this.currentPreference.selectedXAxisType == "") {
      let type = this.sqlTypes[this.currentPreference.selectedXAxis];
      let elementXAxis = this.arrayDataType.find(item => item.type == type);
      this.currentPreference.selectedXAxisType = elementXAxis.key;
    }

    this.showChart();
  }

  captureTypeChart(event: OValueChangeEvent) {
    this.currentPreference.selectedTypeChart = event.newValue;
    this.showChart();
  }



  showChart() {
    this.hideChart();
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
    this.showLineChart = false;
    this.showMultiBarChart = false;
    this.showPieChart = false;
    this.showAreaChart = false;
    this.showPlaceholder = true;
  }


  configureChart() {
    this.showPlaceholder = false;
    if (this.currentPreference.selectedTypeChart == 1) {
      this.showLineChart = true;
      this.chartParametersLineChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersLineChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersLineChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersLineChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersLineChart);
      this.lineChartBasic.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    } else if (this.currentPreference.selectedTypeChart == 2) {
      this.showMultiBarChart = true;
      this.chartParametersMultiBarChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersMultiBarChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersMultiBarChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersMultiBarChart);
      this.multiBar.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    } else if (this.currentPreference.selectedTypeChart == 3) {
      this.showAreaChart = true;
      this.chartParametersAreaChart.xAxis = this.comboXAxis.value.value;
      this.chartParametersAreaChart.yAxis = this.comboYAxis.value.value;
      this.chartParametersAreaChart.xLabel = this.comboXAxis.value.value;
      this.chartParametersAreaChart.yLabel = this.comboYAxis.value.value.join(';');
      DataAdapterUtils.createDataAdapter(this.chartParametersAreaChart);
      this.stackedAreaChart.setDataArray(DataAdapterUtils.adapter.adaptResult(this.arrayColumns))
    }
    else if (this.currentPreference.selectedTypeChart == 4) {
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
      'value': 'Area'
    });
    this.array.push({
      'key': 4,
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
    this.chartParametersLineChart.xDataType = elementXAxis.f;
    this.chartParametersMultiBarChart.xDataType = elementXAxis.f;
    this.chartParametersAreaChart.xDataType = elementXAxis.f;
    this.chartParametersPieChart.valueType = elementXAxis.f;

    this.modifiedValueComboDataTypeXAxis(elementXAxis)


  }

  modifiedValueComboDataTypeYAxis(value) {
    if (value != undefined) {
      this.chartParametersLineChart.yDataType = value.f;
      this.chartParametersMultiBarChart.yDataType = value.f;
      this.chartParametersAreaChart.yDataType = value.f;
      this.chartParametersPieChart.valueType = value.f;
      this.currentPreference.selectedYAxisType = value.key;
      this.showChart();
    }
  }
  captureValueComboDataTypeYAxis(eventYAxis: OValueChangeEvent) {
    let elementYAxis = this.arrayDataType.find(item => item.key == eventYAxis.newValue);
    this.modifiedValueComboDataTypeYAxis(elementYAxis);

  }

  arrayDataType: Array<any> = [];

  getArrayDataType() {
    this.arrayDataType = [];
    this.arrayDataType.push({
      'key': 1,
      'type': 2,
      'value': 'Number',
      'f': d => d3.format('d')(d)
    });
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
      'f': d => d3.time.format('%x')(new Date(d))

    });
    this.arrayDataType.push({
      'key': 4,
      'type': 4,
      'value': 'Integer',
      'f': d => d3.format('.0%')(d)

    });
    this.arrayDataType.push({
      'key': 5,
      'type': 12,
      'value': 'Name'
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

  showConfigurationMenu(): void {
    this.showConfiguration = !this.showConfiguration;
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
        "selectedTypeChart": this.currentPreference.selectedTypeChart
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
    this.showChart();
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


}
