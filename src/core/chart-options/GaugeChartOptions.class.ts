import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { GaugeChartConfiguration } from './GaugeChartConfiguration.class';

export class GaugeChartOption extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof GaugeChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new GaugeChartConfiguration();
    }

    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      margin: params.margin.getMarginOptions(),
      duration: params.duration,
      donut: params.donut,
      donutRatio: params.donutRatio,
      showLabels: params.showLabels,
      showLegend: params.showLegend,
      titleOffset: params.titleOffset,
      title: params.title,
      x: function (d) { return d.key; },
      y: function (d) { return d.y; },
      pie: {
        startAngle: function (d) { return d.startAngle / 2 - Math.PI / 2 },
        endAngle: function (d) { return d.endAngle / 2 - Math.PI / 2 }
      }
    }

    return chart;
  }
}