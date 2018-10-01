import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { MultiBarHorizontalChartConfiguration } from './MultiBarHorizontalChartConfiguration.class';

export class MultiBarHorizontalChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'multiBarHorizontalChart';
  }

  protected getChartOptions(): Object {
    const params = this.chartConf as MultiBarHorizontalChartConfiguration;
    if (params.xDataType) {
      params.x1Axis.tickFormat = this.getTickFormatter(params.xDataType);
    }
    if (params.yDataType) {
      params.y1Axis.tickFormat = this.getTickFormatter(params.yDataType);
    }
    if (params.xLabel) {
      params.x1Axis.axisLabel = params.xLabel;
    }
    if (params.yLabel) {
      params.y1Axis.axisLabel = params.yLabel;
    }
    params.x1Axis.orient = 'left';

    let chart = {
      type: this.getChartType(),
      height: params.height,
      width: params.width,
      margin: params.margin.getMarginOptions(),
      legend: params.legend.getLegendOptions(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: params.x1Axis.getAxisOptions(),
      yAxis: params.y1Axis.getAxisOptions(),
      showControls: params.showControls,
      showValues: params.showValues,
      duration: params.duration,
      stacked: params.stacked,
      valuePadding: params.valuePadding,
      groupSpacing: params.groupSpacing,
      showLegend: params.showLegend,
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
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

  protected getXValue() {
    return function (d) { return d.label; };
  }

  protected getYValue() {
    return function (d) {  return d.value; };
  }

}
