import { ChartDataAdapter } from '../interfaces';
import { ChartConfiguration, GaugeSimpleChartConfiguration } from '../models';

export class GaugeSimpleDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : 'x';
      this.yAxis = this.chartConf.yAxis ? this.chartConf.yAxis.pop() : 'y';
    }
  }

  adaptResult(data: Array<any>) {
    let dataAdapt = [];
    data.forEach((item: any, _index: number) => {
      if (item[this.yAxis]) {
        dataAdapt.push(item[this.yAxis]);
      }
    });
    if (dataAdapt.length > 1)
      dataAdapt = [];
    if (this.chartConf instanceof GaugeSimpleChartConfiguration && this.chartConf.max) {
      if (dataAdapt[0] > this.chartConf.max) {
        dataAdapt = [];
      }
    }
    if (this.chartConf instanceof GaugeSimpleChartConfiguration && this.chartConf.min) {
      if (dataAdapt[0] < this.chartConf.min) {
        dataAdapt = [];
      }
    }
    return dataAdapt;
  }

}
