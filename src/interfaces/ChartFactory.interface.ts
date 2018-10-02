import { ChartConfiguration } from '../core/chart-options/ChartConfiguration.class';

export interface ChartFactory {
  createChartOptions(chartConf:ChartConfiguration): Object;
}
