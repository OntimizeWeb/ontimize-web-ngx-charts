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
    let params;
    if (this.chartConf instanceof BubbleChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new BubbleChartConfiguration();
    }

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: 500,
      color: params.color
    }

    return chart;
  }
}