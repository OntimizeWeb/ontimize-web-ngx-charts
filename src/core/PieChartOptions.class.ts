import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';

export class PieChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let opt = super.getChartOptions();
    opt['showLabels'] = true;
    opt['duration'] = 500;
    opt['labelThreshold'] = 0.01;
    opt['labelSunbeamLayout'] = true;
    return opt;
  }

}
