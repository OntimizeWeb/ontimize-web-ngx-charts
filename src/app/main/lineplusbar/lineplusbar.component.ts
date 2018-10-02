import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html',
  styleUrls: ['./lineplusbar.component.scss']
})
export class LineplusbarComponent implements OnInit {

  @ViewChild('lineplusbar')
  protected lineplusbar: OChartComponent;

  @ViewChild('lineplusbar2')
  protected lineplusbar2: OChartComponent;

  chartParameters: LinePlusBarFocusChartConfiguration;
  chartParameters2: LinePlusBarFocusChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new LinePlusBarFocusChartConfiguration();
    this.chartParameters.bars = [true, false];

    this.chartParameters2 = new LinePlusBarFocusChartConfiguration();
    this.chartParameters2.bars = [ true, false];
    this.chartParameters2.to_zero = [true, false];
    this.chartParameters2.to_previusValue = [false, true];
    this.chartParameters2.colors = ["blue", "red"]
  }

  ngOnInit() {
  }

  getBasicUsageId() {
    return 'Line plus Bar Chart with Focus (Basic Usage)';
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
        'data': BASIC_USAGE_TYPESCRIPT_DATA
      }
    ];
  }

  getCustomConfigurationId() {
    return 'Line plus Bar Chart with Focus (Custom Configuration)';
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


const BASIC_USAGE_HTML_DATA = `
<o-chart #lineplusbar type="linePlusBarWithFocusChart" flex="75" entity="EMovementsGrouped"
x-axis="DATE_" y-axis="MOVEMENT;BALANCE" x-data-type="time" chart-height="500" [chart-parameters]="chartParameters">
</o-chart>
`;

const BASIC_USAGE_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html',
  styleUrls: ['./lineplusbar.component.scss']
})
export class LineplusbarComponent implements OnInit {

  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

      this.chartParameters = new LinePlusBarFocusChartConfiguration();
      this.chartParameters.bars = [true, false];

     }
    }
`;

const CUSTOM_CONFIGURATION_HTML_DATA = `
<o-chart #lineplusbar type="linePlusBarWithFocusChart" flex="75" entity="EMovementsGrouped"
x-axis="DATE_" y-axis="MOVEMENT;BALANCE" x-data-type="time"
[chart-parameters]="chartParameters" chart-height="500"></o-chart>
`;

const CUSTOM_CONFIGURATION_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, LinePlusBarFocusChartConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-lineplusbar',
  templateUrl: './lineplusbar.component.html',
  styleUrls: ['./lineplusbar.component.scss']
})
export class LineplusbarComponent {

  chartParameters: LinePlusBarFocusChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

      this.chartParameters = new LinePlusBarFocusChartConfiguration();
      this.chartParameters.bars = [ true, false];
      this.chartParameters.to_zero = [true, false];
      this.chartParameters.to_previusValue = [false, true];
      this.chartParameters.colors = ["blue", "red"]
     }
    }
`;