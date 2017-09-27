import { OChartFactory, ChartConfiguration } from 'ontimize-web-ngx-charts';

export class CustomChartFactory extends OChartFactory {

  public createLineChartOptions(chartConf: ChartConfiguration): any {
    let opts = super.createLineChartOptions(chartConf);

    opts.chart['height'] = 200;

    return opts;
  }

}
