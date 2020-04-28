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

  @ViewChild('multiBarHor', {static: false})
  protected multiBarHor: OChartComponent;

  chartParameters: MultiBarHorizontalChartConfiguration;

  constructor() {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.margin.left = 100;
    this.chartParameters.x1Axis.axisLabelDistance = 20;

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
