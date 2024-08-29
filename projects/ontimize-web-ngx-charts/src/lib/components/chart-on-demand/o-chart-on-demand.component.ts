import { AfterViewInit, ChangeDetectorRef, Component, Inject, Injector, Input, OnDestroy, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSidenav } from '@angular/material/sidenav';
import domtoimage from 'dom-to-image';
import {
  AppConfig,
  AppearanceService,
  BaseQueryArgument,
  DialogService,
  OColumn,
  OConfigureServiceArgs,
  OFormComponent,
  OntimizeMatIconRegistry,
  OntimizePreferencesService,
  OntimizeQueryArgumentsAdapter,
  OntimizeService,
  OPreference,
  OQueryParams,
  OTableComponent,
  OTranslateService,
  OValueChangeEvent,
  SnackBarService,
  SQLTypes,
  Util
} from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';

import { DataAdapterUtils } from '../../adapters/data-adapter-utils';
import { DefaultOChartPreferences, OChartPreferences } from '../../types/chart-preferences.type';
import { Utils } from '../../util/utils';
import { OChartComponent } from '../chart/o-chart.component';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { OChartOnDemandUtils } from './o-chart-on-demand-utils';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';

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

export class OChartOnDemandComponent implements AfterViewInit, OnDestroy {

  public appliedConfiguration: boolean = false;

  protected snackBarService: SnackBarService;
  public currentPreference: OChartPreferences;
  public currentConfiguration: OPreference;
  public preferencesService: OntimizePreferencesService;

  showPlaceholder: boolean = true;
  dateXAxis: boolean = false;
  dateYAxis: boolean = false;
  multiSelectionCombo: boolean = false;
  dataTypes = this.getDataType();
  types = this.getDataArrayRadioGraphics();
  comboData: Array<Object>;
  comboPalette = [
    {
      value: 'palette1', colors: { domain: ['#003CC4', '#0058D2', '#006BDB', '#2681E0', '#4D97E6', '#80B5ED', '#B3D3F4', '#E0EDFB'] }
    },
    {
      value: 'palette2', colors: { domain: ['#063679', '#0E5293', '#1464A5', '#377BB3', '#5B93C0', '#8AB2D2', '#B9D1E4', '#E3ECF4'] }
    },
    {
      value: 'palette3', colors: { domain: ['#20217B', '#373995', '#4649A6', '#6264B3', '#7E80C1', '#A3A4D3', '#B9D1E4', '#E9E9F4'] }
    },
    {
      value: 'palette4', colors: { domain: ['#04122E', '#0A2348', '#0E2F59', '#324E72', '#566D8B', '#8797AC', '#B7C1CD', '#E2E6EB'] }
    }]
    ;

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
  isDarkMode: boolean;

  @Input() description: string = '';
  @Input() buttonText: string = '';

