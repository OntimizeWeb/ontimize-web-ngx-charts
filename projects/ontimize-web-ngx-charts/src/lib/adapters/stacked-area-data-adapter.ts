import { ChartSeries } from '../interfaces/ChartData.interface';
import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../models/options/StackedAreaChartConfiguration.class';

export class StackedAreaDataAdapter implements ChartDataAdapter {

  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: Array<string>;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      let yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis : [];
    }
  }

  adaptResult(data: Array<any>): Array<ChartSeries> {
    let result: Array<ChartSeries> = [];
    let config = (this.chartConf as StackedAreaChartConfiguration);
    if (data && data.length) {
      let seriesValues = this.processSeriesValues(data);
      this.yAxis.forEach((axis: string, _index: number) => {
        let serie: ChartSeries = {
          'key': axis,
          values: []
        };
        if (config.color && config.color[_index]) {
          serie['color'] = config.color[_index];
        }
        let key = axis;
        if (config.translateService) {
          key = config.translateService.get(key);
        }
        serie['key'] = key;
        seriesValues[axis].sort((a, b) => (a.x > b.x) ? 1 : (b.x > a.x) ? -1 : 0);
        serie['values'] = seriesValues[axis];
        result.push(serie);
      });
    }
    return result;
  }

  processSeriesValues(data: Array<any>): Object {
    let seriesValues = {};
    var self = this;
    data.forEach((item: any, _index: number) => {
      self.yAxis.forEach((axis: string, _indexAxis: number) => {
        if (seriesValues[axis] === undefined) {
          seriesValues[axis] = [];
        }
        if (item[axis] === undefined)
          return;
        let val = {
          'x': item[self.xAxis],
          'y': item[axis]
        };
        seriesValues[axis].push(val);
      });
    });
    return seriesValues;
  }

}

