import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { MultiBarChartConfiguration } from '../models/options/MultiBarChartConfiguration.class';

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

  public adaptResult(data: any[]): any[] {
    const result: any[] = [];
    const params = this.chartConf as MultiBarChartConfiguration;

    if (data && data.length) {
      const seriesvalues = this.processSeriesValues(data);

      for (const date in seriesvalues) {
        if (seriesvalues.hasOwnProperty(date)) {
          const item = seriesvalues[date];
          const entry: any = {
            name: Number(date),
            series: []
          };

          for (const axis of this.yAxis) {
            const value = item[axis] || 0;
            entry.series.push({ name: axis, value: value });
          }

          result.push(entry);
        }
      }
    }
    return result;
  }

  public processSeriesValues(data: Object[]): Object {
    const seriesvalues = {};
    data.forEach((item: any, _index: number) => {
      const date = item[this.xAxis];
      if (!seriesvalues[date]) {
        seriesvalues[date] = {};
      }
      this.yAxis.forEach((axis: string, _axisIndex: number) => {
        seriesvalues[date][axis] = item[axis];
      });
    });
    return seriesvalues;
  }

}
