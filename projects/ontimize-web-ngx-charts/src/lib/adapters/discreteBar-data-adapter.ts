import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';
import { DiscreteBarChartConfiguration } from '../models/options/DiscreteBarChartConfiguration.class';

interface ChartDataPoint {
  name: string;
  value: number;
}

export class DiscreteBarDataAdapter implements ChartDataAdapter {

  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      let yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis[0] : '';
    }
  }

  adaptResult(data: Array<any>): ChartDataPoint[] {
    const values: ChartDataPoint[] = [];
    const self = this;
    const params = this.chartConf as DiscreteBarChartConfiguration;
    data.forEach((item: any, _index: number) => {
      let itemLabel = item[self.xAxis];
      if (self.chartConf.translateService) {
        itemLabel = self.chartConf.translateService.get(itemLabel);
      }
      const filtered = self.filterCategory(itemLabel, values);
      if (params.agroup) {
        if (filtered && filtered.length === 0) {
          const val: ChartDataPoint = {
            'name': itemLabel,
            'value': item[self.yAxis]
          };
          values.push(val);
        } else {
          filtered[0]['value'] += item[self.yAxis];
        }
      } else {
        const val: ChartDataPoint = {
          'name': itemLabel,
          'value': item[self.yAxis]
        };
        values.push(val);
      }
    });

    return values;
  }

  filterCategory(category: string, values: ChartDataPoint[]): ChartDataPoint[] {
    let filtered: ChartDataPoint[] = [];
    if (values && values.length) {
      filtered = values.filter((val: ChartDataPoint) => val.name === category);
    }
    return filtered;
  }
}
