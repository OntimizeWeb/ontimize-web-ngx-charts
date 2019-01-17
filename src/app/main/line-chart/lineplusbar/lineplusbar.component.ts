import { Component } from '@angular/core';
import { LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html'
})
export class LineplusbarComponent {

  chartParameters: LinePlusBarFocusChartConfiguration;
  chartParameters2: LinePlusBarFocusChartConfiguration;

  constructor() {

    this.chartParameters = new LinePlusBarFocusChartConfiguration();
    this.chartParameters.bars = [true, false];

    this.chartParameters2 = new LinePlusBarFocusChartConfiguration();
    this.chartParameters2.bars = [ true, false];
    this.chartParameters2.to_zero = [true, false];
    this.chartParameters2.to_previusValue = [false, true];
    this.chartParameters2.colors = ['blue', 'red'];
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
        'data': BASIC_USAGE_TYPESCRIPT_DATA
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


const BASIC_USAGE_HTML_DATA = `
<o-chart type="linePlusBarWithFocusChart" entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;BALANCE"
 x-data-type="time" chart-height="500" [chart-parameters]="chartParameters"></o-chart>
`;

const BASIC_USAGE_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html'
})

export class LineplusbarComponent {

  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor() {
    this.chartParameters = new LinePlusBarFocusChartConfiguration();
    this.chartParameters.bars = [true, false];
  }
}
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart type="linePlusBarWithFocusChart" entity="EMovementsGrouped" x-axis="DATE_" 
y-axis="MOVEMENT;BALANCE" x-data-type="time" [chart-parameters]="chartParameters" chart-height="500"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component } from '@angular/core';
import { LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html'
})
export class LineplusbarComponent {

  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor() {
      this.chartParameters = new LinePlusBarFocusChartConfiguration();
      this.chartParameters.bars = [ true, false];
      this.chartParameters.to_zero = [true, false];
      this.chartParameters.to_previusValue = [false, true];
      this.chartParameters.colors = ["blue", "red"]
     }
    }
`;