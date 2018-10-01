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
    let params = this.chartConf as LineChartConfiguration;
    if (params.xDataType) {
      params.xAxis1.tickFormat = this.getTickFormatter(this.chartConf.xDataType);
    }
    if (params.yDataType) {
      params.yAxis1.tickFormat = this.getTickFormatter(this.chartConf.yDataType);
    }
    if (params.xLabel) {
      params.xAxis1.axisLabel = params.xLabel;
    }
    if (params.yLabel) {
      params.yAxis1.axisLabel = params.yLabel;
    }
    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: params.xAxis1.getAxisOptions(),
      x2Axis: params.xAxis1.getAxisOptions(),
      yAxis: params.yAxis1.getAxisOptions(),
      y2Axis: params.yAxis1.getAxisOptions(),
      height: this.getChartHeight(),
      width: params.width,
      margin: params.margin.getMarginOptions(),
      duration: params.duration,
      useInteractiveGuideline: params.useInteractiveGuideline,
      interactive: params.interactive,
      isArea: this.isArea(),
      legend: params.legend,
      legendPosition: params.legendPosition,
      showLegend: params.showLegend,
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
      rightAlignYAxis: params.rightAlignYAxis,
      focusEnable: params.focusEnable,
      focusShowAxisX: params.focusShowAxisX,
      focusShowAxisY: params.focusShowAxisY
    };
    return chart;
  }

}
