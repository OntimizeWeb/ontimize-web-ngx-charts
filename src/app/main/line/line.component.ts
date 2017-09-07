import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ng2';
import { OChartComponent, ChartService, Margin } from 'ontimize-web-ng2-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

declare var d3: any;

@Component({

  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild('lineChart')
  protected lineChart: OChartComponent;
  @ViewChild('lineChartBasic')
  protected lineChartBasic: OChartComponent;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'DATE_';

  protected data: Array<Object>;

  constructor(
    protected injector: Injector,
    protected elRef: ElementRef,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('LINE');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {

    if (this.lineChart) {
      let chartService: ChartService = this.lineChart.getChartService();
      chartService.getChartOptions()['xAxis']['tickFormat'] =
      function (d) {
        return d3.time.format('%B')(new Date(d));
        };

      var mindate = new Date(2009,1,1),
            maxdate = new Date(2009,10,1);

      var xScale = d3.time.scale();

      chartService.getChartOptions()['xScale'] = xScale;
      chartService.getChartOptions()['xDomain'] = [mindate, maxdate];
    }

    if (this.lineChartBasic) {
      // let filter = {
      //   'ACCOUNTID': 7310
      // }
      // this.lineChartBasic.queryData(filter);


      let chartService: ChartService = this.lineChartBasic.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%B')(new Date(d));
          };

        var xScale = d3.time.scale();
        chartOps['xScale'] = xScale;

        var mindate = new Date(2009, 1, 1),
          maxdate = new Date(2009, 10, 1);
        chartOps['xDomain'] = [mindate, maxdate];

        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 2000];

        // Configuring chart margin...
        let margin: Margin = {
          top: 40,
          left: 60,
          right: 60,
          bottom: 80
        }
        chartService.setMargin(margin);

        chartService.setXAxisLabel('Time (modified by code)');
        chartService.setYAxisLabel('Amount (€)(modified)');

         chartService.setXAxisLabelDistance(10);
        chartService.setYAxisLabelDistance(-10);
      }

    }


    let service: OntimizeService = this.injector.get(OntimizeService);
    let conf = service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    service.configureService(conf);

    let filter = {
      'ACCOUNTID': 7310
    }
    service.query(filter, ['MOVEMENT', 'DATE_']).subscribe((resp) => {
      if (resp.code === 0) {
        this.data = this.adaptResult(resp.data);
      }
    });
  }

  adaptResult(data: Array<any>) {
    if (data && data.length) {
      let values = this.processValues(data);
      return [
        {
          'key': 'Movement',
          'values': values['movement']
        },
        {
          'key': 'Average Balance',
          'values': values['average']
        },
        {
          'key': 'Total Balance',
          'values': values['total']
        }
      ]
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
    return 'Line Chart (Basic usage)';
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
        'data': ''
      }
    ]
  }

  getBasicUsageConfId() {
    return 'Line Chart (Custom configuration)';
  }

  getBasicUsageConfFiles() {
    return [
      {
        'type': 'html',
        'data': BASIC_USAGE_CONF_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': BASIC_USAGE_CONF_TYPESCRIPT_DATA
      }
    ]
  }

  getCustomDataId() {
    return 'Line Chart (Series)';
  }

  getCustomDataFiles() {
    return [
      {
        'type': 'html',
        'data': SERIES_HTML_DATA
      },
      {
        'type': 'scss',
        'data': ''
      },
      {
        'type': 'typescript',
        'data': SERIES_TYPESCRIPT_DATA
      }
    ]
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart type="line" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
`;
const BASIC_USAGE_CONF_HTML_DATA = `
<o-chart #lineChartBasic type="line" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovements" x-axis="DATE_" y-axis="MOVEMENT" x-data-type="time"></o-chart>
`;
const BASIC_USAGE_CONF_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';

import { OChartComponent, ChartService, Margin } from 'ontimize-web-ng2-charts';

declare var d3: any;

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {

  @ViewChild('lineChartBasic')
  protected lineChartBasic: OChartComponent;

  ngAfterViewInit() {

    if (this.lineChartBasic) {

      let chartService: ChartService = this.lineChartBasic.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%B')(new Date(d));
          };

        var xScale = d3.time.scale();
        chartOps['xScale'] = xScale;

        var mindate = new Date(2009, 1, 1),
          maxdate = new Date(2009, 10, 1);
        chartOps['xDomain'] = [mindate, maxdate];

        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 2000];

        // Configuring chart margin...
        let margin: Margin = {
          top: 40,
          left: 60,
          right: 60,
          bottom: 80
        }
        chartService.setMargin(margin);

        chartService.setXAxisLabel('Time (modified by code)');
        chartService.setYAxisLabel('Amount (€)(modified)');

        chartService.setXAxisLabelDistance(10);
        chartService.setYAxisLabelDistance(-10);
      }

    }
  }
}
`;

const SERIES_HTML_DATA = `
<o-chart #lineChart type="line" x-label="Time" y-label="Amount (€)" flex="75"
    entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
    x-data-type="time"></o-chart>
`;

const SERIES_TYPESCRIPT_DATA = `
import { Component, OnInit } from '@angular/core';

import { OChartComponent, ChartService } from 'ontimize-web-ng2-charts';

declare var d3: any;

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  @ViewChild('lineChart')
  protected lineChart: OChartComponent;

  constructor() {
  }

  ngOnInit() {
    // nothing to do
  }

  ngAfterViewInit() {

    if (this.lineChart) {
      let chartService: ChartService = this.lineChart.getChartService();
      chartService.getChartOptions()['xAxis']['tickFormat'] =
      function (d) {
        return d3.time.format('%B')(new Date(d));
        };

      var mindate = new Date(2009,1,1),
            maxdate = new Date(2009,10,1);

      var xScale = d3.time.scale();

      chartService.getChartOptions()['xScale'] = xScale;
      chartService.getChartOptions()['xDomain'] = [mindate, maxdate];
    }
  }

}`;
