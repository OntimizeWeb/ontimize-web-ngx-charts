import { ChartConfiguration } from '../models';

export interface ChartFactory {
  createChartOptions(chartConf: ChartConfiguration): Object;
}
