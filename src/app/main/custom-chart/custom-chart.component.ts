import { ChangeDetectorRef, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DialogService } from 'ontimize-web-ngx';
import { DataInputDialogComponent } from '../data-input-dialog/data-input-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ExampleComponent } from '../../shared/example/example.component';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.custom-chart]': 'true'
  }
})
export class CustomChartComponent {

  @ViewChild('configurationMenuButton') configurationMenuButton: MatMenuTrigger;
  @ViewChild('selectX') xAxisType: MatSelect;

  fullscreen = false;
  opened = true;
  showPlaceholder = true;
  fitContainer = true;
  defaultDataChanged = false;
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public showGridLines: boolean = false;
  public showLegend: boolean = true;
  defaultData = this.getData();
  currentPreference: any = {
    title: '',
    subtitle: '',
    selectedTypeChart: 'line',
    selectedPalette: 'vivid',
    selectedXAxis: '',
    selectedYAxis: '',
    selectedDataTypeChart: 'ordinal',
    width: undefined,
    height: undefined,
    x_axis: "X axis",
    selectedXAxisType: "DATE",
    y_axis: "Y axis",
    selectedYAxisType: "string",
    data: this.defaultData,
    legendTitle: 'Legend',
    legendPosition: 'below'
  };

  htmlData = `
  <o-chart type="` + this.currentPreference.selectedTypeChart + `" service="yourService" entity="yourEntity"
      color="` + this.currentPreference.selectedPalette + `"` + (this.showXAxis ? ` x-label="` + this.currentPreference.x_axis + `"` : ``) + (this.showYAxis ? ` y-label="` + this.currentPreference.y_axis + `"` : ``) + `
      x-data-type="` + this.currentPreference.selectedXAxisType + `" y-data-type="` + this.currentPreference.selectedYAxisType + `"
      ` + (this.currentPreference.width != undefined ? `chart-width="` + this.currentPreference.width + `" ` : ``) + (this.currentPreference.height != undefined ? `chart-height="` + this.currentPreference.height + `" ` : ``) + `show-legend="` + this.showLegend + `"
      show-x-axis-label="` + this.showXAxis + `" show-y-axis-label="` + this.showYAxis + `" legend-position="` + this.currentPreference.legendPosition + `"
      ` + (this.showLegend == true ? (this.currentPreference.legendTitle != "" ? `legend-title="` + this.currentPreference.legendTitle + `" ` : ``) : ``) + `show-grid-lines="` + this.showGridLines + `"></o-chart>
  `;

  typescriptData = `
    import { Component, ViewEncapsulation } from '@angular/core';

    @Component({
      selector: 'custom-chart',
      templateUrl: './custom-chart.component.html',
      styleUrls: ['./custom-chart.component.scss'],
      encapsulation: ViewEncapsulation.None,
      host: {
        '[class.custom-chart]': 'true'
      }
    })
    export class CustomChartComponent {

      constructor() { }

    }
  `;

  types = [
    { key: 'line', value: 'Line Chart' },
    { key: 'discreteBar', value: 'Dicrete Bar Chart' },
    { key: 'multiBar', value: 'Multi Bar Chart' },
    { key: 'stackedAreaChart', value: 'Area Chart' },
    { key: 'pie', value: 'Pie Chart' },
    { key: 'donutChart', value: 'Donut Chart' }
  ];

  comboPalette = [
    { key: 'vivid', value: 'vivid' },
    { key: 'natural', value: 'natural' },
    { key: 'cool', value: 'cool' },
    { key: 'fire', value: 'fire' },
    { key: 'solar', value: 'solar' },
    { key: 'air', value: 'air' },
    { key: 'aqua', value: 'aqua' },
    { key: 'flame', value: 'flame' },
    { key: 'ocean', value: 'ocean' },
    { key: 'forest', value: 'forest' },
    { key: 'horizon', value: 'horizon' },
    { key: 'neons', value: 'neons' },
    { key: 'picnic', value: 'picnic' },
    { key: 'night', value: 'night' },
    { key: 'nightLights', value: 'nightLights' }
  ];

