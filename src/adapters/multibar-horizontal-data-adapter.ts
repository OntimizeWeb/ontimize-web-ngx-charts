import { ChartDataAdapter, ChartSeries } from '../interfaces';
import { ChartConfiguration, MultiBarHorizontalChartConfiguration } from '../models';

export class MultiBarHorizontalDataAdapter implements ChartDataAdapter {

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
    let params = this.chartConf as MultiBarHorizontalChartConfiguration;
    if (data && data.length) {
      let seriesvalues = this.processSeriesValues(data);
      var self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        let serie: ChartSeries = {
          'key': 'series',
          'values': []
        };
        if (params.color && params.color[_index]) {
          serie['color'] = params.color[_index];
        }
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
    data.forEach((item: any, _index: number) => {

      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesvalues[axis] === undefined) {
          seriesvalues[axis] = [];
        }
        let val = {
          'label': item[self.xAxis],
          'value': item[axis]
        };
        seriesvalues[axis].push(val);
      });
    });
    return seriesvalues;
  }

}
