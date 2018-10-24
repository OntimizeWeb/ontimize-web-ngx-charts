import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { OHLCChartConfiguration } from '../chart-options/OHLCChartConfiguration.class';

export class OhlcDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  adaptResult(data: any): Object {
      let values = [];
      let params = this.chartConf as OHLCChartConfiguration;
      data.forEach((item: any, _index: number) => {
        let val = {
          date: item[params.xColumn],
          open: item[params.openAxis],
          close: item[params.closeAxis],
          high: item[params.highAxis],
          low: item[params.lowAxis]
        }
        values.push(val);
      });
      let dataAdapt  = {
        'values': values
      }
      return dataAdapt;
  }

  constructor(chartconf: ChartConfiguration) {
    this.chartConf = chartconf;
  }
}
