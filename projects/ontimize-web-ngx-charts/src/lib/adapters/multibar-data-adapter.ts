import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { MultiBarChartConfiguration } from '../models/options/MultiBarChartConfiguration.class';
interface ChartDataPoint {
  name: string;
  value: number;
}

interface ChartSeries {
  name: string;
  series: ChartDataPoint[];
}
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
      const seriesValues = this.processSeriesValues(data);
      const self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        const seriesDataPoints: ChartDataPoint[] = [];
        seriesValues[axis].forEach((item: any, _pointIndex: number) => {
          const dataPoint: ChartDataPoint = {
            name: item.x,
            value: item.y
          };
          seriesDataPoints.push(dataPoint);
        });

        const serie: ChartSeries = {
          name: axis,
          series: seriesDataPoints
        };

        if (params.color && params.color[_index]) {
          serie['color'] = params.color[_index];
        }

        let key = axis;
        if (self.chartConf.translateService) {
          key = self.chartConf.translateService.get(key);
        }
        serie.name = key;

        result.push(serie);
      });
    }
    return result;
  }

  public processSeriesValues(data: Object[]): Object {
    const seriesValues = {};
    const self = this;
    data.forEach((item: any, _index: number) => {
      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesValues[axis] === undefined) {
          seriesValues[axis] = [];
        }
        const val = {
          x: item[self.xAxis],
          y: item[axis]
        };
        seriesValues[axis].push(val);
      });
    });
    return seriesValues;
  }
}
