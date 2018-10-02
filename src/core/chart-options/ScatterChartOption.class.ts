import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { ScatterChartConfiguration } from './ScatterChartConfiguration.class';

export class ScatterChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'scatterChart';
  }

  protected getChartOptions(): Object {
    let params = this.chartConf as ScatterChartConfiguration;
    if (params.xDataType) {
      params.xAxis1.tickFormat = this.getTickFormatter(params.xDataType);
    }
    if (params.yDataType) {
      params.yAxis1.tickFormat = this.getTickFormatter(params.yDataType);
    }
    let chart = {
      type: this.getChartType(),
      x: this.getXValue(),
      y: this.getYValue(),
      height: params.height,
      showDistX: params.showDistX,
      showDistY: params.showDistY,
      duration: params.duration,
      xAxis: params.xAxis1.getAxisOptions(),
      yAxis: params.yAxis1.getAxisOptions(),
      legend: params.legend.getLegendOptions(),
      rightAlignYAxis: params.rightAlignYAxis,
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
      showLegend: params.showLegend,
      margin: params.margin.getMarginOptions(),
      clipEdge: params.clipEdge,
      color: params.colors
    };
    return chart;
  }
}
