import { ChartDataAdapter } from '../interfaces';
import { ChartConfiguration, ParallelCoordinatesChartConfiguration } from '../models';

export class ParallelCoordinatesDataAdapter implements ChartDataAdapter {
  private chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
  }

  adaptResult(data: any) {
    let values = [];
    let conf = this.chartConf instanceof ParallelCoordinatesChartConfiguration ? this.chartConf : null;
    if (conf === null) {
      return values;
    }

    let dimensions = conf.dimensionData;

    data.forEach((item: any, _index: number) => {
      let val: { [k: string]: any } = {};;
      dimensions.forEach((dimension: string) => {
        val[dimension['key']] = item[dimension['key']];
      });
      values.push(val);
    });

    return values;
  }

}
