import { Component, OnInit, ViewChild } from '@angular/core';
import { BulletChartConfiguration, DataAdapterUtils, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html'
})
export class BulletComponent implements OnInit {

  @ViewChild('bulletChart', {static: false})
  protected bulletChart: OChartComponent;

  chartParameters: BulletChartConfiguration;
  chartParameters2: BulletChartConfiguration;

  constructor() {
    this.chartParameters = new BulletChartConfiguration();
    this.chartParameters.ticks = 10;
    this.chartParameters.title = 'Custom';
    this.chartParameters.subtitle = 'Value';

    this.chartParameters2 = new BulletChartConfiguration();
    this.chartParameters2.markersAxis = 'marker';
    this.chartParameters2.rangesAxis = 'range';
    this.chartParameters2.measuresAxis = 'measure';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    let data = [];
    data.push({ 'range': 50 }, { 'range': 100 }, { 'range': 200 });
    data.push({ 'measure': 99 });
    data.push({ 'marker': 50 });
    DataAdapterUtils.createDataAdapter(this.chartParameters);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.bulletChart.setDataArray(dataAdapt);
  }

  getBasicId() {
    return 'Bullet Chart (Basic Usage)';
  }

  getBasicFiles() {
    return {
      'html': {
        'data': BASIC_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': BASIC_TYPESCRIPT_DATA
      }
    }

  }


  getCustomFiles() {
    return {
      'html': {
        'data': CUSTOM_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': CUSTOM_TYPESCRIPT_DATA
      }
    }
  }

}

const BASIC_HTML_DATA = `
<o-chart type="bulletChart" chart-height="200" entity="EBullet" [chart-parameters]='chartParameters2'></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html'
})
export class BulletComponent {

  constructor() { }

}
`;

const CUSTOM_HTML_DATA = `
<o-chart #bulletChart type="bulletChart" chart-height="200" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OChartComponent, BulletChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html'
})
export class BulletComponent  {

  @ViewChild('bulletChart')
  protected bulletChart: OChartComponent;

  chartParameters: BulletChartConfiguration;

  constructor() {
    this.chartParameters = new BulletChartConfiguration();
    this.chartParameters.ticks = 10;
    this.chartParameters.title = 'Custom';
    this.chartParameters.subtitle = 'Value';
   }

  ngAfterViewInit() {

    let data = [];
    data.push({ 'range': 50 }, { 'range': 100 }, { 'range': 200 });
    data.push({ 'measure': 99 });
    data.push({ 'marker': 50 });
    DataAdapterUtils.createDataAdapter(this.chartParameters);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.bulletChart.setDataArray(dataAdapt);
  }
}
`;
