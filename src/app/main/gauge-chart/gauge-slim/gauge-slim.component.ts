import { Component, ViewChild } from '@angular/core';
import { DataAdapterUtils, GaugeSlimChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html'
})
export class GaugeSlimComponent {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  gaugeSlimConf: GaugeSlimChartConfiguration;
  gaugeSlimConf2: GaugeSlimChartConfiguration;

  constructor() {
    this.gaugeSlimConf = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf.yAxis = ['value'];
  }


  ngAfterViewInit() {
    this.gaugeSlimConf2 = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf2.title = '65.80%';
    this.gaugeSlimConf2.yAxis = ['y'];
    this.gaugeSlimConf2.color = ['green', 'red'];
    this.gaugeSlimConf2.arcsRadius = 0.15;
    let data = [{ 'x': 'value', 'y': 65.8 }];

    DataAdapterUtils.createDataAdapter(this.gaugeSlimConf2);

    this.gaugeSlim.setChartConfiguration(this.gaugeSlimConf2);
  }

  getBasicFiles() {
    return {
      'html': {
        'type': 'html',
        'data': BASIC_DATA_HTML
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': BASIC_DATA_TYPESCRIPT
      }
    }
  }

  getCustomFiles() {
    return {
      'html': {
        'data': CUSTOM_HTML_DATA,
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

const BASIC_DATA_HTML = `
<o-chart #gaugeSlim type="gaugeSlimChart" chart-height="350" entity="EDataGauge"
[chart-parameters]="gaugeSlimConf"></o-chart>
`;

const BASIC_DATA_TYPESCRIPT = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, GaugeSlimChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html'
})
export class GaugeSlimComponent  {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  gaugeSlimConf: GaugeSlimChartConfiguration;
  constructor() {
    this.gaugeSlimConf = new GaugeSlimChartConfiguration();
    this.gaugeSlimConf.yAxis = ['value'];
  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeSlim type="gaugeSlimChart" chart-height="350"
[chart-parameters]="gaugeSlimConf2"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-slim',
  templateUrl: './gauge-slim.component.html'
})
export class GaugeSlimComponent {

  @ViewChild('gaugeSlim')
  protected gaugeSlim: OChartComponent;

  gaugeSlimConf2: GaugeSlimChartConfiguration;

  constructor() { }

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
