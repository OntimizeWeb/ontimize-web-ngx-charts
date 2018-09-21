import { ChartConfiguration } from '../ChartConfiguration.class';
import { PieChartOptions } from './PieChartOptions.class';

export class DonutChartOptions extends PieChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }
}
