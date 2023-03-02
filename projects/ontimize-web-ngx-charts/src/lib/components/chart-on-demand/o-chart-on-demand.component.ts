import { Subscription } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, Input, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSidenav } from '@angular/material/sidenav';
import domtoimage from 'dom-to-image';
import { AnimationOptions } from 'ngx-lottie';
import { OColumn, OFormComponent, OntimizeService, OTableComponent, OValueChangeEvent, SnackBarService, SQLTypes, Util, OTranslateService, DialogService, OntimizeMatIconRegistry } from 'ontimize-web-ngx';
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
const svgIcons = ['palette1', 'palette2', 'palette3', 'palette4'];


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
  comboPalette = [
    {
      value: 'palette1', colors: ['#003CC4', '#0058D2', '#006BDB', '#2681E0', '#4D97E6', '#80B5ED', '#B3D3F4', '#E0EDFB']
    },
    { value: 'palette2', colors: ['#063679', '#0E5293', '#1464A5', '#377BB3', '#5B93C0', '#8AB2D2', '#B9D1E4', '#E3ECF4'] },
    { value: 'palette3', colors: ['#20217B', '#373995', '#4649A6', '#6264B3', '#7E80C1', '#A3A4D3', '#B9D1E4', '#E9E9F4'] },
    { value: 'palette4', colors: ['#04122E', '#0A2348', '#0E2F59', '#324E72', '#566D8B', '#8797AC', '#B7C1CD', '#E2E6EB'] }];

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('chart') chart: OChartComponent;
  @ViewChild('formChart') formChart: OFormComponent;
  @ViewChild('radioType') radioType: MatRadioGroup;
  @ViewChild('radioDataType') radioDataType: MatRadioGroup;
  opened: boolean = true;
  fullscreen: boolean = false;

  private _arrayColumns = [];
  arrayYAxis = [];
  sqlTypes = {};
  public d3Locale;

  @Input() description: string = '';
  @Input() buttonText: string = '';

  fixedInViewport = true;

  protected langSubscription: Subscription;
  protected translateService: OTranslateService;
  protected dialogService: DialogService;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private d3LocaleService: D3LocaleService,
    private dialogRef: MatDialogRef<any>,
    public dialog: MatDialog,
    protected injector: Injector,
    private ontimizeMatIconRegistry: OntimizeMatIconRegistry,
    @Inject(MAT_DIALOG_DATA) public tableComp: OTableComponent,
  ) {
    this.dialogService = this.injector.get<DialogService>(DialogService as Type<DialogService>);
    this.currentPreference = new DefaultOChartPreferences();
    this.currentPreference.entity = this.tableComp.entity;
    this.currentPreference.service = this.tableComp.service;
    this.sqlTypes = this.tableComp.getSqlTypes();
    this.preferencesService = this.injector.get<PreferencesService>(PreferencesService);
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration(this.currentPreference.service));
    this.d3Locale = this.d3LocaleService.getD3LocaleConfiguration();
    this.translateService = this.injector.get(OTranslateService);
    this.snackBarService = this.injector.get(SnackBarService);
  }

  ngOnInit(): void {
    this.langSubscription = this.translateService.onLanguageChanged.subscribe(_event => {
      this.configureChart();
    });
    if (this.ontimizeMatIconRegistry) {
      svgIcons.forEach(current => {
        this.ontimizeMatIconRegistry.addOntimizeSvgIcon(current, 'assets/' + current + '.svg');
      })

    }
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
    path: './assets/chart_animation.json',
    autoplay: false
  };

  protected parseColumnsVisible() {
    const columnsArray = Util.parseArray(this.tableComp.columns);
    return this.tableComp.oTableOptions.columns.filter(oCol => oCol.type !== "image" && oCol.visible && columnsArray.findIndex(column => column === oCol.attr) > -1).map(
      (x: OColumn) => x.attr
    )
  }

  captureValueYAxis(event: any) {
    //multiple selection is not available, right now it is creating an array to be able to store data into ChartConfiguration interface
    this.currentPreference.selectedYAxis = [];
    this.currentPreference.selectedYAxis = [event.value];
    let type = this.sqlTypes[this.currentPreference.selectedYAxis[0]];
    this.currentPreference.selectedYAxisType = type != undefined ? type : SQLTypes.OTHER;
  }

  captureValueXAxis(event: any) {
    this.currentPreference.selectedXAxis = event.value;
    let type = this.sqlTypes[this.currentPreference.selectedXAxis];
    this.currentPreference.selectedXAxisType = type != undefined ? type : SQLTypes.OTHER;
  }
  captureValuePalette(event: any) {
    this.currentPreference.selectedPalette = event.value;
  }

  captureTypeChart(event: OValueChangeEvent) {
    this.currentPreference.selectedTypeChart = event.newValue;
  }
  captureDataTypeChart(adapter) {
    let data = [];
    switch (this.currentPreference.selectedDataTypeChart) {
      case 1:
        // Independently if it is pageable or not, it has to be returned getValue().
        data = this.tableComp.getValue();
        break;
      case 2:
        if (this.tableComp.pageable) {
          this.showPlaceholder = true;
          let filter: object = {};
          const queryArgs = this.tableComp.getQueryArguments(filter);
          this.ontimizeService.query(queryArgs[0], queryArgs[1], queryArgs[2], queryArgs[3])
            .subscribe(response => {
              this.chart.setDataArray(adapter.adaptResult(response.data));
              this.showPlaceholder = false;
            });
        } else {
          data = this.tableComp.getAllValues();
        } break;
      case 3:

        if (this.tableComp.pageable) {
          this.showPlaceholder = true;
          this.ontimizeService.query(this.tableComp.getParentKeysValues(), this.tableComp.searcheableColumns, this.currentPreference.entity, this.tableComp.getSqlTypes())
            .subscribe(response => {
              this.chart.setDataArray(adapter.adaptResult(response.data));
              this.showPlaceholder = false;
            });
        }
        else {
          data = this.tableComp.getDataArray();
        } break;
    }
    if (data != undefined) {
      this.chart.setDataArray(adapter.adaptResult(data));
      this.showPlaceholder = false;
    }
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
    const chartParameters = OChartOnDemandUtils.configureChart(this.currentPreference, this.tableComp.oTableOptions);
    if (chartParameters) {
      chartParameters.translateService = this.translateService;
    }
    const adapter = DataAdapterUtils.createDataAdapter(chartParameters);
    this.captureDataTypeChart(adapter);
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
      'key': 'discreteBar',
      'value': 'CHART_ON_DEMAND.DISCRETE_BAR'
    });
    this.array.push({
      'key': 'multiBar',
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
    this.array.push({
      'key': 'donutChart',
      'value': 'CHART_ON_DEMAND.DONUT'
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
      quality: 1
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
    this.currentPreference.entity = this.tableComp.entity;
    this.currentPreference.service = this.tableComp.service;
    this.currentPreference.title = "";
    this.currentPreference.subtitle = "";
    this.currentPreference.selectedDataTypeChart = 1;
    this.currentPreference.selectedTypeChart = "";
    this.currentPreference.selectedXAxis = undefined;
    this.currentPreference.selectedYAxis = [];
    this.currentPreference.selectedPalette = undefined;
    this.hideChart();
  }
  enabledPreview() {
    return (this.currentPreference.selectedXAxis != "" && this.currentPreference.selectedYAxis.length != 0 && this.currentPreference.selectedTypeChart && this.currentPreference.selectedDataTypeChart)

  }
  getPaletteIcon() {
    const foundObject = this.comboPalette.find(color => color.colors == this.currentPreference.selectedPalette)
    return "ontimize:" + foundObject.value + "";
  }
}
