import { ChartConfiguration } from '../models/ChartConfiguration.class';

export interface ChartFactory {
  createChartOptions(chartConf: ChartConfiguration): Object;
}
