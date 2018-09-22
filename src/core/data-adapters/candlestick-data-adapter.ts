import { OhlcDataAdapter } from './ohlc-data-adapter';
import {  CandlestickChartConfiguration } from '../../core';

export class CandlestickDataAdapter extends OhlcDataAdapter {
  adaptResult(_data: Array<any>): Object {
    let chart = {
      values: (this.chartConf as CandlestickChartConfiguration).chartData
    }
    return chart;
  }
}
