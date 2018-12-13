import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, LineChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({

  selector: 'line',
  templateUrl: './line.component.html'
})
export class LineComponent {

  @ViewChild('lineChart')
  protected lineChart: OChartComponent;

  @ViewChild('lineChartBasic')
  protected lineChartBasic: OChartComponent;

  protected yAxis = 'MOVEMENT';
  protected xAxis = 'DATE_';

  chartParameters: LineChartConfiguration;
  chartParametersSerie: LineChartConfiguration;

  protected data: Array<Object>;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef,
    protected translateService: OTranslateService) {
    this.chartParameters = new LineChartConfiguration();
    this.chartParameters.isArea = [true];
    this.chartParameters.interactive = false;
    this.chartParameters.useInteractiveGuideline = false;

    this.chartParametersSerie = new LineChartConfiguration();
    this.chartParametersSerie.legend.vers = 'furious';

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
    ];
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
    ];
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
import { Component, ViewChild, ElementRef, Injector } from '@angular/core';
import { OChartComponent, LineChartConfiguration } from 'ontimize-web-ngx-charts';

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
    protected translateService: OTranslateService) {
      this.chartParameters = new LineChartConfiguration();
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;
  }
}
`;

const SERIES_HTML_DATA = `
<o-chart #lineChart type="line" x-label="Time" y-label="Amount (€)"
    entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
    x-data-type="time" [chart-parameters]="chartParametersSerie"></o-chart>
`;

const SERIES_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @ViewChild('lineChart')
  protected lineChart: OChartComponent;

  chartParametersSerie: LineChartConfiguration;

  constructor() {
    this.chartParametersSerie = new LineChartConfiguration();
    this.chartParametersSerie.legend.vers = 'furious';
  }
}`;
