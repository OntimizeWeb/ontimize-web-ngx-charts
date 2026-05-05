import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { ForceDirectedGraphConfiguration } from '../models/options/ForceDirectedGraphConfiguration.class';

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
