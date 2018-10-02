import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { OHLCChartConfiguration } from '../chart-options/OHLCChartConfiguration.class';

export class OhlcDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  adaptResult(_data: Array<any>): Object {
    if ((this.chartConf as OHLCChartConfiguration).chartData) {
      let chartVal = {
        values: (this.chartConf as OHLCChartConfiguration).chartData
      }
      return chartVal;
    }
    else {
      let values = [];
      let params = this.chartConf as OHLCChartConfiguration;
      _data.forEach((item: any, _index: number) => {
        let val = {
          date: item[params.xColumn],
          open: item[params.openAxis],
          close: item[params.closeAxis],
          high: item[params.highAxis],
          low: item[params.lowAxis]
        }
        values.push(val);
      });
      let data  = {
        'values': values
      }
      return data;
    }
  }

  constructor(chartconf: ChartConfiguration) {
    this.chartConf = chartconf;
  }
}
