import { ChartPoint, ChartDataAdapter } from '../../interfaces';
import {
  ChartConfiguration
} from '../../core';

export class PieDataAdapter implements ChartDataAdapter {

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

  adaptResult(data: Array<any>): Array<ChartPoint> {
    const values = [];
    const self = this;
    data.forEach((item: any, _index: number) => {
      let itemLabel = item[self.xAxis];
      if (self.chartConf.translateService) {
        itemLabel = self.chartConf.translateService.get(itemLabel);
      }
      const filtered = self.filterCategory(itemLabel, values);
      if (filtered && filtered.length === 0) {
        const val = {
          'x': itemLabel,
          'y': Math.abs(item[self.yAxis])
        };
        values.push(val);
      } else {
        filtered[0]['y'] += Math.abs(item[self.yAxis]);
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => (val['x'] === category));
    }
    return filtered;
  }
}
