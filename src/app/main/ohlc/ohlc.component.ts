import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, OHLCChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.scss']
})
export class OhlcComponent implements OnInit {

  @ViewChild('ohlc')
  protected ohlc: OChartComponent;

  protected chartParameters: OHLCChartConfiguration;
  protected chartParameters2: OHLCChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new OHLCChartConfiguration();
    this.chartParameters.xColumn = "DATE_";
    this.chartParameters.openAxis = "BALANCE";
    this.chartParameters.highAxis = "BALANCE";
    this.chartParameters.closeAxis = "MOVEMENT";
    this.chartParameters.lowAxis = "MOVEMENT";


    this.chartParameters2 = new OHLCChartConfiguration();
    this.chartParameters2.chartData = [
      { "date": 1511111115707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, },
      { "date": 1511111115708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73 },
      { "date": 1511111115709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37 },
      { "date": 1511111115712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97 },
      { "date": 1511111115713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55 },
      { "date": 1511111115714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92 },
      { "date": 1511111115715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08 },
      { "date": 1511111115716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07 },
      { "date": 1511111115719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97 },
      { "date": 1511111115720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07 },
      { "date": 1511111115721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05 },
      { "date": 1511111115722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148 },
      { "date": 1511111115723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33 },
      { "date": 1511111115727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.1 },
      { "date": 1511111115728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37 },
      { "date": 1511111115729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41 }
    ];
  }

  ngOnInit() {
  }

  getBasicUsageId() {
    return 'OHLC Chart (Basic Usage)';
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
    ]
  }

  getCustomServiceId() {
    return 'OHLC Chart (Custom Service)';
  }

  getCustomServiceFiles() {
    return [
      {
        'type': 'html',
        'data': CUSTOM_SERVICE_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': CUSTOM_SERVICE_TYPESCRIPT_DATA
      }
    ]
  }
}

const BASIC_USAGE_HTML_DATA = `
<o-chart #ohlc type="ohlcBarChart" chart-height="600" x-data-type="time"
[chart-parameters]="chartParameters" entity="EMovementsGrouped"></o-chart>
`;

const BASIC_USAGE_TYPESCRIPT_DATA = `
import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, OHLCChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.scss']
})
export class OhlcComponent implements OnInit {

  @ViewChild('ohlc')
  protected ohlc: OChartComponent;

  protected chartParameters: OHLCChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new OHLCChartConfiguration();
    this.chartParameters.xColumn = "DATE_";
    this.chartParameters.openAxis = "BALANCE";
    this.chartParameters.highAxis = "BALANCE";
    this.chartParameters.closeAxis = "MOVEMENT";
    this.chartParameters.lowAxis = "MOVEMENT";
  }
}
`;

const CUSTOM_SERVICE_HTML_DATA = `
<o-chart type="ohlcBarChart" chart-height="600" x-data-type="time"
        [chart-parameters]="chartParameters2"></o-chart>
`;

const CUSTOM_SERVICE_TYPESCRIPT_DATA = `
import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, OHLCChartConfiguration } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-ohlc',
  templateUrl: './ohlc.component.html',
  styleUrls: ['./ohlc.component.scss']
})
export class OhlcComponent implements OnInit {

  @ViewChild('ohlc')
  protected ohlc: OChartComponent;

  protected chartParameters2: OHLCChartConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters2 = new OHLCChartConfiguration();
    this.chartParameters2.chartData = [
      { "date": 1511111115707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, },
      { "date": 1511111115708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73 },
      { "date": 1511111115709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37 },
      { "date": 1511111115712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97 },
      { "date": 1511111115713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55 },
      { "date": 1511111115714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92 },
      { "date": 1511111115715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08 },
      { "date": 1511111115716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07 },
      { "date": 1511111115719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97 },
      { "date": 1511111115720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07 },
      { "date": 1511111115721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05 },
      { "date": 1511111115722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148 },
      { "date": 1511111115723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33 },
      { "date": 1511111115727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.1 },
      { "date": 1511111115728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37 },
      { "date": 1511111115729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41 }
    ];
  }
}
`;