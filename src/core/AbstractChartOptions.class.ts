import { ChartConfiguration } from './ChartConfiguration.class';

declare var d3: any;

export class AbstractChartOptions {

  public static DEFAULT_TOP_MARGIN: number = 20;
  public static DEFAULT_BOTTOM_MARGIN: number = 40;
  public static DEFAULT_RIGHT_MARGIN: number = 40;
  public static DEFAULT_LEFT_MARGIN: number = 60;

  public static DEFAULT_FLOAT_FORMAT = '.02f';
  public static DEFAULT_TIME_FORMAT = '%x';

  private static VALID_TIME_FORMATS = [
    '%a', // - abbreviated weekday name.
    '%A', // - full weekday name.
    '%b', // - abbreviated month name.
    '%B', // - full month name.
    '%c', // - date and time, as "%a %b %e %H:%M:%S %Y".
    '%d', // - zero-padded day of the month as a decimal number [01,31].
    '%e', // - space-padded day of the month as a decimal number [ 1,31]; equivalent to %_d.
    '%H', // - hour (24-hour clock) as a decimal number [00,23].
    '%I', // - hour (12-hour clock) as a decimal number [01,12].
    '%j', // - day of the year as a decimal number [001,366].
    '%m', // - month as a decimal number [01,12].
    '%M', // - minute as a decimal number [00,59].
    '%L', // - milliseconds as a decimal number [000, 999].
    '%p', // - either AM or PM.
    '%S', // - second as a decimal number [00,61].
    '%U', // - week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
    '%w', // - weekday as a decimal number [0(Sunday),6].
    '%W', // - week number of the year (Monday as the first day of the week) as a decimal number [00,53].
    '%x', // - date, as "%m/%d/%Y".
    '%X', // - time, as "%H:%M:%S".
    '%y', // - year without century as a decimal number [00,99].
    '%Y', // - year with century as a decimal number.
    '%Z', // - time zone offset, such as "-0700".
    '%%'  // - a literal "%" character.
  ];

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
      chart: this.getChartOptions()
    };
    return opts;
  }

  protected getChartOptions(): Object {
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      margin: this.getChartMargins(),
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

  protected getChartMargins() {
    let margins = {
      top: AbstractChartOptions.DEFAULT_TOP_MARGIN,
      right: AbstractChartOptions.DEFAULT_RIGHT_MARGIN,
      bottom: AbstractChartOptions.DEFAULT_BOTTOM_MARGIN,
      left: AbstractChartOptions.DEFAULT_LEFT_MARGIN,
    };
    return margins;
  }

  protected getXValue(): any {
    return function (d) { return d.x; };
  }

  protected getYValue(): any {
    return function (d) { return d.y; };
  }

  protected getXAxisConfiguration(): Object {
    let xAxis = {
      axisLabel: this.chartConf.xLabel ? this.chartConf.xLabel : ''
    };
    if (this.chartConf.xDataType !== undefined) {
      xAxis['tickFormat'] = this.getTickFormatter(this.chartConf.xDataType, this.chartConf.xDataFormat);
    }
    return xAxis;
  }

  protected getYAxisConfiguration(): Object {
    let yAxis = {
      axisLabel: this.chartConf.yLabel ? this.chartConf.yLabel : ''
    };
    if (this.chartConf.yDataType !== undefined) {
      yAxis['tickFormat'] = this.getTickFormatter(this.chartConf.yDataType, this.chartConf.yDataFormat);
    }
    return yAxis;
  }

  protected getTickFormatter(type: string, format?: any) {
    let formatter;

    switch (type) {
      case 'int':
        formatter = function (d) {
          return d3.format('d')(d);
        };
        break;
      case 'float':
        formatter = function (d) {
          let floatValue = undefined;
          if (format !== undefined) {
            floatValue = parseFloat(d3.format(format)(d));
            if (isNaN(floatValue)) {
              floatValue = undefined;
            }
          }
          if (floatValue === undefined) {
            floatValue = d3.format(AbstractChartOptions.DEFAULT_FLOAT_FORMAT)(d);
          }
          return floatValue;
        };
        break;
      case 'time':
        formatter = function (d) {
          const dFormat = AbstractChartOptions.VALID_TIME_FORMATS.indexOf(format) !== -1 ?
            format : AbstractChartOptions.DEFAULT_TIME_FORMAT;
          return d3.time.format(dFormat)(new Date(d));
        };
        break;
    }
    return formatter;
  }

}
