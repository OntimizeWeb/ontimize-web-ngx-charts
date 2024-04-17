import { Component, ViewChild } from '@angular/core';
import { DataAdapterUtils, ForceDirectedGraphConfiguration, OChartComponent } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-directed-graph',
  templateUrl: './directed-graph.component.html'
})
export class DirectedGraphComponent {

  @ViewChild('directedGraph', {static: false})
  protected directedGraph: OChartComponent;

  chartParameters: ForceDirectedGraphConfiguration;

  constructor() {

    this.chartParameters = new ForceDirectedGraphConfiguration();
    this.chartParameters.charge = -50;
    let nodes = [];

    for (let i = 1; i < 100; i++) {
      let node = {
        node: i,
        name: 'Nodo ' + i,
        group: i % 4,
      };
      nodes.push(node);
    }

    let links = [];

    for (let i = 1; i < nodes.length; i++) {
      let link = {
        source: i % 4,
        target: i,
        value: 1
      };
      if (i % 3) {
        let link = {
          source: i % 5,
          target: i,
          value: 1
        };
        links.push(link);
      }
      links.push(link);
    }

    this.chartParameters.nodes = nodes;
    this.chartParameters.links = links;

  }

  ngAfterViewInit() {
    const adapter = DataAdapterUtils.createDataAdapter(this.chartParameters);
    this.directedGraph.setDataArray(adapter.adaptResult([]));
  }


  getBasicUsageFiles() {
    return {
      'html': {
        'data': BASIC_USAGE_HTML_DATA
      },
      'scss':{
        'data': ''
      },
      'typescript':{
        'data': BASIC_USAGE_TYPESCRIPT_DATA
      }
    }
  }

}

const BASIC_USAGE_HTML_DATA = `
<o-chart #directedGraph type="forceDirectedGraph" chart-height="450" chart-width="1000"
[chart-parameters]="chartParameters">
</o-chart>
`;

const BASIC_USAGE_TYPESCRIPT_DATA = `
import { Component, ViewChild } from '@angular/core';
import { OChartComponent, ForceDirectedGraphConfiguration, DataAdapterUtils } from 'ontimize-web-ngx-charts';

@Component({
  selector: 'app-directed-graph',
  templateUrl: './directed-graph.component.html'
})
export class DirectedGraphComponent implements OnInit {

  chartParameters: ForceDirectedGraphConfiguration;

  constructor() {

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
