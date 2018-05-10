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

}
