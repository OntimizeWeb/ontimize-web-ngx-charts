import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { RadialPercentChartConfiguration } from './RadialPercentChartConfiguration.class';

export class RadialPercentChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof RadialPercentChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new RadialPercentChartConfiguration();
    }
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: params.duration,
      donut: params.donut,
      arcsRadius: params.arcsRadius,
      showLabels: params.showLabels,
      showLegend: params.showLegend,
      titleOffset: params.titleOffset,
      title: params.title,
      growOnHover: params.growOnHover,
      x: function (d) { return d.x; },
      y: function (d) { return d.y; },
      color: params.color
    }

    return chart;
  }
}