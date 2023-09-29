import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { LineChartConfiguration } from '../models/options/LineChartConfiguration.class';

interface CustomLineChartSeries extends LineChartSeries {
  area?: boolean;
  color?: string;
  strokeWidth?: number;
  classed?: string;
}

interface LineChartSeries {
  name: string;
  series: ChartDataPoint[];
}

interface ChartDataPoint {
  name?: Date;
  value?: number;
  x?: Date;
  y?: number;
}

export class LineDataAdapter implements ChartDataAdapter {
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

  public adaptResult(data: any[]): CustomLineChartSeries[] {
    const result: CustomLineChartSeries[] = [];
    const config = this.chartConf as LineChartConfiguration;
    if (data && data.length) {
      const adaptedData = this.adaptDataFormat(data);
      adaptedData.forEach(({ name, series }) => {
        const lineChartSeries: CustomLineChartSeries = {
          name: name,
          series: series.map(({ name: x, value: y }) => ({ x, y }))
        };

        const index = this.yAxis.indexOf(name);
        if (config.isArea?.[index]) {
          lineChartSeries.area = config.isArea[index];
        }
        if (config.color?.[index]) {
          lineChartSeries.color = config.color[index];
        }
        if (config.strokeWidth?.[index]) {
          lineChartSeries.strokeWidth = config.strokeWidth[index];
        }
        if (config.classed?.[index]) {
          lineChartSeries.classed = config.classed[index];
        }
        let key = name;
        if (config.translateService) {
          key = config.translateService.get(key);
        }
        lineChartSeries.name = key;

        result.push(lineChartSeries);
      });
    }
    return result;
  }

  private adaptDataFormat(data: any[]): { name: string; series: ChartDataPoint[] }[] {
    const seriesValues: { [key: string]: ChartDataPoint[] } = {};
    const self = this;
    data.forEach((item: any, _index: number) => {
      self.yAxis.forEach((axis: string, _indexAxis: number) => {
        if (!seriesValues[axis]) {
          seriesValues[axis] = [];
        }
        if (item[axis] !== undefined) {
          const dataPoint: ChartDataPoint = {
            name: new Date(item[self.xAxis]),
            value: item[axis]
          };
          seriesValues[axis].push(dataPoint);
        }
      });
    });

    return Object.keys(seriesValues).map(name => ({
      name,
      series: seriesValues[name]
    }));
  }
}
