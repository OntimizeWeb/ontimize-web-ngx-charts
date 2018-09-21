import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { OHLCChartConfiguration } from '../chart-options/OHLCChartConfiguration.class';

export class OhlcDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  adaptResult(_data: Array<any>): Object {
    return (this.chartConf as OHLCChartConfiguration).data;
  }

  constructor(chartconf: ChartConfiguration) {
    this.chartConf = chartconf;
  }
}
