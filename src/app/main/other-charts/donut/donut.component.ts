import { Component } from '@angular/core';
import { DonutChartConfiguration } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  chartParameters1: DonutChartConfiguration;
  chartParameters2: DonutChartConfiguration;

  constructor() {
    this.chartParameters1 = new DonutChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new DonutChartConfiguration();
    this.chartParameters2.showLabels = false;
    this.chartParameters2.cornerRadius = 15;
    this.chartParameters2.donutRatio = 0.5;
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;
  }
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HMTL_DATA
      },
      'scss': {
        'data': ''
      }
    }
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

const BASIC_USAGE_HMTL_DATA = `
 <o-chart type="donutChart" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES" y-axis="MOVEMENT" chart-height="400"
 [chart-parameters]="chartParameters1" [color]="colorScheme"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart #donutConfig type="donutChart" chart-height="400" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
      y-axis="MOVEMENT" [chart-parameters]="chartParameters2" [color]="colorScheme"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, ViewChild} from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  chartParameters1: DonutChartConfiguration;
  chartParameters2: DonutChartConfiguration;

  constructor() {
    this.chartParameters1 = new DonutChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new DonutChartConfiguration();
    this.chartParameters2.showLabels = false;
    this.chartParameters2.cornerRadius = 15;
    this.chartParameters2.donutRatio = 0.5;
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;
  }
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
}
`;
