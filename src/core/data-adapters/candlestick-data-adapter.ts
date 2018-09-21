import { OhlcDataAdapter } from './ohlc-data-adapter';
import {  CandlestickChartConfiguration } from '../../core';

export class CandlestickDataAdapter extends OhlcDataAdapter {
  adaptResult(_data: Array<any>): Object {
    return (this.chartConf as CandlestickChartConfiguration).data;
  }
}
