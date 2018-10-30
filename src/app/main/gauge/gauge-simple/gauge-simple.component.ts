import { Component, OnInit, ViewChild } from '@angular/core';
import { OChartComponent, GaugeSimpleChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-simple',
  templateUrl: './gauge-simple.component.html',
  styleUrls: ['./gauge-simple.component.scss']
})
export class GaugeSimpleComponent implements OnInit {

  @ViewChild('gaugeSimple')
  protected gaugeSimple: OChartComponent;

  gaugeSimpleConf: GaugeSimpleChartConfiguration;

  constructor() {
    this.gaugeSimpleConf = new GaugeSimpleChartConfiguration();
    this.gaugeSimpleConf.max = 200;
    this.gaugeSimpleConf.showMinMaxLabels = true;
    this.gaugeSimpleConf.color = ['#31D03D', '#D7DA15', '#DA3315'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.gaugeSimple.setDataArray([48.93]);
  }

  getBasicId() {
    return 'Gauge Simple Chart (Basic Usage)';
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
      },
    ]
  }

  getCustomId() {
    return 'Gauge Simple Chart (Custom Usage)';
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
<o-chart type="gaugeSimpleChart" flex="75" chart-height="350" entity="EDataGauge" y-axis="value"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { OChartComponent, GaugeSimpleChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-simple',
  templateUrl: './gauge-simple.component.html',
  styleUrls: ['./gauge-simple.component.scss']
})
export class GaugeSimpleComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
}
`;

const CUSTOM_HTML_DATA = `
<o-chart #gaugeSimple type="gaugeSimpleChart" flex="75" chart-height="350" [chart-parameters]="gaugeSimpleConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { OChartComponent, GaugeSimpleChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-gauge-simple',
  templateUrl: './gauge-simple.component.html',
  styleUrls: ['./gauge-simple.component.scss']
})
export class GaugeSimpleComponent implements OnInit {

  @ViewChild('gaugeSimple')
  protected gaugeSimple: OChartComponent;

  gaugeSimpleConf: GaugeSimpleChartConfiguration;

  constructor() {
    this.gaugeSimpleConf = new GaugeSimpleChartConfiguration();
    this.gaugeSimpleConf.max = 200;
    this.gaugeSimpleConf.showMinMaxLabels = true;
    this.gaugeSimpleConf.color = ['#31D03D', '#D7DA15', '#DA3315'];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.gaugeSimple.setDataArray([48.93]);
  }
}
`;