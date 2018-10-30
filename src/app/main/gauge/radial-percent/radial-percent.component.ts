import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, RadialPercentChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-radial-percent',
  templateUrl: './radial-percent.component.html',
  styleUrls: ['./radial-percent.component.scss']
})
export class RadialPercentComponent implements OnInit {

  @ViewChild('radialPercent')
  protected radialPercent: OChartComponent;

  protected radialPercentConf: RadialPercentChartConfiguration;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.radialPercentConf = new RadialPercentChartConfiguration();
    this.radialPercentConf.title = "13.91%";
    this.radialPercentConf.yAxis = ['y'];
    this.radialPercentConf.color = ['#EB984E', '#1A5276'];

    let data = [{ 'x': 'value', 'y': 13.91 }];
    DataAdapterUtils.createDataAdapter(this.radialPercentConf);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);

    this.radialPercent.setDataArray(dataAdapt);
    this.radialPercent.setChartConfiguration(this.radialPercentConf);
  }

  getBasicId() {
    return 'Radial Percent Chart (Basic Usage)';
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
    return 'Radial Percent Chart (Custom Usage)';
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
<o-chart type="radialPercentChart" flex="75" chart-height="350" y-axis="value" entity="EDataGauge"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, RadialPercentChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-radial-percent',
  templateUrl: './radial-percent.component.html',
  styleUrls: ['./radial-percent.component.scss']
})
export class RadialPercentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #radialPercent type="radialPercentChart" flex="75" chart-height="350" [chart-parameters]="radialPercentConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import {
  OChartComponent, DataAdapterUtils, RadialPercentChartConfiguration
} from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-radial-percent',
  templateUrl: './radial-percent.component.html',
  styleUrls: ['./radial-percent.component.scss']
})
export class RadialPercentComponent implements OnInit {

  @ViewChild('radialPercent')
  protected radialPercent: OChartComponent;

  protected radialPercentConf: RadialPercentChartConfiguration;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.radialPercentConf = new RadialPercentChartConfiguration();
    this.radialPercentConf.title = "13.91%";
    this.radialPercentConf.yAxis = ['y'];
    this.radialPercentConf.color = ['#EB984E', '#1A5276'];

    let data = [{ 'x': 'value', 'y': 13.91 }];
    DataAdapterUtils.createDataAdapter(this.radialPercentConf);
    let dataAdapt = DataAdapterUtils.adapter.adaptResult(data);

    this.radialPercent.setDataArray(dataAdapt);
    this.radialPercent.setChartConfiguration(this.radialPercentConf);
  }
}
`;

