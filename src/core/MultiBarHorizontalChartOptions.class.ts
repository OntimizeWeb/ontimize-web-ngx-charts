import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

// declare var d3: any;

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

}
