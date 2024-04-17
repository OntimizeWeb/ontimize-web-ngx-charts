import { Component, ViewChild } from '@angular/core';
import { DataAdapterUtils, GaugeSpaceChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html'
})
export class GaugeSpaceComponent {

  @ViewChild('gaugeSpace', {static: false})
  protected gaugeSpace: OChartComponent;

  gaugeSpaceConf: GaugeSpaceChartConfiguration;
  gaugeSpaceConf2: GaugeSpaceChartConfiguration;

  constructor() {
    this.gaugeSpaceConf = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf.yAxis = ['value'];
  }

  ngAfterViewInit() {
    this.gaugeSpaceConf2 = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf2.title = '27.54%';
    this.gaugeSpaceConf2.arcsRadius = 0.25;
    this.gaugeSpaceConf2.yAxis = ['y'];
    this.gaugeSpaceConf2.color = 'cyan';


    let data = [{ 'x': 'value', 'y': 27.54 }];
    const adapter = DataAdapterUtils.createDataAdapter(this.gaugeSpaceConf2);
    let dataAdapt = adapter.adaptResult(data);

    this.gaugeSpace.setDataArray(dataAdapt);
    this.gaugeSpace.setChartConfiguration(this.gaugeSpaceConf2);
  }

  getBasicId() {
    return 'Gauge Space Chart (Basic Usage)';
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

  getCustomId() {
    return 'Gauge Space Chart (Custom Usage)';
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
<o-chart type="gaugeSpaceChart"  chart-height="350" entity="EDataGauge" [chart-parameters]="gaugeSpaceConf"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSpaceChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html'
})
export class GaugeSpaceComponent {

  gaugeSpaceConf: GaugeSpaceChartConfiguration;

  constructor() {
    this.gaugeSpaceConf = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf.yAxis = ['value'];
  }

}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeSpace type="gaugeSpaceChart"  chart-height="350" [chart-parameters]="gaugeSpaceConf2"></o-chart>

`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSpaceChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html'
})
export class GaugeSpaceComponent {

  @ViewChild('gaugeSpace')
  protected gaugeSpace: OChartComponent;

  gaugeSpaceConf2: GaugeSpaceChartConfiguration;

  constructor() { }

  ngAfterViewInit() {
    this.gaugeSpaceConf2 = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf2.title = "27.54%";
    this.gaugeSpaceConf2.arcsRadius = 0.25;
    this.gaugeSpaceConf2.yAxis = ['y'];
    this.gaugeSpaceConf2.color = 'cyan';

    let data = [{ 'x': 'value', 'y': 27.54 }];
    DataAdapterUtils.createDataAdapter(this.gaugeSpaceConf2);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);

    this.gaugeSpace.setDataArray(dataAdapt);
    this.gaugeSpace.setChartConfiguration(this.gaugeSpaceConf2);
  }
}
`;
