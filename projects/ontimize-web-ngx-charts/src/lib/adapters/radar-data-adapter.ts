import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { RadarChartConfiguration } from '../models/options/RadarChartConfiguration.class';

export class RadarDataAdapter implements ChartDataAdapter {

  chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
  }

  adaptResult(data: any) {
    let result = [];
    const conf = this.chartConf instanceof RadarChartConfiguration ? this.chartConf : null;
    if (conf === null)
      return result;
    let dimensions = conf.dimensions;
    let key = conf.key;

    data.forEach((item: any, _index: number) => {
      let val = [];
      dimensions.forEach((dimension: string) => {
        val.push({ axis: dimension, value: item[dimension] });
      });

      result.push({
        key: item[key],
        values: val
      })

    });

    return result;
  }

}
