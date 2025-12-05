import { AbstractChartOptions } from './AbstractChartOptions.class';
import { PieChartConfiguration } from './PieChartConfiguration.class';

export class PieChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    const conf = this.chartConf instanceof PieChartConfiguration ? this.chartConf : new PieChartConfiguration();


    const chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: conf.width,

      showLabels: conf.showLabels,

      legendPosition: conf.legendPosition,

      donut: conf.donut,
      donutRatio: conf.donutRatio,
      color: conf.color,

      callback: conf.callback,

      activeEntries: conf.activeEntries,
      gradient: conf.gradient
    };
    return chart;
  }

}
