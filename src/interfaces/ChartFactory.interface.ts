import { ChartConfiguration } from '../core/ChartConfiguration.class';

export interface ChartFactory {
    createChartOptions(chartConf:ChartConfiguration): Object;
}
