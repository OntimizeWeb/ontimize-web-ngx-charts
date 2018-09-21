import { ChartSeries, ChartDataAdapter } from '../../interfaces';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { ScatterChartConfiguration } from '../chart-options/ScatterChartConfiguration.class';

export class ScatterDataAdapter implements ChartDataAdapter {

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
    if (data && data.length) {
      let seriesvalues = this.processSeriesValues(data);
      var self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        let serie: ChartSeries = {
          'key': 'series',
          'values': []
        };
        let key = axis;
        if (self.chartConf.translateService) {
          key = self.chartConf.translateService.get(key);
        }
        serie['key'] = key;
        serie['values'] = seriesvalues[axis];

        result.push(serie);
      });
    }
    return result;
  }

  processSeriesValues(data: Array<Object>): Object {
    let seriesvalues = {};
    var self = this;
    const params = this.chartConf as ScatterChartConfiguration;
    data.forEach((item: any, _index: number) => {

      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesvalues[axis] === undefined) {
          seriesvalues[axis] = [];
        }
        let val = {
          'x': item[self.xAxis],
          'y': item[axis]
        };
        if (params.shape && params.shape[_axisIndex]) {
          val['shape'] = params.shape[_axisIndex];
        }
        if (params.size && params.size[_axisIndex]) {
          val['size'] = params.size[_axisIndex];
        }
        if (params.colors && params.colors[_axisIndex]) {
          val['color'] = params.colors[_axisIndex];
        }
        seriesvalues[axis].push(val);
      });
    });
    return seriesvalues;
  }
}
