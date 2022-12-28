import { AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MatRadioGroup, MatSidenav, MAT_DIALOG_DATA } from '@angular/material';
import domtoimage from 'dom-to-image';
import { AnimationOptions } from 'ngx-lottie';
import { OColumn, OFormComponent, OntimizeService, OTableComponent, OValueChangeEvent, SnackBarService, SQLTypes, Util } from 'ontimize-web-ngx';
import { DataAdapterUtils } from '../../adapters/data-adapter-utils';
import { D3LocaleService } from '../../services/d3Locale.service';
import { PreferencesService } from '../../services/preferences.service';
import { DefaultOChartPreferences, OChartPreferences } from '../../types/chart-preferences.type';
import { PreferencesConfiguration } from '../../types/preferences-configuration.type';
import { Utils } from '../../util/utils';
import { OChartComponent } from '../chart/o-chart.component';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { OChartOnDemandUtils } from './o-chart-on-demand-utils';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';

declare var d3: any;
@Component({
  selector: 'o-chart-on-demand',
  templateUrl: './o-chart-on-demand.component.html',
  styleUrls: ['./o-chart-on-demand.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-chart-on-demand]': 'true'
  }

})

export class OChartOnDemandComponent implements AfterViewInit {

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
    //TODO manage multiple selection, right now it is only taken into account item of position 0
    this.currentPreference.selectedYAxis = [];
    this.currentPreference.selectedYAxis = event.value;
    let type = this.sqlTypes[this.currentPreference.selectedYAxis[0]];
    this.currentPreference.selectedYAxisType = type != undefined ? type : SQLTypes.OTHER;
  }

  captureValueXAxis(event: any) {
    this.currentPreference.selectedXAxis = event.value;
    let type = this.sqlTypes[this.currentPreference.selectedXAxis];
    this.currentPreference.selectedXAxisType = type != undefined ? type : SQLTypes.OTHER;
  }

  captureTypeChart(event: OValueChangeEvent) {
    this.currentPreference.selectedTypeChart = event.newValue;
    this.multiSelectionCombo = (this.currentPreference.selectedTypeChart == 1 || this.currentPreference.selectedTypeChart == 2);
  }
  captureDataTypeChart(): any[] {
    //TODO move this method to OChartOnDemandUtils
    let data;
    switch (this.currentPreference.selectedDataTypeChart) {
      // TODO case 1 and 2 are identically???
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



  configureChart() {
    this.showPlaceholder = false;
    // TODO protect code
    const chartParameters = OChartOnDemandUtils.configureChart(this.currentPreference);
    const adapter = DataAdapterUtils.createDataAdapter(chartParameters);
    let data = this.captureDataTypeChart();
    this.chart.setDataArray(adapter.adaptResult(data))
    this.chart.updateOptions(chartParameters);
  }


  get arrayColumns(): Array<Object> {
    return this._arrayColumns;
  }

  array: Array<Object> = [];

  getDataArrayRadioGraphics() {
    this.array = [];
    this.array.push({
      'key': 'line',
      'value': 'CHART_ON_DEMAND.LINE'
    });
    this.array.push({
      'key': 'multibar',
      'value': 'CHART_ON_DEMAND.MULTI_BAR'
    });
    this.array.push({
      'key': 'stackedAreaChart',
      'value': 'CHART_ON_DEMAND.AREA'
    });
    this.array.push({
      'key': 'pie',
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
    let options = {
      bgcolor: 'white', quality: 1
    };
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
