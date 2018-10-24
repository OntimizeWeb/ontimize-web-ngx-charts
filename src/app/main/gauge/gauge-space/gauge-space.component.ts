import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';
@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html',
  styleUrls: ['./gauge-space.component.scss']
})
export class GaugeSpaceComponent implements OnInit {

  @ViewChild('gaugeSpace')
  protected gaugeSpace: OChartComponent;

  protected gaugeSpaceConf: GaugeSpaceChartConfiguration;
  protected gaugeSpaceConf2: GaugeSpaceChartConfiguration;


  constructor() {
    this.gaugeSpaceConf = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf.yAxis = ['value'];
  }

  ngOnInit() {
  }

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

  getBasicId() {
    return 'Gauge Space Chart (Basic Usage)';
  }

  getBasicFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_HTML_DATA
      },
      {
        'type': 'scss',
        'data': '',
      },
      {
        'type': 'typescript',
        'data': BASIC_TYPESCRIPT_DATA
      }
    ];
  }

  getCustomId() {
    return 'Gauge Space Chart (Custom Usage)';
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
<o-chart type="gaugeSpaceChart" flex="75" chart-height="350" entity="EDataGauge" [chart-parameters]="gaugeSpaceConf"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';
@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html',
  styleUrls: ['./gauge-space.component.scss']
})
export class GaugeSpaceComponent implements OnInit {

  protected gaugeSpaceConf: GaugeSpaceChartConfiguration;

  constructor() {
    this.gaugeSpaceConf = new GaugeSpaceChartConfiguration();
    this.gaugeSpaceConf.yAxis = ['value'];
  }

  ngOnInit() {
  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeSpace type="gaugeSpaceChart" flex="75" chart-height="350" [chart-parameters]="gaugeSpaceConf2"></o-chart>

`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, GaugeSlimChartConfiguration, GaugeSpaceChartConfiguration,
  RadialPercentChartConfiguration, GaugeDashboardChartConfiguration
} from 'ontimize-web-ngx-charts';
@Component({
  selector: 'app-gauge-space',
  templateUrl: './gauge-space.component.html',
  styleUrls: ['./gauge-space.component.scss']
})
export class GaugeSpaceComponent implements OnInit {

  @ViewChild('gaugeSpace')
  protected gaugeSpace: OChartComponent;

  protected gaugeSpaceConf2: GaugeSpaceChartConfiguration;

  constructor() {

  }

  ngOnInit() {
  }

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