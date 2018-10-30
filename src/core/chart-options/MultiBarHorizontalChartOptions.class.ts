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
    let conf = this.chartConf instanceof MultiBarHorizontalChartConfiguration ? this.chartConf : new MultiBarHorizontalChartConfiguration();
    conf.x1Axis.tickFormat = conf.xDataType ? this.getTickFormatter(conf.xDataType) : null;
    conf.y1Axis.tickFormat = conf.yDataType ? this.getTickFormatter(conf.yDataType) : null;

    conf.x1Axis.orient = 'left';

    let chart = {
      type: this.getChartType(),
      height: conf.height,
      width: conf.width,
      margin: conf.margin.getMarginOptions(),
      legend: conf.legend.getLegendOptions(),
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: conf.x1Axis.getAxisOptions(),
      yAxis: conf.y1Axis.getAxisOptions(),
      showControls: conf.showControls,
      showValues: conf.showValues,
      duration: conf.duration,
      stacked: conf.stacked,
      valuePadding: conf.valuePadding,
      groupSpacing: conf.groupSpacing,
      showLegend: conf.showLegend,
      showXAxis: conf.showXAxis,
      showYAxis: conf.showYAxis,
    };
    return chart;
  }

  protected getXValue() {
    return function (d) { return d.label; };
  }

  protected getYValue() {
    return function (d) {  return d.value; };
  }

}
