import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService, MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

import { ScatterChartConfiguration } from 'ontimize-web-ngx-charts/src/core';
@Component({
  selector: 'scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnInit {

  @ViewChild('scatter')
  protected scatter: OChartComponent;

  @ViewChild('scatter2')
  protected scatter2: OChartComponent;

  chartParameters: ScatterChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new ScatterChartConfiguration();

    this.chartParameters.size = [ 2, 1, 2];
    this.chartParameters.shape = [ 'circle', 'cross', 'diamond'];
    this.chartParameters.colors = [ 'red', 'black', '#7c0000'];
    this.chartParameters.showDistX = false;
    this.chartParameters.showDistY = false;
  }



  ngOnInit() {
  }

  getBasicUsageId() {
    return 'Scatter Chart (Basic Usage)';
  }

  getBasicUsageFiles()  {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      }
    ]
  }

  getCustomConfigurationId() {
    return 'Scatter Chart (Custom Configuration)';
  }

  getCustomConfigurationFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_CONFIGURATION_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': CUSTOM_CONFIGURATION_TYPESCRIPT_DATA
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="scatterChart" x-label="Time" y-label="Amount (€)" flex="75" entity="EMovementsGrouped"
x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time"
chart-height="600"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart type="scatterChart" x-label="Time" y-label="Amount (€)" flex="75" entity="EMovementsGrouped"
x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time" [chart-parameters]="chartParameters"
chart-height="600"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService, MultiBarHorizontalChartConfiguration } from 'ontimize-web-ngx-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

import { ScatterChartConfiguration } from 'ontimize-web-ngx-charts/src/core';
@Component({
  selector: 'scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent {

  chartParameters: ScatterChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new ScatterChartConfiguration();

    this.chartParameters.size = [ 2, 1, 2];
    this.chartParameters.shape = [ 'circle', 'cross', 'diamond'];
    this.chartParameters.colors = [ 'red', 'black', '#7c0000'];
    this.chartParameters.showDistX = false;
    this.chartParameters.showDistY = false;
  }
}
`;