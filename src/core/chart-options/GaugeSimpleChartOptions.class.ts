import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { GaugeSimpleChartConfiguration } from './GaugeSimpleChartConfiguration.class';

export class GaugeSimpleChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'gaugeChart';
  }


  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof GaugeSimpleChartConfiguration) {
      params = this.chartConf;
    }
    else {
      params = new GaugeSimpleChartConfiguration();
    }
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: this.chartConf.width,
      duration: params.duration,
      color: params.color,
      title: params.title,
      showMinMaxLabels: params.showMinMaxLabels,
      min: params.min,
      max: params.max,
      zoneLimit1: params.zoneLimit1,
      zoneLimit2: params.zoneLimit2
    }

    return chart;
  }
}