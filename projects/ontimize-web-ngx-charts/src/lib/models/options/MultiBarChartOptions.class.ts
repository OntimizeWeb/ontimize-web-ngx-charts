import { AbstractChartOptions } from './AbstractChartOptions.class';
import { MultiBarChartConfiguration } from './MultiBarChartConfiguration.class';

export class MultiBarChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'multiBarChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof MultiBarChartConfiguration ? this.chartConf : new MultiBarChartConfiguration();

    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),

    };
    return chart;
  }

}
