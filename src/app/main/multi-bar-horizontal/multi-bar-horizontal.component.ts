import { Component, OnInit, Injector, ViewChild } from '@angular/core';

import { OntimizeService, OTranslateService } from 'ontimize-web-ng2';
import { OChartComponent, ChartService } from 'ontimize-web-ng2-charts';

import { NavigationBarService } from '../../shared/services/navigation-bar.service';

@Component({
  selector: 'multi-bar-horizontal',
  templateUrl: './multi-bar-horizontal.component.html',
  styleUrls: ['./multi-bar-horizontal.component.scss']
})
export class MultiBarHorizontalComponent implements OnInit {

  @ViewChild('multiBarHor')
  protected multiBarHor: OChartComponent;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title += this.translateService.get('MULTI_BAR');
    this.navigationService.setTitle(title);
  }

  ngAfterViewInit() {

    if (this.multiBarHor) {
      let chartService: ChartService = this.multiBarHor.getChartService();
      if (chartService) {
        let chartOps = chartService.getChartOptions();

        // Configuring x axis...
        chartOps['xAxis']['tickFormat'] =
          function (d) {
            return d3.time.format('%b')(new Date(d));
          };

        // Configuring y axis...
        var yScale = d3.scale.linear();
        chartOps['yScale'] = yScale;
        chartOps['yDomain'] = [-1000, 6000];
      }
    }
  }

  getBasicUsageId() {
    return 'Multi Bar Chart Horizontal (Basic usage)';
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

}


const BASIC_USAGE_HTML_DATA = `
<o-chart type="multiBarHorizontal" x-label="Time" y-label="Amount (€)" layout-fill
  entity="EMovementsGrouped" x-axis="DATE_" y-axis="MOVEMENT;AVERAGE;BALANCE"
  x-data-type="time"></o-chart>
`;