  protected langSubscription: Subscription;
  protected translateService: OTranslateService;
  protected dialogService: DialogService;
  protected appConfig: AppConfig;
  protected queryArgumentAdapter: BaseQueryArgument;
  protected querySubscription: Subscription;
  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>,
    public dialog: MatDialog,
    protected injector: Injector,
    private ontimizeMatIconRegistry: OntimizeMatIconRegistry,
    @Inject(MAT_DIALOG_DATA) public tableComp: OTableComponent,
    private appearanceService: AppearanceService
  ) {
    this.dialogService = this.injector.get<DialogService>(DialogService as Type<DialogService>);
    this.currentPreference = new DefaultOChartPreferences();
    this.currentPreference.entity = this.tableComp.entity;
    this.currentPreference.service = this.tableComp.service;
    this.sqlTypes = this.tableComp.getSqlTypes();
    this.preferencesService = this.injector.get<OntimizePreferencesService>(OntimizePreferencesService);
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration(this.currentPreference.service));
    this.translateService = this.injector.get(OTranslateService);
    this.snackBarService = this.injector.get(SnackBarService);
    this.appConfig = this.injector.get(AppConfig);

    this.configurePrefereceService();
    this.configureAdapter();
  }

  public configurePrefereceService(): void {
    let configureServiceArgs: OConfigureServiceArgs = { injector: this.injector, baseService: OntimizePreferencesService, entity: 'preferences', service: 'preferences', serviceType: null };
    this.preferencesService = Util.configureService(configureServiceArgs);
  }

  public configureAdapter() {
    this.queryArgumentAdapter = this.injector.get(OntimizeQueryArgumentsAdapter);
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
    this.appearanceService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
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
    this.currentConfiguration = { PREFERENCEENTITY: this.currentPreference.entity };
    this.cd.detectChanges();
  }


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
    this.currentPreference.selectedYDataType = SQLTypes.getSQLTypeKey(type);
  }

  captureValueXAxis(event: any) {
    this.currentPreference.selectedXAxis = event.value;
    let type = this.sqlTypes[this.currentPreference.selectedXAxis];
    this.currentPreference.selectedXAxisType = type != undefined ? type : SQLTypes.OTHER;
    this.currentPreference.selectedXDataType = SQLTypes.getSQLTypeKey(type);
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
          const adaptedQueryArguments = this.tableComp.queryArgumentAdapter.parseQueryParameters(queryArgs);
          this.querySubscription = this.queryArgumentAdapter.request('query', this.ontimizeService, adaptedQueryArguments)
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
          const queryArgs = this.getQueryArgumentsByAllData();
          const adaptedQueryArguments = this.tableComp.queryArgumentAdapter.parseQueryParameters(queryArgs);
          this.querySubscription = this.queryArgumentAdapter.request('query', this.ontimizeService, adaptedQueryArguments)
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

  getQueryArgumentsByAllData(): OQueryParams {
    return {
      filter: this.tableComp.getParentKeysValues(),
      columns: this.tableComp.searcheableColumns,
      entity: this.currentPreference.entity,
      sqlTypes: this.currentPreference.entity,
    };
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
    this.chart.updateOptions(chartParameters, this.currentPreference.selectedTypeChart, this.tableComp.getOColumn(this.currentPreference.selectedXAxis), this.tableComp.getOColumn(this.currentPreference.selectedYAxis[0]));
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
    if (Util.isDefined(this.currentConfiguration.PREFERENCEID)) {
      this.savePreferences({ preferencename: this.currentConfiguration.PREFERENCENAME, preferencedescription: this.currentConfiguration.PREFERENCEDESCRIPTION }, true);
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
      "preferencename": data.name, "preferencedescription": data.description,
      "preferenceentity": this.currentPreference.entity, "preferenceservice": this.currentPreference.service, "preferencetype": "CHART", "preferenceparameters": {
        "title": this.currentPreference.title,
        "subtitle": this.currentPreference.subtitle, "entity": this.currentPreference.entity, "service": this.currentPreference.service, "selectedXAxis": this.currentPreference.selectedXAxis,
        "selectedYAxis": this.currentPreference.selectedYAxis, "selectedXAxisType": this.currentPreference.selectedXAxisType, "selectedYAxisType": this.currentPreference.selectedYAxisType,
        "selectedTypeChart": this.currentPreference.selectedTypeChart, "selectedDataTypeChart": this.currentPreference.selectedDataTypeChart
      }
    }

    if (update) {
      this.preferencesService.savePreferences(this.currentConfiguration.PREFERENCEID, preference).subscribe(res => {
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
      .subscribe({
        next: (data: OPreference) => {
          if (Util.isDefined(data) && data) {
            this.applyConfiguration(data);
            this.appliedConfiguration = true;
          }
        },
        error: () => this.appliedConfiguration = false
      });
  }

  applyConfiguration(configuration: any) {
    this.currentConfiguration = configuration;
    if (this.appConfig.getConfiguration().serviceType === 'JSONAPI') {
      this.currentPreference = JSON.parse(atob(this.currentConfiguration.PREFERENCEPREFERENCES));
    } else {
      this.currentPreference = JSON.parse(this.currentConfiguration.PREFERENCEPREFERENCES);
    }
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
  get chartClass(): string {
    return this.isDarkMode ? 'dark-sidenav-content' : 'title-sidenav-content';
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
