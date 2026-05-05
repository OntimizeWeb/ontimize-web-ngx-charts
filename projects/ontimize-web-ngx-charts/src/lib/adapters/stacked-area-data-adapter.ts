import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { StackedAreaChartConfiguration } from '../models/options/StackedAreaChartConfiguration.class';

interface ChartDataPoint {
  name: string;
  value: number;
}

interface ChartSeries {
  name: string;
  series: ChartDataPoint[];
  color?: string;
}

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
    let config = this.chartConf as StackedAreaChartConfiguration;
    if (data && data.length) {
      let seriesValues = this.processSeriesValues(data);
      this.yAxis.forEach((axis: string, _index: number) => {
        let serie: ChartSeries = {
          name: axis,
          series: seriesValues[axis] || [], // Use the processed data for the series
        };
        if (config.color && config.color[_index]) {
          serie.color = config.color[_index];
        }
        let key = axis;
        if (config.translateService) {
          key = config.translateService.get(key);
        }
        serie.name = key;
        result.push(serie);
      });
    }
    return result;
  }

  processSeriesValues(data: Array<any>): { [key: string]: ChartDataPoint[] } {
    let seriesValues: { [key: string]: ChartDataPoint[] } = {};

    data.forEach((item: any, _index: number) => {
      this.yAxis.forEach((axis: string, _indexAxis: number) => {
        if (seriesValues[axis] === undefined) {
          seriesValues[axis] = [];
        }
        if (item[axis] !== undefined) {
          const dataPoint: ChartDataPoint = {
            name: item[this.xAxis] || '', // Use the correct property name and handle undefined
            value: item[axis] || 0, // Use 0 as the default value for undefined
          };
          seriesValues[axis].push(dataPoint);
        }
      });
    });
    return seriesValues;
  }
}
