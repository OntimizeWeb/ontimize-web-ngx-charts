import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService, LineChartConfiguration } from 'ontimize-web-ngx-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

declare var d3: any;

@Component({

  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  @ViewChild('lineChart')
  protected lineChart: OChartComponent;
  @ViewChild('lineChartBasic')
  protected lineChartBasic: OChartComponent;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'DATE_';

  chartParameters: LineChartConfiguration;

  protected data: Array<Object>;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
      this.chartParameters = new LineChartConfiguration();
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;

  }

  getBasicUsageId() {
    return 'Line Chart (Basic usage)';
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

  getBasicUsageConfId() {
    return 'Line Chart (Custom configuration)';
  }

  getBasicUsageConfFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_CONF_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': BASIC_USAGE_CONF_TYPESCRIPT_DATA
      }
    ]
  }

  getCustomDataId() {
    return 'Line Chart (Series)';
  }

  getCustomDataFiles() {
    return [
      {
        'type': 'html',
        'data': SERIES_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': SERIES_TYPESCRIPT_DATA
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="line" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
`;
const BASIC_USAGE_CONF_HTML_DATA = `
<o-chart #lineChartBasic type="line" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time" [chart-parameters]="chartParameters">
</o-chart>
`;
const BASIC_USAGE_CONF_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, ChartService, Margin, LineChartConfiguration } from 'ontimize-web-ngx-charts';
declare var d3: any;
@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  chartParameters: LineChartConfiguration;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
      this.chartParameters = new LineChartConfiguration();
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;

  }
}
`;

const SERIES_HTML_DATA = `
<o-chart #lineChart type="line" x-label="Time" y-label="Amount (€)" flex="75"
    entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
    x-data-type="time"></o-chart>
`;

const SERIES_TYPESCRIPT_DATA = `
import { Component, OnInit } from '@angular/core';
import { OChartComponent, ChartService } from 'ontimize-web-ngx-charts';
declare var d3: any;
@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @ViewChild('lineChart')
  protected lineChart: OChartComponent;
  constructor() {
  }
  ngOnInit() {
    // nothing to do
  }
  ngAfterViewInit() {

  }
}`;