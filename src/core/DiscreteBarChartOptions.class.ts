import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

// declare var d3: any;

export class DiscreteBarChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'discreteBarChart';
  }

  protected getChartOptions(): Object {
    let opt = super.getChartOptions();
    opt['showValues'] = true;
    opt['duration'] = 500;
    return opt;
  }

}
