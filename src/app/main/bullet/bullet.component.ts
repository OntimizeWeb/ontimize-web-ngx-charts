import { Component, OnInit, ViewChild } from '@angular/core';

import { OChartComponent, BulletChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @ViewChild('bulletChart')
  protected bulletChart: OChartComponent;

  protected chartParameters: BulletChartConfiguration;

  constructor() {
    this.chartParameters = new BulletChartConfiguration();
    this.chartParameters.ticks = 10;
    this.chartParameters.title = 'Custom';
    this.chartParameters.subtitle = 'Value';
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
    return [
      {
        'type': 'html',
        'data': BASIC_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': BASIC_TYPESCRIPT_DATA
      }
    ]
  }

  getCustomId() {
    return 'Bullet Chart (Custom Usage)'
  }

  getCustomFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': CUSTOM_TYPESCRIPT_DATA
      }
    ]
  }

}

const BASIC_HTML_DATA = `
<o-chart type="bulletChart" flex="75" chart-height="200" entity="EBullet"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';

import { OChartComponent, BulletChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @ViewChild('bulletChart')
  protected bulletChart: OChartComponent;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
`;

const CUSTOM_HTML_DATA = `
<o-chart #bulletChart type="bulletChart" flex="75" chart-height="200" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';

import { OChartComponent, BulletChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @ViewChild('bulletChart')
  protected bulletChart: OChartComponent;

  protected chartParameters: BulletChartConfiguration;

  constructor() {
    this.chartParameters = new BulletChartConfiguration();
    this.chartParameters.ticks = 10;
    this.chartParameters.title = 'Custom';
    this.chartParameters.subtitle = 'Value';
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
}
`;