import { Component, OnInit, ViewChild, Injector } from '@angular/core';

import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';


@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html',
  styleUrls: ['./gauge-slim.component.scss']
})
export class GaugeSlimComponent implements OnInit {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  protected gaugeSlimConf: GaugeSlimChartConfiguration;
  protected gaugeSlimConf2: GaugeSlimChartConfiguration;

  constructor() {
    this.gaugeSlimConf = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf.yAxis = ['value'];


  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.gaugeSlimConf2 = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf2.title = '65.80%';
    this.gaugeSlimConf2.yAxis = ['y'];
    this.gaugeSlimConf2.color = ['green', 'red'];
    this.gaugeSlimConf2.arcsRadius = 0.15;
    let data = [{ 'x': 'value', 'y': 65.8 }];

    DataAdapterUtils.createDataAdapter(this.gaugeSlimConf2);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.gaugeSlim.setDataArray(dataAdapt);
    this.gaugeSlim.setChartConfiguration(this.gaugeSlimConf2);
  }

  getBasicId() {
    return 'Gauge Slim Chart (Basic Usage)';
  }

  getBasicFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_DATA_HTML
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': BASIC_DATA_TYPESCRIPT
      }
    ]
  }

  getCustomId() {
    return 'Gauge Slim Chart (Custom Usage)';
  }

  getCustomFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_HTML_DATA,
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

const BASIC_DATA_HTML = `
<o-chart #gaugeSlim type="gaugeSlimChart" flex="75" chart-height="350" entity="EDataGauge" [chart-parameters]="gaugeSlimConf"></o-chart>
`;

const BASIC_DATA_TYPESCRIPT = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';

import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';


@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html',
  styleUrls: ['./gauge-slim.component.scss']
})
export class GaugeSlimComponent implements OnInit {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  protected gaugeSlimConf: GaugeSlimChartConfiguration;
  constructor() {
    this.gaugeSlimConf = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf.yAxis = ['value'];
  }

  ngOnInit() {

  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeSlim type="gaugeSlimChart" flex="75" chart-height="350" [chart-parameters]="gaugeSlimConf2"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';

import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';


@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html',
  styleUrls: ['./gauge-slim.component.scss']
})
export class GaugeSlimComponent implements OnInit {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  protected gaugeSlimConf2: GaugeSlimChartConfiguration;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.gaugeSlimConf2 = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf2.title = '65.80%';
    this.gaugeSlimConf2.yAxis = ['y'];
    this.gaugeSlimConf2.color = ['green', 'red'];
    let data = [{ 'x': 'value', 'y': 65.8 }];

    DataAdapterUtils.createDataAdapter(this.gaugeSlimConf2);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.gaugeSlim.setDataArray(dataAdapt);
    this.gaugeSlim.setChartConfiguration(this.gaugeSlimConf2);
  }
}
`;