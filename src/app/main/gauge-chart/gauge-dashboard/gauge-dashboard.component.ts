import { Component, ViewChild } from '@angular/core';
import { DataAdapterUtils, GaugeDashboardChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html'
})
export class GaugeDashboardComponent {

  @ViewChild('gaugeDashboard', {static: false})
  protected gaugeDashboard: OChartComponent;

  gaugeDashboardConf: GaugeDashboardChartConfiguration;
  gaugeDashboardConf2: GaugeDashboardChartConfiguration;

  constructor() {
    this.gaugeDashboardConf2 = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf2.yAxis = ['value'];
  }

  ngAfterViewInit() {

    this.gaugeDashboardConf = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf.title = '77.34%';
    this.gaugeDashboardConf.yAxis = ['y'];
    this.gaugeDashboardConf.color = ['#17A589', 'white'];

    let data = [{ 'x': 'value', 'y': 77.34 }];

    DataAdapterUtils.createDataAdapter(this.gaugeDashboardConf);

    this.gaugeDashboard.setChartConfiguration(this.gaugeDashboardConf);
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
<o-chart type="gaugeDashboardChart" chart-height="350" entity="EDataGauge"
 [chart-parameters]="gaugeDashboardConf2"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html'
})
export class GaugeDashboardComponent {

  gaugeDashboardConf2: GaugeDashboardChartConfiguration;

  constructor() {
    this.gaugeDashboardConf2 = new GaugeDashboardChartConfiguration();
    this.gaugeDashboardConf2.yAxis = ['value'];
  }

}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeDashboard type="gaugeDashboardChart" chart-height="350"
[chart-parameters]="gaugeDashboardConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-dashboard',
  templateUrl: './gauge-dashboard.component.html'
})
export class GaugeDashboardComponent  {

  @ViewChild('gaugeDashboard')
  protected gaugeDashboard: OChartComponent;

  gaugeDashboardConf: GaugeDashboardChartConfiguration;

  constructor() { }

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
