import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { BulletChartConfiguration } from './BulletChartConfiguration.class';

export class BulletChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'bulletChart';
  }

  protected getChartOptions(): Object {
    let params: BulletChartConfiguration;
    if (this.chartConf instanceof BulletChartConfiguration) {
      params = (this.chartConf as BulletChartConfiguration);
    } else {
      params = new BulletChartConfiguration();
    }
    if (params.xDataType) {
      params.tickFormat = this.getTickFormatter(params.xDataType);
    }

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      margin: params.margin.getMarginOptions(),
      duration: params.duration,
      ticks: params.ticks,
      tickFormat: params.tickFormat,
      orient: params.orient,
      ranges: this.getRanges(),
      measures: this.getMeasure(),
      markers: this.getMarkers()
    }
    return chart;
  }


  getRanges() {
    return function (d) {
      return d.ranges
    };
  }

  getMeasure() {
    return function (d) {
      return d.measures
    }
  }

  getMarkers() {
    return function (d) {
      return d.markers ? d.markers : []
    }
  }
}