import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from '../ChartConfiguration.class';
import { LinePlusBarFocusChartConfiguration } from './LinePlusBarFocusChartConfiguration.class';

export class LinePlusBarFocusChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'linePlusBarChart';
  }

  protected getChartOptions(): Object {
    let params = this.chartConf as LinePlusBarFocusChartConfiguration;
    if (params.xDataType) {
      this.selectTickFormatter(params.xDataType, params.xScale);
      params.x1Axis.tickFormat = this.getTickFormatter(params.xDataType);
    }
    if (params.yDataType) {
      this.selectTickFormatter(params.yDataType, params.yScale);
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
      height: params.height,
      width: params.width,
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: params.x1Axis.getAxisOptions(),
      yAxis: params.y1Axis.getAxisOptions(),
      xScale: params.xScale,
      yScale: params.yScale,
      switchYAxisOrder: params.switchYAxisOrder,
      showLabels: params.showLabels,
      showLegend: params.showLegend,
      legend: params.legend.getLegendOptions(),
      isArea: params.isArea,
      interactive: params.interactive,
      focusEnable: params.focusEnable,
      focusShowAxisX: params.focusShowAxisX,
      focusShowAxisY: params.focusShowAxisY
    };
    return chart;
  }
}
