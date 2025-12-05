import { AbstractChartOptions } from './AbstractChartOptions.class';
import { LineChartConfiguration } from './LineChartConfiguration.class';

export class LineChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'lineChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof LineChartConfiguration ? this.chartConf : new LineChartConfiguration;


    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),

    };
    return chart;
  }

}
