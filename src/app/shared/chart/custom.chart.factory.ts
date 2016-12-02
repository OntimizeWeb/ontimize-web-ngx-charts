import { OChartFactory, ChartConfiguration } from 'ontimize-web-ng2-charts/o-chart';

export class CustomChartFactory extends OChartFactory {

  public createLineChartOptions(chartConf: ChartConfiguration): any {
    let opts = super.createLineChartOptions(chartConf);

    opts.chart['height'] = 200;

    return opts;
  }

}
