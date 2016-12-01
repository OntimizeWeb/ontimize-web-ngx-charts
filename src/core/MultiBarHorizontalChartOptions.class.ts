import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

declare var d3: any;

export class MultiBarHorizontalChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'multiBarHorizontalChart';
  }

  protected getChartOptions(): Object {
    let opt = super.getChartOptions();
    opt['showControls'] = true;
    opt['stacked'] = true;
    opt['showValues'] = true;
    opt['duration'] = 500;
    return opt;
  }

  protected getXAxisConfiguration(): Object {
    let xAxis = super.getXAxisConfiguration();
    if (this.chartConf.xDataType !== undefined) {
      xAxis['tickFormat'] = this.getTickFormatter(this.chartConf.xDataType);
    }
    return xAxis;
  }

  protected getYAxisConfiguration(): Object {
    let yAxis = super.getYAxisConfiguration();

    if (this.chartConf.yDataType !== undefined) {
      yAxis['tickFormat'] = this.getTickFormatter(this.chartConf.yDataType);
    }
    return yAxis;
  }

}
