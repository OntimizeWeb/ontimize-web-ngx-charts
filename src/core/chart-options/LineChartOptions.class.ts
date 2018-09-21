import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { LineChartConfiguration } from './LineChartConfiguration.class';

declare var d3: any;

export class LineChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'lineChart';
  }

  protected getChartOptions(): Object {
    let params;
    if (this.chartConf instanceof LineChartConfiguration) {
      params = this.chartConf;
    } else {
      params = new LineChartConfiguration();
    }
    if (params.xDataType) {
      params.xAxis1.tickFormat = this.getTickFormatter(this.chartConf.xDataType);
    }
    if (params.yDataType) {
      params.yAxis1.tickFormat = this.getTickFormatter(this.chartConf.yDataType);
    }
    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: params.xAxis1.getAxisOptions(),
      yAxis: params.yAxis1.getAxisOptions(),
      height: this.getChartHeight(),
      margin: params.margin.getMarginOptions(),
      duration: params.duration,
      legend: params.legend,
      legendPosition: params.legendPosition,
      showLegend: params.showLegend,
      showXAxis: params.showXAxis,
      interactive: params.interactive,
      isArea: this.isArea(),
      showYAxis: params.showYAxis,
      focusEnable: params.focusEnable,
      focusShowAxisX: params.focusShowAxisX,
      focusShowAxisY: params.focusShowAxisY,
      rightAlignYAxis: params.rightAlignYAxis,
      useInteractiveGuideline: params.useInteractiveGuideline,
    };
    return chart;
  }

  protected getXAxisConfiguration(): Object {
    let xAxis = super.getXAxisConfiguration();
    if (this.chartConf.xDataType !== undefined) {
      xAxis['tickFormat'] = this.getTickFormatter(this.chartConf.xDataType);
    }
    return xAxis;
  }

  protected getYAxisConfiguration(): Object {
    let yAxis = super.getYAxisConfiguration();

    if (this.chartConf.yDataType !== undefined) {
      yAxis['tickFormat'] = this.getTickFormatter(this.chartConf.yDataType);
    }
    return yAxis;
  }

}
