import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService, MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

@Component({
  selector: 'multi-bar-horizontal',
  templateUrl: './multi-bar-horizontal.component.html',
  styleUrls: ['./multi-bar-horizontal.component.scss']
})
export class MultiBarHorizontalComponent {

  @ViewChild('multiBarHor')
  protected multiBarHor: OChartComponent;

  chartParameters: MultiBarHorizontalChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
    this.chartParameters = new MultiBarHorizontalChartConfiguration();
    this.chartParameters.margin.left = 100;
    this.chartParameters.x1Axis.axisLabelDistance = 20;

  }
  getBasicUsageId() {
    return 'Multi Bar Chart Horizontal (Basic usage)';
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
    ]
  }

}


const BASIC_USAGE_HTML_DATA = `
<o-chart type="multiBarHorizontal" x-label="Time" y-label="Amount (€)"
  entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
  x-data-type="time"></o-chart>
`;
