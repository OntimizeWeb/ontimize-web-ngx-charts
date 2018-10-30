import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html',
  styleUrls: ['./gauge-dashboard.component.scss']
})
export class GaugeDashboardComponent implements OnInit {

  @ViewChild('gaugeDashboard')
  protected gaugeDashboard: OChartComponent;

  protected gaugeDashboardConf: GaugeDashboardChartConfiguration;
  protected gaugeDashboardConf2: GaugeDashboardChartConfiguration;

  constructor() {
    this.gaugeDashboardConf2 = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf2.yAxis = ['value'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.gaugeDashboardConf = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf.title = "77.34%";
    this.gaugeDashboardConf.yAxis = ['y'];
    this.gaugeDashboardConf.color = ['#17A589', 'white'];

    let data = [{ 'x': 'value', 'y': 77.34 }];

    DataAdapterUtils.createDataAdapter(this.gaugeDashboardConf);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.gaugeDashboard.setDataArray(dataAdapt);
    this.gaugeDashboard.setChartConfiguration(this.gaugeDashboardConf);
  }

  getBasicId() {
    return 'Gauge Dashboard Chart (Basic Usage)';
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
    return 'Gauge Dashboard Chart (Custom Usage)';
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
<o-chart type="gaugeDashboardChart" flex="75" chart-height="350" entity="EDataGauge" [chart-parameters]="gaugeDashboardConf2"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html',
  styleUrls: ['./gauge-dashboard.component.scss']
})
export class GaugeDashboardComponent implements OnInit {

  protected gaugeDashboardConf2: GaugeDashboardChartConfiguration;

  constructor() {
    this.gaugeDashboardConf2 = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf2.yAxis = ['value'];
  }

  ngOnInit() {
  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeDashboard type="gaugeDashboardChart" flex="75" chart-height="350" [chart-parameters]="gaugeDashboardConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html',
  styleUrls: ['./gauge-dashboard.component.scss']
})
export class GaugeDashboardComponent implements OnInit {

  @ViewChild('gaugeDashboard')
  protected gaugeDashboard: OChartComponent;

  protected gaugeDashboardConf: GaugeDashboardChartConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.gaugeDashboardConf = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf.title = "77.34%";
    this.gaugeDashboardConf.yAxis = ['y'];
    this.gaugeDashboardConf.colors = ['#17A589', 'white'];

    let data = [{ 'x': 'value', 'y': 77.34 }];

    DataAdapterUtils.createDataAdapter(this.gaugeDashboardConf);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);
    this.gaugeDashboard.setDataArray(dataAdapt);
    this.gaugeDashboard.setChartConfiguration(this.gaugeDashboardConf);
  }
}
`;