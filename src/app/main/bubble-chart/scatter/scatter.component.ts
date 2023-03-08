import { Component } from '@angular/core';
import { ScatterChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'scatter',
  templateUrl: './scatter.component.html',
})
export class ScatterComponent {

  chartParameters1: ScatterChartConfiguration;
  chartParameters2: ScatterChartConfiguration;

  constructor() {
    this.chartParameters1 = new ScatterChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new ScatterChartConfiguration();
    this.chartParameters2.size = [ 2, 1, 2];
    this.chartParameters2.shape = [ 'circle', 'cross', 'diamond'];
    this.chartParameters2.color = ['red', 'black', '#7c0000'];
    this.chartParameters2.showDistX = false;
    this.chartParameters2.showDistY = false;
    this.chartParameters2.legend.margin.top = 1;

  }

  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HTML_DATA
      },
      'scss': {
        'data': ''
      }
    };
  }

  getCustomConfigurationFiles() {
    return {
      'html': {
        'data': CUSTOM_CONFIGURATION_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': CUSTOM_CONFIGURATION_TYPESCRIPT_DATA
      }
    }
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="scatterChart" x-label="Time" y-label="Amount (€)" entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
x-data-type="time" chart-height="600"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart type="scatterChart" x-label="Time" y-label="Amount (€)" entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
x-data-type="time" [chart-parameters]="chartParameters" chart-height="600"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { OChartComponent, ScatterChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'scatter',
  templateUrl: './scatter.component.html'
})
export class ScatterComponent {

  chartParameters: ScatterChartConfiguration;

  constructor() {

    this.chartParameters = new ScatterChartConfiguration();
    this.chartParameters.size = [ 2, 1, 2];
    this.chartParameters.shape = [ 'circle', 'cross', 'diamond'];
    this.chartParameters.colors = [ 'red', 'black', '#7c0000'];
    this.chartParameters.showDistX = false;
    this.chartParameters.showDistY = false;
  }
}
`;
