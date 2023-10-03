import { Component, OnInit, ViewChild } from '@angular/core';
import { DataAdapterUtils, OChartComponent, RadarChartConfiguration } from 'ontimize-web-ngx-charts';

const BASIC_HTML_DATA = `
<o-chart type="radarChart" chart-height="400" entity="EDimensionData" [chart-parameters]="chartConf2"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';

import { OChartComponent, RadarChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html'
})
export class RadarComponent {

  chartConf2: RadarChartConfiguration;

  constructor() {
    this.chartConf2 = new RadarChartConfiguration();
    this.chartConf2.key = 'name';
    this.chartConf2.dimensions = [
      "economy (mpg)",
      "cylinders",
      "0-60 mph (s)"
    ];
    this.chartConf2.max = 25;
    this.chartConf2.stepSize = 2;

  }

}
`;

const CUSTOM_HTML_DATA = `
<o-chart #radar type="radarChart" chart-height="400" [chart-parameters]="chartConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, RadarChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html'
})
export class RadarComponent  {

  @ViewChild('radar', {static: false})
  protected radar: OChartComponent;

  chartConf: RadarChartConfiguration;

  constructor() {
    this.chartConf = new RadarChartConfiguration();
    this.chartConf.key = 'Name';
    this.chartConf.color = ['green', 'blue', 'red'];
    this.chartConf.dimensions = [
      'Email',
      'Social Networks',
      'Internet Banking',
      'News Sportsites',
      'Search Engine',
      'View Shopping sites',
      'Paying Online',
      'Buy Online',
      'Stream Music'
    ];
  }


  ngAfterViewInit() {
    let data = [
      {
        "Name": "Smartphone",
        "Email": 0.59,
        "Social Networks": 0.56,
        "Internet Banking": 0.42,
        "News Sportsites": 0.34,
        "Search Engine": 0.48,
        "View Shopping sites": 0.14,
        "Paying Online": 0.11,
        "Buy Online": 0.05,
        "Stream Music": 0.07
      },
      {
        "Name": "Tablet",
        "Email": 0.48,
        "Social Networks": 0.41,
        "Internet Banking": 0.27,
        "News Sportsites": 0.28,
        "Search Engine": 0.46,
        "View Shopping sites": 0.29,
        "Paying Online": 0.11,
        "Stream Music": 0.05
      },
      {
        "Name": "Laptop",
        "Email": 0.58,
        "Social Networks": 0.41,
        "Internet Banking": 0.47,
        "News Sportsites": 0.1,
        "Search Engine": 0.46,
        "View Shopping sites": 0.39,
        "Paying Online": 0.31,
        "Buy Online": 0.34,
        "Stream Music": 0.05
      }
    ];
    DataAdapterUtils.createDataAdapter(this.chartConf);
    this.radar.setDataArray(DataAdapterUtils.adapter.adaptResult(data));
  }
}
`;


@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html'
})
export class RadarComponent implements OnInit {

  @ViewChild('radar')
  protected radar: OChartComponent;

  chartConf: RadarChartConfiguration;
  chartConf2: RadarChartConfiguration;

  constructor() {
    this.chartConf = new RadarChartConfiguration();
    this.chartConf.key = 'Name';
    this.chartConf.dimensions = [
      'Email',
      'Social Networks',
      'Internet Banking',
      'News Sportsites',
      'Search Engine',
      'View Shopping sites',
      'Paying Online',
      'Buy Online',
      'Stream Music'
    ];

    this.chartConf2 = new RadarChartConfiguration();
    this.chartConf2.key = 'name';
    this.chartConf2.dimensions = [
      'economy (mpg)',
      'cylinders',
      '0-60 mph (s)'
    ];
    this.chartConf2.max = 25;
    this.chartConf2.legend.margin.top = 5;
    this.chartConf2.height = 300;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let data = [
      {
        'Name': 'Smartphone',
        'Email': 0.59,
        'Social Networks': 0.56,
        'Internet Banking': 0.42,
        'News Sportsites': 0.34,
        'Search Engine': 0.48,
        'View Shopping sites': 0.14,
        'Paying Online': 0.11,
        'Buy Online': 0.05,
        'Stream Music': 0.07
      },
      {
        'Name': 'Tablet',
        'Email': 0.48,
        'Social Networks': 0.41,
        'Internet Banking': 0.27,
        'News Sportsites': 0.28,
        'Search Engine': 0.46,
        'View Shopping sites': 0.29,
        'Paying Online': 0.11,
        'Buy Online': 0.15,
        'Stream Music': 0.05
      },
      {
        'Name': 'Laptop',
        'Email': 0.58,
        'Social Networks': 0.41,
        'Internet Banking': 0.47,
        'News Sportsites': 0.1,
        'Search Engine': 0.46,
        'View Shopping sites': 0.39,
        'Paying Online': 0.31,
        'Buy Online': 0.34,
        'Stream Music': 0.05
      }
    ];

  }

  getBasicId() {
    return 'Radar Chart (Basic Usage)';
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
    };
  }

  getCustomFiles() {
    return {
      'html': {
        'data': CUSTOM_HTML_DATA
      }, 'scss': {
        'data': ''
      },
      'typescript': {
        'data': CUSTOM_TYPESCRIPT_DATA
      }
    }
  }
}
