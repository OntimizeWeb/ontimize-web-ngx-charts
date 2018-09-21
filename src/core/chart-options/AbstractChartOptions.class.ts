import { ChartConfiguration } from './ChartConfiguration.class';

declare var d3: any;

export class AbstractChartOptions {

  protected chartConf: ChartConfiguration;
  protected type: string;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
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

    switch (type) {
      case 'int':
        formatter = function (d) {
          return d3.format('d')(d);
        };
        break;
      case 'float':
        formatter = function (d) {
          return d3.format('.02f')(d);
        };
        break;
      case 'time':
        formatter = function (d) {
          return d3.time.format('%x')(new Date(d));
        };
        break;
    }

    return formatter;
  }
}
