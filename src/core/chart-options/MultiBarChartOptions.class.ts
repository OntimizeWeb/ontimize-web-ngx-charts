import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { MultiBarChartConfiguration } from './MultiBarChartConfiguration.class';

export class MultiBarChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'multiBarChart';
  }

  protected getChartOptions(): Object {
    let params = (this.chartConf as MultiBarChartConfiguration);

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

    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),
      height: this.getChartHeight(),
      width: params.width,
      margin: params.margin.getMarginOptions(),
      legend: params.legend.getLegendOptions(),
      xAxis: params.x1Axis.getAxisOptions(),
      yAxis: params.y1Axis.getAxisOptions(),
      duration: params.duration,
      stacked: params.stacked,
      hideable: params.hideable,
      groupSpacing: params.groupSpacing,
      showLegend: params.showLegend,
      showControls: params.showControls,
      control: params.control.getChartControlConfiguration(),
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
      reduceXTicks: params.reduceXTicks,
      rotateLabels: params.rotateLabels,
      wrapLabels: params.wrapLabels,
      rightAlignYAxis: params.rightAlignYAxis,
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
