import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  @ViewChild('donut')
  protected donut: OChartComponent;

  @ViewChild('donutConfig')
  protected donutConfig: OChartComponent;

  chartParameters: DonutChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new DonutChartConfiguration();
    this.chartParameters.showLabels = false;
    this.chartParameters.cornerRadius = 15;
    this.chartParameters.donutRatio = 0.5;


  }

  ngOnInit() {
  }

  getBasicUsageId() {
    return 'Donut Chart (Basic Usage)';
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
    ]
  }

  getCustomConfigurationId() {
    return 'Donut Chart (Custom Configuration)';
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
<o-chart type="donutChart" flex="75" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
y-axis="MOVEMENT" chart-height="400"></o-chart>
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart #donutConfig type="donutChart" chart-height="400" flex="75" entity="EMovementTypesTotal" x-axis="MOVEMENTTYPES"
        y-axis="MOVEMENT" [chart-parameters]="chartParameters"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, DonutChartConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
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
