import { AbstractChartOptions } from './AbstractChartOptions.class';
import { MultiBarHorizontalChartConfiguration } from './MultiBarHorizontalChartConfiguration.class';

export class MultiBarHorizontalChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'multiBarHorizontalChart';
  }

  protected getChartOptions(): Object {
    const conf = this.chartConf instanceof MultiBarHorizontalChartConfiguration ? this.chartConf : new MultiBarHorizontalChartConfiguration();


    const chart = {
      type: this.getChartType(),
      height: conf.height,
      width: conf.width
    };
    return chart;
  }

}
