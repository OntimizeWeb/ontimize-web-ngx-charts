import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';

interface ChartDataPoint {
  name: string;
  value: number;
}

export class MultiBarHorizontalDataAdapter implements ChartDataAdapter {
  private chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
  }

  adaptResult(data: Array<any>): Array<ChartDataPoint> {
    if (!data || data.length === 0) {
      return [];
    }

    return data.map(item => {
      const name = this.capitalizeFirstLetter(item[this.chartConf.xAxis]);
      return {
        name: name,
        value: item[this.chartConf.yAxis[0]]
      };
    });
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
