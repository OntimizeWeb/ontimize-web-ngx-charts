import { AdaptedDataItem } from '../interfaces/ChartData.interface';
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

  public adaptResult(data: any[]): AdaptedDataItem[] {
    const adaptedData: AdaptedDataItem[] = [];
    const self = this;
    data.forEach((item: any, _index: number) => {
      let itemLabel = item[self.xAxis];
      if (self.chartConf.translateService) {
        itemLabel = self.chartConf.translateService.get(itemLabel);
      }

      const filtered = self.filterCategory(itemLabel, adaptedData);
      const value = Math.abs(item[self.yAxis]);

      if (filtered && filtered.length === 0) {
        const adaptedItem: AdaptedDataItem = {
          name: itemLabel,
          value: value
        };

        // Specify color for each value
        if (self.chartConf instanceof PieChartConfiguration) {
          const config = (self.chartConf as PieChartConfiguration);
          if (config.colorData && config.colorData.length) {
            const colorDataItem = config.colorData.find(c => c.value.toLowerCase() === item[self.xAxis].toLowerCase());
            if (colorDataItem) {
              adaptedItem.color = colorDataItem.color;
            }
          }
        }

        adaptedData.push(adaptedItem);
      } else {
        filtered[0].value += value;
      }
    });
    return adaptedData;
  }

  public filterCategory(category: string, data: AdaptedDataItem[]): AdaptedDataItem[] {
    return data.filter((item: AdaptedDataItem) => item.name === category);
  }
}
