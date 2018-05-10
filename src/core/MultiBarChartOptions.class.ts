import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

// declare var d3: any;

export class MultiBarChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'multiBarChart';
  }

  protected getChartOptions(): Object {
    let opt = super.getChartOptions();
    opt['clipEdge'] = true;
    opt['stacked'] = true;
    opt['duration'] = 500;
    return opt;
  }

}
