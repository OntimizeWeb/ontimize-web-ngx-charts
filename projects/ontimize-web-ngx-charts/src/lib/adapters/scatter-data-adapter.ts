import { ChartDataAdapter, ChartSeries } from '../interfaces';
import { ChartConfiguration, ScatterChartConfiguration } from '../models';

export class ScatterDataAdapter implements ChartDataAdapter {

  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string[];

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      const yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis : [];
    }
  }

  public adaptResult(data: any[]): ChartSeries[] {
    const result: ChartSeries[] = [];
    if (data && data.length) {
      const seriesvalues = this.processSeriesValues(data);
      const self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        const serie: ChartSeries = {
          key: 'series',
          values: []
        };
        let key = axis;
        if (self.chartConf.translateService) {
          key = self.chartConf.translateService.get(key);
        }
        serie.key = key;
        serie.values = seriesvalues[axis];

        result.push(serie);
      });
    }
    return result;
  }

  public processSeriesValues(data: Object[]): Object {
    const seriesvalues = {};
    const self = this;
    const params = this.chartConf as ScatterChartConfiguration;
    data.forEach((item: any, _index: number) => {

      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesvalues[axis] === undefined) {
          seriesvalues[axis] = [];
        }
        const val: any = {
          x: item[self.xAxis],
          y: item[axis]
        };
        if (params.shape && params.shape[_axisIndex]) {
          val.shape = params.shape[_axisIndex];
        }
        if (params.size && params.size[_axisIndex]) {
          val.size = params.size[_axisIndex];
        }
        if (params.color && params.color[_axisIndex]) {
          val.color = params.color[_axisIndex];
        }
        seriesvalues[axis].push(val);
      });
    });
    return seriesvalues;
  }

}
