import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { GaugeSpaceChartConfiguration } from './GaugeSpaceChartConfiguration.class';

export class GaugeSpaceChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof GaugeSpaceChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new GaugeSpaceChartConfiguration();
    }
    const outer = 1;
    const inner = 1 - params.arcsRadius;
    let arcsRadius = [
      { 'inner': inner, 'outer': outer },
      { 'inner': 1, 'outer': 1 }];
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
      color: [params.color]
    }

    return chart;
  }
}