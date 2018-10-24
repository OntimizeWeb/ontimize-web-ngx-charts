import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { GaugeDashboardChartConfiguration } from './GaugeDashboardChartConfiguration.class';

export class GaugeDashboardChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof GaugeDashboardChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new GaugeDashboardChartConfiguration();
    }

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: params.duration,
      donut: params.donut,
      donutRatio: params.donutRatio,
      showLabels: params.showLabels,
      showLegend: params.showLegend,
      titleOffset: params.titleOffset,
      title: params.title,
      color: params.colors,
      x: function (d) { return d.x; },
      y: function (d) { return d.y; },
      pie: {
        startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
        endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
      }
    }

    return chart;
  }
}