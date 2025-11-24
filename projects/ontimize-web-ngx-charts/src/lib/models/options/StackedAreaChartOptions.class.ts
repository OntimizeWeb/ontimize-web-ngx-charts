import { AbstractChartOptions } from './AbstractChartOptions.class';
import { StackedAreaChartConfiguration } from './StackedAreaChartConfiguration.class';

export class StackedAreaChartOptions extends AbstractChartOptions {

  protected getChartType() {
    return 'stackedAreaChart';
  }

  protected getChartOptions() {
    let conf = this.chartConf instanceof StackedAreaChartConfiguration ? this.chartConf : new StackedAreaChartConfiguration();


    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      noData: conf.noDataMessage
    };

    return chart;
  }
}