import { Component, ViewChild } from '@angular/core';
import { OChartComponent, ParallelCoordinatesChartConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-parallel-coordinates',
  templateUrl: './parallel-coordinates.component.html'
})
export class ParallelCoordinatesComponent {

  @ViewChild('chart')
  protected chart: OChartComponent;

  chartConf: ParallelCoordinatesChartConfiguration;
  chartConf2: ParallelCoordinatesChartConfiguration;

  constructor() {
    this.chartConf = new ParallelCoordinatesChartConfiguration();

    this.chartConf.dimensionData = [
      { key: 'Email' },
      { key: 'Social Networks' },
      { key: 'Internet Banking' },
      { key: 'News Sportsites' },
      { key: 'Search Engine' },
      { key: 'View Shopping sites' },
      { key: 'Paying Online' },
      { key: 'Buy Online' },
      { key: 'Stream Music' }
    ]


    this.chartConf2 = new ParallelCoordinatesChartConfiguration();
    this.chartConf2.dimensionData = [
      { key: 'economy (mpg)' },
      { key: 'cylinders' },
      { key: 'displacement (cc)' },
      { key: 'power (hp)' },
      { key: 'weight (lb)' },
      { key: '0-60 mph (s)' },
      { key: 'year' }
    ];

  }



  ngAfterViewInit() {
    let data = [
      {
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
        'Email': 0.48,
        'Social Networks': 0.41,
        'Internet Banking': 0.27,
        'News Sportsites': 0.28,
        'Search Engine': 0.46,
        'View Shopping sites': 0.29,
        'Paying Online': 0.11,
        'Stream Music': 0.05
      },
      {
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
    DataAdapterUtils.createDataAdapter(this.chartConf);
    this.chart.setDataArray(DataAdapterUtils.adapter.adaptResult(data));
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
    ];
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
    ];
  }

}

const BASIC_HTML_DATA = `
<o-chart type="parallelCoordinatesChart" chart-height="350" entity="EDimensionData" [chart-parameters]="chartConf2"></o-chart>
`;

const BASIC_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { ParallelCoordinatesChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-parallel-coordinates',
  templateUrl: './parallel-coordinates.component.html'
})
export class ParallelCoordinatesComponent {

  chartConf2: ParallelCoordinatesChartConfiguration;

  constructor() {

    this.chartConf2 = new ParallelCoordinatesChartConfiguration();
    this.chartConf2.dimensionData = [
      { key: "economy (mpg)" },
      { key: "cylinders" },
      { key: "displacement (cc)" },
      { key: "power (hp)" },
      { key: "weight (lb)" },
      { key: "0-60 mph (s)" },
      { key: "year"}
    ]
   }


}
`;

const CUSTOM_HTML_DATA = `
<o-chart #chart type="parallelCoordinatesChart" chart-height="350" [chart-parameters]="chartConf"></o-chart>
`;

const CUSTOM_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, ParallelCoordinatesChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-parallel-coordinates',
  templateUrl: './parallel-coordinates.component.html'
})
export class ParallelCoordinatesComponent{

  @ViewChild('chart')
  protected chart: OChartComponent;

  chartConf: ParallelCoordinatesChartConfiguration;

  constructor() {
    this.chartConf = new ParallelCoordinatesChartConfiguration();

    this.chartConf.dimensionData = [
      { key: 'Email' },
      { key: 'Social Networks' },
      { key: 'Internet Banking' },
      { key: 'News Sportsites' },
      { key: 'Search Engine' },
      { key: 'View Shopping sites' },
      { key: 'Paying Online' },
      { key: 'Buy Online' },
      { key: 'Stream Music' }
    ]

   }


  ngAfterViewInit() {
    let data = [
      {
       "Email": 0.59,
       "Social Networks": 0.56,
       "Internet Banking": 0.42,
       "News Sportsites": 0.34,
       "Search Engine": 0.48,
       "View Shopping sites": 0.14,
       "Paying Online": 0.11 ,
       "Buy Online": 0.05,
       "Stream Music": 0.07
      },
     {
       "Email":0.48,
       "Social Networks":0.41,
       "Internet Banking":0.27,
       "News Sportsites":0.28,
       "Search Engine":0.46,
       "View Shopping sites":0.29,
       "Paying Online":0.11,
       "Stream Music":0.05
      },
     {
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
   this.chart.setDataArray(DataAdapterUtils.adapter.adaptResult(data));
  }

}
`;