import { ChartConfiguration } from '../core';

export interface ChartFactory {
  createChartOptions(chartConf: ChartConfiguration): Object;
}
