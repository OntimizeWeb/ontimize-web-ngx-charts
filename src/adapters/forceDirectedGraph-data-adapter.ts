import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration, ForceDirectedGraphConfiguration } from '../models';

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
