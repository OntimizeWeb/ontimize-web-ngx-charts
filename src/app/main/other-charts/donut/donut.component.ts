import { Component, ViewChild} from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';


@Component({
  selector: 'donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  @ViewChild('donut')
  protected donut: OChartComponent;

  @ViewChild('donutConfig')
  protected donutConfig: OChartComponent;

  chartParameters: DonutChartConfiguration;

  constructor() {
    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.showLabels = false;
    this.chartParameters.cornerRadius = 15;
    this.chartParameters.donutRatio = 0.5;
  }

  getBasicUsageFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_HMTL_DATA
      },
      {
        'type': 'scss',
        'data': ''
      }
    ];
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
    ];
  }

}

const BASIC_USAGE_HMTL_DATA = `
<o-chart type="donutChart" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
y-axis="MOVEMENT" chart-height="400"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart #donutConfig type="donutChart" chart-height="400"  entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
        y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, ViewChild} from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent {

  chartParameters: DonutChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.showLabels = false;
    this.chartParameters.cornerRadius = 15;
    this.chartParameters.donutRatio = 0.5;
  }
}
`;