  positions = [
    { key: 'right', value: 'Right' },
    { key: 'below', value: 'Below' },
  ];

  axisTypes = [
    { key: 'string', value: 'String' },
    { key: 'intGrouped', value: 'Grouped Integer' },
    { key: 'floatGrouped', value: 'Grouped Float' },
    { key: 'int', value: 'Integer' },
    { key: 'float', value: 'Float' },
    { key: 'currency', value: 'Currency' },
    { key: 'time', value: 'Time' },
    { key: 'TIMESTAMP', value: 'TimeStamp' },
    { key: 'DATE', value: 'Date' },
    { key: 'timeDay', value: 'Time Day' },
    { key: 'timeDetail', value: 'Time Detail' },
    { key: 'percentage', value: 'Percentage' }
  ];
  showChart = true;
  JsonData = this.getJsonData();
  constructor(protected cdr: ChangeDetectorRef, public dialog: MatDialog, protected dialogService: DialogService) { }
  getFiles() {
    return {
      'html': {
        'data': this.htmlData
      },
      'typescript': {
        'data': this.typescriptData
      },
      'json': {
        'label': 'JSON',
        'data': this.JsonData,
        'type': 'json'
      }
    }
  }
  getJsonData() {
    return JSON.stringify(this.currentPreference.data, null, 2);
  }
  selectData(event) {
    this.currentPreference.data = JSON.parse(event);
  }
  checkData(data: string) {
    try {
      JSON.parse(data);
      return true;
    } catch {
      this.dialogService.error("Bad JSON syntax", "Please check your JSON syntax to load the chart correctly.");
      return false;
    }
  }
  changeData(event) {
    this.currentPreference.data = this.getData();
    this.JsonData = this.getJsonData();
    if (!this.defaultDataChanged && (this.currentPreference.selectedTypeChart == 'line' || this.currentPreference.selectedTypeChart == 'stackedAreaChart')) {
      this.xAxisType.value = 'DATE';
    } else {
      this.xAxisType.value = 'string';
    }
    this.updateChart();
  }

