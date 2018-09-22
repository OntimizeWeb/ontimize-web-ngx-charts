import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { OHLCChartConfiguration } from '../chart-options/OHLCChartConfiguration.class';

export class OhlcDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  adaptResult(_data: Array<any>): Object {
    let chartVal = {
      values: (this.chartConf as OHLCChartConfiguration).chartData
    }
    return chartVal;
  }

  constructor(chartconf: ChartConfiguration) {
    this.chartConf = chartconf;
  }
}
