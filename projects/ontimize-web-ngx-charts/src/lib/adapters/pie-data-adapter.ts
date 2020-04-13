import { ChartPoint } from '../interfaces/ChartData.interface';
import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { PieChartConfiguration } from '../models/options/PieChartConfiguration.class';

export class PieDataAdapter<T extends ChartConfiguration> implements ChartDataAdapter {

  protected chartConf: T;
  protected xAxis: string;
  protected yAxis: string;

  constructor(chartConf: T) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      const yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis[0] : '';
    }
  }

  public adaptResult(data: any[]): ChartPoint[] {
    const values: ChartPoint[] = [];
    const self = this;
    data.forEach((item: any, _index: number) => {
      let itemLabel = item[self.xAxis];
      if (self.chartConf.translateService) {
        itemLabel = self.chartConf.translateService.get(itemLabel);
      }
      const filtered = self.filterCategory(itemLabel, values);
      if (filtered && filtered.length === 0) {
        const val: ChartPoint = {
          x: itemLabel,
          y: Math.abs(item[self.yAxis])
        };

        // Specify color for each value
        if (self.chartConf instanceof PieChartConfiguration) {
          const config = (self.chartConf as PieChartConfiguration);
          if (config.colorData && config.colorData.length) {
            const colorDataItem = config.colorData.find(c => c.value.toLowerCase() === item[self.xAxis].toLowerCase());
            if (colorDataItem) {
              val.color = colorDataItem.color;
            }
          }
        }

        values.push(val);
      } else {
        filtered[0].y += Math.abs(item[self.yAxis]);
      }
    });
    return values;
  }

  public filterCategory(category: string, values: ChartPoint[]): ChartPoint[] {
    let filtered: ChartPoint[] = [];
    if (values && values.length) {
      filtered = values.filter((val: ChartPoint) => (val.x === category));
    }
    return filtered;
  }

}
