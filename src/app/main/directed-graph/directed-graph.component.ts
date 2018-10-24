import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, ChartMarginConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';
import { ForceDirectedGraphConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts'

@Component({
  selector: 'app-directed-graph',
  templateUrl: './directed-graph.component.html',
  styleUrls: ['./directed-graph.component.scss']
})
export class DirectedGraphComponent implements OnInit {

  @ViewChild('directedGraph')
  protected directedGraph: OChartComponent;

  chartParameters: ForceDirectedGraphConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new ForceDirectedGraphConfiguration();
    this.chartParameters.charge = -50;
    let nodes = [];


    for (let i = 1; i < 100; i++) {
      let node = {
        node: i,
        name: "Nodo " + i,
        group: i % 4,
      }
      nodes.push(node);
    }

    let links = [];

    for (let i = 1; i < nodes.length; i++) {
      let link = {
        source: i % 4,
        target: i,
        value: 1
      }
      if (i % 3) {
        let link = {
          source: i%5,
          target: i,
          value: 1
        }
        links.push(link);
      }
      links.push(link);
    }

    this.chartParameters.nodes = nodes;
    this.chartParameters.links = links;

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.directedGraph.setDataArray(DataAdapterUtils.adapter.adaptResult([]));
  }

  getBasicUsageId() {
    return 'Force Directed Graph (Basic Usage)';
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

}

const BASIC_USAGE_HTML_DATA = `
<o-chart #directedGraph type="forceDirectedGraph" chart-height="450" chart-width="1000"
[chart-parameters]="chartParameters" flex="75">
</o-chart>
`;

const BASIC_USAGE_TYPESCRIPT_DATA = `
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { OChartComponent, ChartMarginConfiguration } from 'ontimize-web-ngx-charts';
import { NavigationBarService } from '../../shared/services/navigation-bar.service';
import { OTranslateService } from 'ontimize-web-ngx';
import { ForceDirectedGraphConfiguration } from 'ontimize-web-ngx-charts/src/core/chart-options/ForceDirectedGraphConfiguration.class'

@Component({
  selector: 'app-directed-graph',
  templateUrl: './directed-graph.component.html',
  styleUrls: ['./directed-graph.component.scss']
})
export class DirectedGraphComponent implements OnInit {

  chartParameters: ForceDirectedGraphConfiguration;

  constructor(protected injector: Injector,
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {

    this.chartParameters = new ForceDirectedGraphConfiguration();
    this.chartParameters.charge = -50;
    let nodes = [];


    for (let i = 1; i < 100; i++) {
      let node = {
        node: i,
        name: "Nodo " + i,
        group: i % 4,
      }
      nodes.push(node);
    }

    let links = [];

    for (let i = 1; i < nodes.length; i++) {
      let link = {
        source: i % 4,
        target: i,
        value: 1
      }
      if (i % 3) {
        let link = {
          source: i%5,
          target: i,
          value: 1
        }
        links.push(link);
      }
      links.push(link);
    }

    this.chartParameters.nodes = nodes;
    this.chartParameters.links = links;

  }
}
`;