  toggleDimensions(checked: boolean) {
    this.fitContainer = checked === true;
    if (this.fitContainer) {
      this.currentPreference.width = undefined;
      this.currentPreference.height = undefined;
    }
    this.updateChart();
  }
  updateChart() {
    this.showChart = false;
    this.cdr.detectChanges();
    this.showChart = true;
    this.htmlData = `
  <o-chart type="` + this.currentPreference.selectedTypeChart + `" service="yourService" entity="yourEntity"
      color="` + this.currentPreference.selectedPalette + `"` + (this.showXAxis ? ` x-label="` + this.currentPreference.x_axis + `"` : ``) + (this.showYAxis ? ` y-label="` + this.currentPreference.y_axis + `"` : ``) + `
      x-data-type="` + this.currentPreference.selectedXAxisType + `" y-data-type="` + this.currentPreference.selectedYAxisType + `"
      ` + (this.currentPreference.width != undefined ? `chart-width="` + this.currentPreference.width + `" ` : ``) + (this.currentPreference.height != undefined ? `chart-height="` + this.currentPreference.height + `" ` : ``) + `show-legend="` + this.showLegend + `"
      show-x-axis-label="` + this.showXAxis + `" show-y-axis-label="` + this.showYAxis + `" legend-position="` + this.currentPreference.legendPosition + `"
      ` + (this.showLegend == true ? (this.currentPreference.legendTitle != "" ? `legend-title="` + this.currentPreference.legendTitle + `" ` : ``) : ``) + `show-grid-lines="` + this.showGridLines + `"></o-chart>
  `;
    this.JsonData = this.getJsonData();
  }
  selectedXAxis(value) {
    this.currentPreference.selectedXAxisType = value;
    this.updateChart();
  }
  selectedYAxis(value) {
    this.currentPreference.selectedYAxisType = value;
    this.updateChart();
  }
  enabledPreview() {
    return this.currentPreference.selectedXAxis && this.currentPreference.selectedYAxis;
  }
  openDataInputDialog(): void {
    const dialogRef = this.dialog.open(DataInputDialogComponent, {
      panelClass: ['o-dialog-class', 'o-table-dialog'],
      data: { data: this.JsonData },
      width: '60%',
      height: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && this.checkData(result)) {
        this.defaultDataChanged = true;
        this.JsonData = result;
        this.selectData(result);
        this.updateChart();
      }
    });
  }
  getData() {
    if (this.currentPreference?.selectedTypeChart == "pie" || this.currentPreference?.selectedTypeChart == "donutChart" || this.currentPreference?.selectedTypeChart == "discreteBar") {
      return [
        {
          "name": "Italy",
          "value": 35800,
          "extra": {
            "code": "it"
          }
        },
        {
          "name": "Saint Pierre and Miquelon",
          "value": 56901
        },
        {
          "name": "Kiribati",
          "value": 13951
        },
        {
          "name": "Vanuatu",
          "value": 54082
        }
      ]
    } else {
      return [
        {
          "name": "Benin",
          "series": [
            {
              "value": 4153,
              "name": "2016-09-17T00:04:14.414Z"
            },
            {
              "value": 2005,
              "name": "2016-09-23T10:50:58.369Z"
            },
            {
              "value": 2535,
              "name": "2016-09-14T14:25:13.668Z"
            },
            {
              "value": 4591,
              "name": "2016-09-23T17:02:37.189Z"
            },
            {
              "value": 6454,
              "name": "2016-09-14T00:31:56.223Z"
            },
            {
              "name": "2016-09-15T22:05:16.391Z",
              "value": 6124
            },
            {
              "name": "2016-09-19T01:22:16.790Z",
              "value": 3283
            },
            {
              "name": "2016-09-15T14:08:42.239Z",
              "value": 6050
            },
            {
              "name": "2016-09-22T15:26:36.985Z",
              "value": 5407
            },
            {
              "name": "2016-09-16T16:51:50.668Z",
              "value": 3776
            },
            {
              "name": "2016-09-23T11:44:18.392Z",
              "value": 2432
            },
            {
              "name": "2016-09-17T03:51:46.616Z",
              "value": 6140
            },
            {
              "name": "2016-09-14T23:31:02.225Z",
              "value": 6818
            },
            {
              "name": "2016-09-21T08:46:21.794Z",
              "value": 4125
            },
            {
              "name": "2016-09-13T08:11:32.936Z",
              "value": 3417
            }
          ]
        },
        {
          "name": "Congo",
          "series": [
            {
              "value": 3322,
              "name": "2016-09-17T00:04:14.414Z"
            },
            {
              "value": 3517,
              "name": "2016-09-23T10:50:58.369Z"
            },
            {
              "value": 3650,
              "name": "2016-09-14T14:25:13.668Z"
            },
            {
              "value": 5881,
              "name": "2016-09-23T17:02:37.189Z"
            },
            {
              "value": 3769,
              "name": "2016-09-14T00:31:56.223Z"
            },
            {
              "name": "2016-09-15T22:05:16.391Z",
              "value": 5524
            },
            {
              "name": "2016-09-19T01:22:16.790Z",
              "value": 2451
            },
            {
              "name": "2016-09-15T14:08:42.239Z",
              "value": 6436
            },
            {
              "name": "2016-09-22T15:26:36.985Z",
              "value": 6101
            },
            {
              "name": "2016-09-16T16:51:50.668Z",
              "value": 2992
            },
            {
              "name": "2016-09-23T11:44:18.392Z",
              "value": 3829
            },
            {
              "name": "2016-09-17T03:51:46.616Z",
              "value": 2687
            },
            {
              "name": "2016-09-14T23:31:02.225Z",
              "value": 2227
            },
            {
              "name": "2016-09-21T08:46:21.794Z",
              "value": 6383
            },
            {
              "name": "2016-09-13T08:11:32.936Z",
              "value": 6717
            }
          ]
        },
        {
          "name": "Venezuela",
          "series": [
            {
              "value": 5025,
              "name": "2016-09-17T00:04:14.414Z"
            },
            {
              "value": 5508,
              "name": "2016-09-23T10:50:58.369Z"
            },
            {
              "value": 4578,
              "name": "2016-09-14T14:25:13.668Z"
            },
            {
              "value": 4950,
              "name": "2016-09-23T17:02:37.189Z"
            },
            {
              "value": 2820,
              "name": "2016-09-14T00:31:56.223Z"
            },
            {
              "name": "2016-09-15T22:05:16.391Z",
              "value": 4868
            },
            {
              "name": "2016-09-19T01:22:16.790Z",
              "value": 4132
            },
            {
              "name": "2016-09-15T14:08:42.239Z",
              "value": 4360
            },
            {
              "name": "2016-09-22T15:26:36.985Z",
              "value": 3173
            },
            {
              "name": "2016-09-16T16:51:50.668Z",
              "value": 2036
            },
            {
              "name": "2016-09-23T11:44:18.392Z",
              "value": 2495
            },
            {
              "name": "2016-09-17T03:51:46.616Z",
              "value": 2242
            },
            {
              "name": "2016-09-14T23:31:02.225Z",
              "value": 2147
            },
            {
              "name": "2016-09-21T08:46:21.794Z",
              "value": 5886
            },
            {
              "name": "2016-09-13T08:11:32.936Z",
              "value": 3329
            }
          ]
        },
        {
          "name": "Greece",
          "series": [
            {
              "value": 3081,
              "name": "2016-09-17T00:04:14.414Z"
            },
            {
              "value": 2434,
              "name": "2016-09-23T10:50:58.369Z"
            },
            {
              "value": 4871,
              "name": "2016-09-14T14:25:13.668Z"
            },
            {
              "value": 6638,
              "name": "2016-09-23T17:02:37.189Z"
            },
            {
              "value": 2847,
              "name": "2016-09-14T00:31:56.223Z"
            },
            {
              "name": "2016-09-15T22:05:16.391Z",
              "value": 3137
            },
            {
              "name": "2016-09-19T01:22:16.790Z",
              "value": 2521
            },
            {
              "name": "2016-09-15T14:08:42.239Z",
              "value": 6247
            },
            {
              "name": "2016-09-22T15:26:36.985Z",
              "value": 6179
            },
            {
              "name": "2016-09-16T16:51:50.668Z",
              "value": 2918
            },
            {
              "name": "2016-09-23T11:44:18.392Z",
              "value": 5851
            },
            {
              "name": "2016-09-17T03:51:46.616Z",
              "value": 2352
            },
            {
              "name": "2016-09-14T23:31:02.225Z",
              "value": 4789
            },
            {
              "name": "2016-09-21T08:46:21.794Z",
              "value": 5000
            },
            {
              "name": "2016-09-13T08:11:32.936Z",
              "value": 2452
            }
          ]
        },
        {
          "name": "Mauritania",
          "series": [
            {
              "value": 6765,
              "name": "2016-09-17T00:04:14.414Z"
            },
            {
              "value": 2139,
              "name": "2016-09-23T10:50:58.369Z"
            },
            {
              "value": 6441,
              "name": "2016-09-14T14:25:13.668Z"
            },
            {
              "value": 4195,
              "name": "2016-09-23T17:02:37.189Z"
            },
            {
              "value": 6223,
              "name": "2016-09-14T00:31:56.223Z"
            },
            {
              "name": "2016-09-15T22:05:16.391Z",
              "value": 6842
            },
            {
              "name": "2016-09-19T01:22:16.790Z",
              "value": 3710
            },
            {
              "name": "2016-09-15T14:08:42.239Z",
              "value": 5798
            },
            {
              "name": "2016-09-22T15:26:36.985Z",
              "value": 2343
            },
            {
              "name": "2016-09-16T16:51:50.668Z",
              "value": 4456
            },
            {
              "name": "2016-09-23T11:44:18.392Z",
              "value": 3381
            },
            {
              "name": "2016-09-17T03:51:46.616Z",
              "value": 6636
            },
            {
              "name": "2016-09-14T23:31:02.225Z",
              "value": 2139
            },
            {
              "name": "2016-09-21T08:46:21.794Z",
              "value": 2644
            },
            {
              "name": "2016-09-13T08:11:32.936Z",
              "value": 6830
            }
          ]
        }
      ]
    }
  }

}
