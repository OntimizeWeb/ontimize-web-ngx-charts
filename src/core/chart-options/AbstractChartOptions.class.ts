import { ChartConfiguration } from './ChartConfiguration.class';
import { OTranslateService } from 'ontimize-web-ngx';
import { D3LocaleOptions } from './D3LocaleOptions';

declare var d3: any;

export class AbstractChartOptions {

  protected chartConf: ChartConfiguration;
  protected type: string;
  protected d3Locale: D3LocaleOptions;

  constructor(chartConf: ChartConfiguration, protected translate: OTranslateService) {
    this.chartConf = chartConf;
    this.d3Locale = new D3LocaleOptions(this.translate);
    this.init(chartConf);
  }

  public init(chartConf: ChartConfiguration) {
    if (!chartConf) {
      console.error('Chart configuration not found!');
      return;
    }
    this.type = chartConf.type;
  }

  public getOptions(): Object {
    let opts = {
      chart: this.getChartOptions(),
    };
    return opts;
  }

  protected getChartOptions(): Object {
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: this.getXAxisConfiguration(),
      yAxis: this.getYAxisConfiguration()
    };
    return chart;
  }

  protected getChartType(): string {
    return this.type + 'Chart';
  }

  protected getChartHeight(): number {
    return this.chartConf.height ? this.chartConf.height : 450;
  }

  protected getXValue(): any {
    return function (d) { return d.x; };
  }

  protected getYValue(): any {
    return function (d) { return d.y; };
  }

  protected isArea(): any {
    return function (d) { return d.area; };
  }

  protected getXAxisConfiguration(): Object {
    let xAxis = {
      axisLabel: this.chartConf.xLabel ? this.chartConf.xLabel : ''
    };
    return xAxis;
  }

  protected getYAxisConfiguration(): Object {
    let yAxis = {
      axisLabel: this.chartConf.yLabel ? this.chartConf.yLabel : ''
    };
    return yAxis;
  }

  protected getTickFormatter(type: string) {
    let formatter;
    var format = d3.locale(this.d3Locale.getD3Options());
    switch (type) {
      case 'intAgrouped':
        formatter = function (d) {
          return format.numberFormat(',d')(d);
        }
        break;
      case 'floatAgrouped':
        formatter = function (d) {
          return format.numberFormat(',.02f')(d);
        }
        break;
      case 'int':
        formatter = function (d) {
          return format.numberFormat('d')(d);
        };
        break;
      case 'float':
        formatter = function (d) {
          return format.numberFormat('.02f')(d);
        };
        break;
      case 'time':
        formatter = function (d) {
          return format.timeFormat('%x')(new Date(d));
        };
        break;
      case 'timeDay':
        formatter = function (d) {
          return format.timeFormat('%H:%M:%S')(new Date(d));
        }
        break;
      case 'timeDetail':
        formatter = function (d) {
          return format.timeFormat('%x %H:%M:%S')(new Date(d));
        }
        break;
      case 'percentage':
        formatter = function (d) {
          return format.numberFormat(".0%")(d);
        };
        break;
    }

    return formatter;
  }
}
