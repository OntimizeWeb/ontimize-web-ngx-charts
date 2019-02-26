import { ChartDataAdapter, ChartSeries } from '../interfaces';
import { ChartConfiguration, MultiBarChartConfiguration } from '../models';

export class MultiBarDataAdapter implements ChartDataAdapter {

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
    const params = this.chartConf as MultiBarChartConfiguration;
    if (data && data.length) {
      const seriesvalues = this.processSeriesValues(data);
      const self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        const serie: ChartSeries = {
          key: 'series',
          values: []
        };
        if (params.color && params.color[_index]) {
          serie.color = params.color[_index];
        }
        let key = axis;
        if (self.chartConf.translateService) {
          key = self.chartConf.translateService.get(key);
        }
        serie.key = key;
        seriesvalues[axis].sort((a, b) => (a.x > b.x) ? 1 : (b.x > a.x) ? -1 : 0);
        serie.values = seriesvalues[axis];

        result.push(serie);
      });
    }
    return result;
  }

  public processSeriesValues(data: Object[]): Object {
    const seriesvalues = {};
    const self = this;
    data.forEach((item: any, _index: number) => {

      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesvalues[axis] === undefined) {
          seriesvalues[axis] = [];
        }
        const val = {
          x: item[self.xAxis],
          y: item[axis]
        };
        seriesvalues[axis].push(val);
      });
    });
    return seriesvalues;
  }

}
