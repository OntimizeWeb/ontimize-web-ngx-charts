import { OTranslateService } from 'ontimize-web-ngx';
import { ChartConfiguration } from './ChartConfiguration.class';
import { D3LocaleOptions } from './D3LocaleOptions';


export class AbstractChartOptions {

  protected chartConf: ChartConfiguration;
  protected type: string;
  protected d3Locale: D3LocaleOptions;

  constructor(chartConf: ChartConfiguration, protected translate: OTranslateService) {
    this.chartConf = chartConf;
    this.d3Locale = new D3LocaleOptions(this.translate);
    this.init(chartConf);
  }

  public init(chartConf: ChartConfiguration): void {
    if (!chartConf) {
      console.error('Chart configuration not found!');
      return;
    }
    this.type = chartConf.type;
  }

  public getOptions(): Object {
    return {
      chart: this.getChartOptions(),
    };
  }

  protected getChartOptions(): Object {
    return {
      type: this.getChartType(),
      height: this.getChartHeight(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: this.getXAxisConfiguration(),
      yAxis: this.getYAxisConfiguration(),
      noData : this.chartConf.noDataMessage
    };
  }

  protected getChartType(): string {
    return this.type + 'Chart';
  }

  protected getChartHeight(): number {
    return this.chartConf.height ? this.chartConf.height : 450;
  }

  protected getXValue(): Function {
    return d => d.x;
  }

  protected getYValue(): Function {
    return d => d.y;
  }

  protected isArea(): Function {
    return d => d.area;
  }

  protected getXAxisConfiguration(): Object {
    return {
      axisLabel: this.chartConf.xLabel ? this.chartConf.xLabel : ''
    };
  }

  protected getYAxisConfiguration(): Object {
    return {
      axisLabel: this.chartConf.yLabel ? this.chartConf.yLabel : ''
    };
  }

  getTickFormatter(type: string): any {
    switch (type) {
      case 'intGrouped':
        return d => d.toLocaleString();
      case 'floatGrouped':
        return d => d.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case 'int':
        return d => Math.round(d).toLocaleString();
      case 'float':
        return d => d.toFixed(2);
      case 'currency':
        return d => d.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
      case 'time':
        return d => new Date(d).toLocaleDateString();
      case 'timeDay':
        return d => new Date(d).toLocaleTimeString();
      case 'timeDetail':
        return d => new Date(d).toLocaleString();
      case 'percentage':
        return d => (d * 100).toFixed(0) + '%';
      default:
        if (typeof type === 'function') {
          return type;
        }
        return void 0;
    }
  }

}
