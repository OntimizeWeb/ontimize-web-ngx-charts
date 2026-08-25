import { Component, ViewChild } from '@angular/core';
import { ICurrencyPipeArgument, IMomentPipeArgument } from 'ontimize-web-ngx';
import { OChartComponent } from 'ontimize-web-ngx-charts';



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
  colorScheme = {
    domain: ['#8ab2d2', '#eeeeee', '#c5c5c5']
  };
  protected data: Array<Object>;
  currencyArgs: ICurrencyPipeArgument = {
    currencySimbol: '€',
    currencySymbolPosition: 'right',
    grouping: true,
    thousandSeparator: '.',
    decimalSeparator: ',',
  };
  dateArgs: IMomentPipeArgument = { format: 'DD/MM/YYYY' };
  constructor() {
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
        'data': BASIC_USAGE_CONF_TYPESCRIPT_DATA
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
  activate(event: any) {
    console.log("Tooltip activated:", event);
  }

}

const BASIC_USAGE_HTML_DATA = ` <o-chart type="line" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"
[color]="colorScheme"></o-chart>
`;
const BASIC_USAGE_CONF_HTML_DATA = `
    <o-chart #lineChartBasic type="line" x-label="Time" y-label="Amount (€)" entity="EMovements" x-axis="DATE_" show-tooltip="true" y-axis="MOVEMENT"
      x-data-type="time" [color]="colorScheme" (onActivate)="activate($event)" (onSelect)="activate($event)">
      <ng-template #tooltip let-model="model">
        <strong>Date:</strong> {{model?.name | oMoment : dateArgs}}<br>
        <strong>Value:</strong> {{model?.value | oCurrency : currencyArgs}}
      </ng-template>
    </o-chart>
`;

const BASIC_USAGE_CONF_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, LineChartConfiguration, ChartService } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'line',
  templateUrl: './line.component.html'
})
export class LineComponent {
   colorScheme = {
    domain: ['#8ab2d2', '#eeeeee', '#c5c5c5']
  };
  constructor() {
  }
}
`;

const SERIES_HTML_DATA = `
<o-chart #lineChart type="line" x-label="Time" y-label="Amount (€)" service="movements" entity="EMovementsGrouped" x-axis="DATE_"
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


