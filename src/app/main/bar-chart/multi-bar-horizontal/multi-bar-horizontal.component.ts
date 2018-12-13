import { Component, OnInit, ViewChild } from '@angular/core';

import { OChartComponent, ChartService, MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'multi-bar-horizontal',
  templateUrl: './multi-bar-horizontal.component.html'
})
export class MultiBarHorizontalComponent {

  @ViewChild('multiBarHor')
  protected multiBarHor: OChartComponent;

  chartParameters: MultiBarHorizontalChartConfiguration;

  constructor() {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.margin.left = 100;
    this.chartParameters.x1Axis.axisLabelDistance = 20;

  }

  getBasicUsageFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': ''
      }
    ];
  }
}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="multiBarHorizontal" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
  x-data-type="time"></o-chart>
`;
