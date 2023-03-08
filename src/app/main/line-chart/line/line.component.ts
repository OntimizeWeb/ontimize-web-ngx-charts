import { Component, ViewChild } from '@angular/core';
import { ChartService, LineChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

declare var d3: any;

@Component({
  selector: 'line',
  templateUrl: './line.component.html'
})
export class LineComponent {

  @ViewChild('lineChart', {static: false})
  protected lineChart: OChartComponent;

  @ViewChild('lineChartBasic', {static: false})
  protected lineChartBasic: OChartComponent;

  protected yAxis = 'MOVEMENT';
  protected xAxis = 'DATE_';

  chartParameters1: LineChartConfiguration;
  chartParameters2: LineChartConfiguration;
  chartParametersSerie: LineChartConfiguration;

  protected data: Array<Object>;

  constructor() {
    this.chartParameters1 = new LineChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new LineChartConfiguration();
    this.chartParameters2.isArea = [true];
    this.chartParameters2.interactive = false;
    this.chartParameters2.useInteractiveGuideline = false;
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;

    this.chartParametersSerie = new LineChartConfiguration();
    this.chartParametersSerie.legend.vers = 'furious';
    this.chartParametersSerie.legend.margin.top = 5;
    this.chartParametersSerie.legend.margin.bottom = 5;

  }

  ngAfterViewInit() {
    if (this.lineChartBasic) {
      let chartService: ChartService = this.lineChartBasic.getChartService();

      let chartOps = chartService.getChartOptions();
      // Configuring x axis...
      chartOps['xAxis']['tickFormat'] = function (d) {
        console.log(d);
        return d3.time.format('%d/%m/%y')(new Date(d));
      };

    }
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
        'data': ''
      }
    }
  }


  getBasicUsageConfFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_CONF_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': BASIC_USAGE_CONF_TYPESCRIPT_DATA
      }
    }
  }

  getCustomDataFiles() {
    return {
      'html': {
        'data': SERIES_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': SERIES_TYPESCRIPT_DATA
      }
    }
  }


}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" 
x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
`;
const BASIC_USAGE_CONF_HTML_DATA = `
<o-chart #lineChartBasic type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" x-axis="DATE_"
y-axis="MOVEMENT" [chart-parameters]="chartParameters" x-data-type="time"></o-chart>
`;

const BASIC_USAGE_CONF_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration, ChartService } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'line',
  templateUrl: './line.component.html'
})
export class LineComponent {
  chartParameters: LineChartConfiguration;

  constructor() {
      this.chartParameters = new LineChartConfiguration();
      this.chartParameters.isArea = [true];
      this.chartParameters.interactive = false;
      this.chartParameters.useInteractiveGuideline = false;
  }
}
`;

const SERIES_HTML_DATA = `
<o-chart #lineChart type="line" x-label="Time" y-label="Amount (€)" entity="EMovementsGrouped" x-axis="DATE_"
y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time" [chart-parameters]="chartParametersSerie"></o-chart>`;

const SERIES_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration } from 'ontimize-web-ngx-charts';

declare var d3: any;

@Component({
  selector: 'line',
  templateUrl: './line.component.html'
})

export class LineComponent {
  @ViewChild('lineChart')
  protected lineChart: OChartComponent;

  chartParametersSerie: LineChartConfiguration;

  constructor() {
    this.chartParametersSerie = new LineChartConfiguration();
    this.chartParametersSerie.legend.vers = 'furious';
  }

  ngAfterViewInit() {
    if (this.lineChartBasic) {
      let chartService: ChartService = this.lineChartBasic.getChartService();

      let chartOps = chartService.getChartOptions();
      // Configuring x axis...
      chartOps['xAxis']['tickFormat'] = function (d) {
        console.log(d);
        return d3.time.format('%d/%m/%y')(new Date(d));
      };

    }
  }
}`;


