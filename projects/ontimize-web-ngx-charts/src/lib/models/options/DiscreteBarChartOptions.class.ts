import { AbstractChartOptions } from './AbstractChartOptions.class';
import { DiscreteBarChartConfiguration } from './DiscreteBarChartConfiguration.class';

export class DiscreteBarChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'discreteBarChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof DiscreteBarChartConfiguration ? this.chartConf : new DiscreteBarChartConfiguration;

    let options = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),
    };
    return options;
  }

}
