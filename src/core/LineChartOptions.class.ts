import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

declare var d3: any;

export class LineChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'lineChart';
  }

  protected getChartOptions(): Object {
    let opt = super.getChartOptions();
    opt['duration'] = 500;
    if (this.chartConf.xDataType === 'time') {
      var xScale = d3.time.scale();
      opt['xScale'] = xScale;
    }
    if (this.chartConf.yDataType === 'time') {
      var yScale = d3.time.scale();
      opt['yScale'] = yScale;
    }
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
