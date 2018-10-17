import { ChartDataAdapter } from '../../interfaces';
import { BulletChartConfiguration } from '../chart-options/BulletChartConfiguration.class';
import { ChartConfiguration } from '../ChartConfiguration.class'
export class BulletDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
    }
  }

  adaptResult(data: Array<any>) {
    let result = {};
    let markers = [];
    let ranges = [];
    let measures = [];


    data.forEach((item: any, _index: number) => {
      if (item['marker']) {
        markers.push(item['marker']);
      }
      else if (item['range']) {
        ranges.push(item['range']);
      }
      else if (item['measure']) {
        measures.push(item['measure']);
      }
    });

    if (this.chartConf instanceof BulletChartConfiguration) {
      if (this.chartConf.title) {
        result['title'] = this.chartConf.title;
      }
      if (this.chartConf.subtitle) {
        result['subtitle'] = this.chartConf.subtitle;
      }
    }

    result['markers'] = markers;
    result['measures'] = measures;
    result['ranges'] = ranges;

    return result;
  }
}