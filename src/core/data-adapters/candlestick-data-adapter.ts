import { OhlcDataAdapter } from './ohlc-data-adapter';
import { CandlestickChartConfiguration } from '../../core';

export class CandlestickDataAdapter extends OhlcDataAdapter {
  adaptResult(_data: Array<any>): Object {
    if ((this.chartConf as CandlestickChartConfiguration).chartData) {
      let chart = {
        values: (this.chartConf as CandlestickChartConfiguration).chartData
      }
      return chart;
    }
    else {
      let values = [];
      let params = this.chartConf as CandlestickChartConfiguration;
      _data.forEach((item: any, _index: number) => {
        let val = {
          date: item[params.xColumn],
          open: item[params.openAxis],
          close: item[params.closeAxis],
          high: item[params.highAxis],
          low: item[params.lowAxis]
        }
        values.push(val)
      });
      let data = {
        'values': values
      }
      return data;
    }
  }
}
