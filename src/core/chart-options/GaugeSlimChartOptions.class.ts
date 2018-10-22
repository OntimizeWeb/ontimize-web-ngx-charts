import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { GaugeSlimChartConfiguration } from './GaugeSlimChartConfiguration.class';

export class GaugeSlimChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof GaugeSlimChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new GaugeSlimChartConfiguration();
    }
    const outer = 1;
    const inner = 1 - params.arcsRadius;
    let arcsRadius = [
      { 'inner': inner, 'outer': outer },
      { 'inner': inner, 'outer': outer }];
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: params.duration,
      donut: params.donut,
      arcsRadius: arcsRadius,
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