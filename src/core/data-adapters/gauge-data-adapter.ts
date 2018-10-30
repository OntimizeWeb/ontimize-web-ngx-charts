import { ChartDataAdapter } from '../../interfaces';
import { ChartConfiguration } from '../ChartConfiguration.class'

export class GaugeDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string;


  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : 'x';
      if (this.chartConf.yAxis && this.chartConf.yAxis[0])
        this.yAxis = this.chartConf.yAxis[0];
    }
  }

  adaptResult(data: Array<any>) {
    let values = [];
    if (data.length === 1) {
      let item = data.pop();
      let value;
      if (item[this.yAxis])
        value = item[this.yAxis];
      let other = 100 - value;
      values.push({
        'x': item[this.xAxis],
        'y': value
      });
      values.push({
        'x': 'other',
        'y': other
      });
    }
    else if (data.length === 2) {
      let item1 = data.pop();
      let item2 = data.pop();
      let value1;
      let value2;
      let label1;
      let label2;
      if (item1[this.xAxis]) {
        value1 = item1[this.xAxis];
      }
      if (item2[this.xAxis]) {
        value2 = item2[this.xAxis];
      }
      if (item1[this.yAxis]) {
        label1 = item1[this.yAxis];
      }
      if (item2[this.yAxis]) {
        label2 = item2[this.yAxis];
      }
      if (value1 && value2 && label1 && label2) {
        if ((item1 + item2) === 1) {
          item1 = item1 * 100;
          item2 = item2 * 100;
        }
        if ((item1 + item2) === 100) {
          values.push({
            'x': label1,
            'y': value1
          });
          values.push({
            'x': label2,
            'y': value2
          });
        }
      }
    }

    return values;
  }

}