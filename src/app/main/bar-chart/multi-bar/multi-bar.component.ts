import { Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { ChartService, MultiBarChartConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

const ADAPTED_DATA = `
[{"key":"Movement","values":[{"x":1235490657851,"y":951},{"x":1236110357961,"y":-80},{"x":1236402213822,"y":653},{"x":1236611284898,"y":-548},{"x":1242673437363,"y":-949},{"x":1245260962425,"y":552},{"x":1246875825338,"y":432},{"x":1254322811810,"y":1756},{"x":1254388791367,"y":-169},{"x":1255948329905,"y":-23}]},{"key":"Average Balance","values":[{"x":1235490657851,"y":951},{"x":1236110357961,"y":911},{"x":1236402213822,"y":1115.3333333333333},{"x":1236611284898,"y":1080.5},{"x":1242673437363,"y":869.8},{"x":1245260962425,"y":821.3333333333334},{"x":1246875825338,"y":848.4285714285714},{"x":1254322811810,"y":1088.25},{"x":1254388791367,"y":1256},{"x":1255948329905,"y":1387.9}]},{"key":"Total Balance","values":[{"x":1235490657851,"y":951},{"x":1236110357961,"y":871},{"x":1236402213822,"y":1524},{"x":1236611284898,"y":976},{"x":1242673437363,"y":27},{"x":1245260962425,"y":579},{"x":1246875825338,"y":1011},{"x":1254322811810,"y":2767},{"x":1254388791367,"y":2598},{"x":1255948329905,"y":2575}]}]
`;

const BASIC_USAGE_HTML_DATA = `
<o-chart type="multiBar" x-label="Time" y-label="Amount (€)" layout-fill entity="EMovementsGrouped"
 x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE" x-data-type="time"></o-chart>
`;

const CUSTOM_DATA_HTML_DATA = `
<o-chart #multiBar type="multiBar" x-label="Time" y-label="Amount (€)"
    [data]="data" x-data-type="time" layout-fill></o-chart>
`;

const CUSTOM_DATA_TYPESCRIPT_DATA = `
import { Component, Injector, ViewChild } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { OChartComponent, ChartService } from 'ontimize-web-ngx-charts';

declare var d3: any;
@Component({
  selector: 'multi-bar',
  templateUrl: './multi-bar.component.html'
})
export class MultiBarComponent {

  @ViewChild('multiBar', {static: false})
  protected multiBar: OChartComponent;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'DATE_';

  protected data: Array<Object>;

  constructor(protected injector: Injector) {  }


  ngAfterViewInit() {

    if (this.multiBar) {
      let chartService: ChartService = this.multiBar.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%d/%m/%y')(new Date(d));
          };
          chartOps['yAxis']['tickFormat'] = function (d) {
            return d3.format(',f')(d) + '€';
          };


        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 6000];
      }
    }

    // Ontimize service query...
    let service: OntimizeService = this.injector.get(OntimizeService);
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    service.configureService(conf);

    let filter = {
      'ACCOUNTID': 7310
    }
    service.query(filter, []).subscribe((resp) => {
      if (resp.code === 0) {
        this.adaptResult(resp.data);
      }
    });
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      this.data = [
        {
          'key': 'Movement',
          'values': values['movement'],
          'color': '#3498db'
        },
        {
          'key': 'Average Balance',
          'values': values['average'],
          'color': '#e74c3c'
        },
        {
          'key': 'Total Balance',
          'values': values['total'],
          'color': '#f9c922'
        }
      ];
    }
  }

  processValues(data: Array<Object>): Object {
    let values = {
      'movement': [],
      'average': [],
      'total': []
    };
    var self = this;
    let balance = 0.0;
    let average = 0.0;
    data.forEach((item: any, index: number) => {
      let val = {
        'x': item[self.xAxis],
        'y': item[self.yAxis]
      };

      balance += val.y;
      let val2 = {
        'x': val.x,
        'y': balance
      };

      average += balance;
      let val3 = {
        'x': val.x,
        'y': (average / (index + 1))
      };

      values['movement'].push(val);
      values['average'].push(val3);
      values['total'].push(val2);
    });
    return values;
  }
}
`;



@Component({
  selector: 'multi-bar',
  templateUrl: './multi-bar.component.html'
})
export class MultiBarComponent {

  @ViewChild('multiBar')
  protected multiBar: OChartComponent;

  protected yAxis = 'MOVEMENT';
  protected xAxis = 'DATE_';

  data: Array<Object>;
  protected serviceResponse: string;

  chartParameters1: MultiBarChartConfiguration;
  chartParameters2: MultiBarChartConfiguration;
  colorScheme = {
    domain: ['#eeeeee', '#8ab2d2', '#c5c5c5']
  };
  constructor(protected injector: Injector) {
    this.chartParameters1 = new MultiBarChartConfiguration();
    this.chartParameters1.legend.margin.top = 5;
    this.chartParameters1.legend.margin.bottom = 5;

    this.chartParameters2 = new MultiBarChartConfiguration();
    this.chartParameters2.legend.margin.top = 5;
    this.chartParameters2.legend.margin.bottom = 5;
  }

  ngAfterViewInit() {

    if (this.multiBar) {
      let chartService: ChartService = this.multiBar.getChartService();
      if (chartService) {


        // Configuring x axis...



        // var xScale = d3.time.scale();
        // chartOps['xScale'] = xScale;
        // var mindate = new Date(2009, 1, 1),
        //   maxdate = new Date(2009, 10, 1);
        // chartOps['xDomain'] = [mindate, maxdate];
        // Configuring y axis...


      }
    }

    let service: OntimizeService = this.injector.get(OntimizeService);
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    service.configureService(conf);

    let filter = {
      'ACCOUNTID': 7310
    };

    service.query(filter, []).subscribe((resp) => {
      if (resp.code === 0) {
        this.serviceResponse = JSON.stringify(resp, undefined, 2);
        this.adaptResult(resp.data);
      }
    });
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      this.data = [
        {
          'key': 'Movement',
          'values': values['movement'],
          'color': '#3498db'
        },
        {
          'key': 'Average Balance',
          'values': values['average'],
          'color': '#e74c3c'
        },
        {
          'key': 'Total Balance',
          'values': values['total'],
          'color': '#f9c922'
        }
      ];
    }
  }

  processValues(data: Array<Object>): Object {
    let values = {
      'movement': [],
      'average': [],
      'total': []
    };
    var self = this;
    let balance = 0.0;
    let average = 0.0;
    data.forEach((item: any, index: number) => {
      let val = {
        'x': item[self.xAxis],
        'y': item[self.yAxis]
      };

      balance += val.y;
      let val2 = {
        'x': val.x,
        'y': balance
      };

      average += balance;
      let val3 = {
        'x': val.x,
        'y': (average / (index + 1))
      };

      values['movement'].push(val);
      values['average'].push(val3);
      values['total'].push(val2);
    });
    return values;
  }

  getBasicUsageId() {
    return 'Multi Bar Chart (Basic usage)';
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
    };
  }

  getCustomDataFiles() {
    return {
      'html': {
        'data': CUSTOM_DATA_HTML_DATA
      },
      'scss': {
        'data': ''
      },
      'typescript': {
        'data': CUSTOM_DATA_TYPESCRIPT_DATA
      },
      'files': [
        // {
        //   'label': 'service data',
        //   'data': this.serviceResponse
        // },
        {
          'label': 'CHART DATA',
          'data': JSON.stringify(JSON.parse(ADAPTED_DATA), undefined, 2)
        }]
    }

  }
}
