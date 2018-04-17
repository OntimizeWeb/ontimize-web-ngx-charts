import { ChartPoint, ChartDataAdapter } from '../../interfaces';
import {
  ChartConfiguration
} from '../../core';

export class PieDataAdapter implements ChartDataAdapter {

  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string;

  constructor(chartConf: ChartConfiguration) {
     if(chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      let yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis[0] : '';
    }
  }

  adaptResult(data: Array<any>): Array<ChartPoint> {
    let result: Array<ChartPoint> = [];
    if (data && data.length) {
      var self = this;
      data.forEach((item: any, _index: number) => {
        let x = item[self.xAxis];
        if(self.chartConf.translateService) {
          x = self.chartConf.translateService.get(x);
        }
        let val = {
          'x': x,
          'y': item[self.yAxis]
        };
        result.push(val);
      });
    }
    return result;
  }
}
