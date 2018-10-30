import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import {  BubbleChartConfiguration } from './BubbleChartConfiguration.class';

export class BubbleChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  getChartType() {
    return 'packedBubbleChart';
  }

  getChartOptions() {
    let conf = (this.chartConf instanceof BubbleChartConfiguration) ? this.chartConf : new BubbleChartConfiguration();

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: 500,
      color: conf.color
    }

    return chart;
  }
}