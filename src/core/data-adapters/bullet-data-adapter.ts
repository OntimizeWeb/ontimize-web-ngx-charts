import { ChartDataAdapter } from '../../interfaces';
import { BulletChartConfiguration } from '../chart-options/BulletChartConfiguration.class';
import { ChartConfiguration } from '../ChartConfiguration.class'
export class BulletDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;
  protected rangesAxis: string;
  protected markersAxis: string;
  protected measuresAxis: string;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      if (chartConf instanceof BulletChartConfiguration) {
        this.rangesAxis = chartConf.rangesAxis ? chartConf.rangesAxis : 'range';
        this.markersAxis = chartConf.markersAxis ? chartConf.markersAxis : 'marker';
        this.measuresAxis = chartConf.measuresAxis ? chartConf.measuresAxis : 'measure';
      }
    }
  }

  adaptResult(data: Array<any>) {
    let result = {};
    let markers = [];
    let ranges = [];
    let measures = [];


    data.forEach((item: any, _index: number) => {
      if (item[this.markersAxis]) {
        markers.push(item[this.markersAxis]);
      }
      else if (item[this.rangesAxis]) {
        ranges.push(item[this.rangesAxis]);
      }
      else if (item[this.measuresAxis]) {
        measures.push(item[this.measuresAxis]);
      }
    });

    if (this.chartConf instanceof BulletChartConfiguration) {
      result['title'] = this.chartConf.title ? this.chartConf.title : '';
      result['subtitle'] = this.chartConf.subtitle ? this.chartConf.subtitle : '';
    }

    ranges.sort((a, b) => (a > b) ? 1 : (b > a) ? -1 : 0);
    markers.sort((a, b) => (a > b) ? 1 : (b > a) ? -1 : 0);

    result['markers'] = markers;
    result['measures'] = measures;
    result['ranges'] = ranges;

    return result;
  }
}