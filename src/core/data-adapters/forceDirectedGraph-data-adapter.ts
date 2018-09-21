import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ForceDirectedGraphConfiguration } from '../chart-options/ForceDirectedGraphConfiguration.class';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';

export class ForceDirectedGraphDataAdapter implements ChartDataAdapter {
  protected chartConf: ForceDirectedGraphConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf as ForceDirectedGraphConfiguration;
  }
  adaptResult(_data: Array<any>): Object {
    let result;
    result = {
      nodes: this.chartConf.nodes,
      links: this.chartConf.links
    };
    return result;
  }
}
