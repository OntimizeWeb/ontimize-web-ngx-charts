import { ChartDataAdapter } from '../../interfaces';
import { ChartConfiguration } from '../ChartConfiguration.class'
import { GaugeChartConfiguration } from '../../core';
export class GaugeDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;
  protected xAxis: string;


  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
    }
  }

  adaptResult(data: Array<any>) {
    if (data.length > 1) {
      return [];
    }
    else {
      let values = [];
      data.forEach((item: any, _index: number) => {
        if (item[this.xAxis]) {
          values.push({
            key: this.xAxis,
            y: item[this.xAxis],
            color: '#2DB21F'
          })

          let val = 100 - item[this.xAxis];
          values.push({
            key: 'other',
            y: val,
            color: '#CC1E1E'
          })
        }
      });

      return values;
    }
  }

}