import { Component, ViewChild } from '@angular/core';
import { MultiBarHorizontalChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

const BASIC_USAGE_HTML_DATA = `
<o-chart #multiBarHor type="multiBarHorizontalChart" chart-height="600" x-label="Time" y-label="Amount (€)" entity="EMovementsGrouped"
        x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time" [chart-parameters]="chartParameters"></o-chart>
`;

@Component({
  selector: 'multi-bar-horizontal',
  templateUrl: './multi-bar-horizontal.component.html'
})
export class MultiBarHorizontalComponent {

  @ViewChild('multiBarHor')
  protected multiBarHor: OChartComponent;

  chartParameters: MultiBarHorizontalChartConfiguration;
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
  data = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ];
  constructor() {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.margin.left = 100;
    this.chartParameters.x1Axis.axisLabelDistance = 20;
    this.chartParameters.legend.margin.top = 5;
    this.chartParameters.legend.margin.bottom = 5;

  }

  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': ''
      }
    }
  }
}
