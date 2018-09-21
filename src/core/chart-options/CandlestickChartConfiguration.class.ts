import { OHLCChartConfiguration } from './OHLCChartConfiguration.class';
import { CandlestickDataType } from './CandlestickDataType.class';

export class CandlestickChartConfiguration extends OHLCChartConfiguration {
  data: Array<CandlestickDataType>;
}
