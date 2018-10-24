import { OhlcDataAdapter } from './ohlc-data-adapter';
import { CandlestickChartConfiguration } from '../../core';

export class CandlestickDataAdapter extends OhlcDataAdapter {

  adaptResult(data: any): Object {
    let values = [];
    let params = this.chartConf as CandlestickChartConfiguration;
    data.forEach((item: any, _index: number) => {
      let val = {
        date: item[params.xColumn],
        open: item[params.openAxis],
        close: item[params.closeAxis],
        high: item[params.highAxis],
        low: item[params.lowAxis]
      }
      values.push(val)
    });

    let dataAdapt = {
      'values': values
    }
    return dataAdapt;
  }

}
