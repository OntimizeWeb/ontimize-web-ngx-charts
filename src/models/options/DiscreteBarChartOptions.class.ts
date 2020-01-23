import { AbstractChartOptions } from './AbstractChartOptions.class';
import { DiscreteBarChartConfiguration } from './DiscreteBarChartConfiguration.class';

export class DiscreteBarChartOptions extends AbstractChartOptions {

  protected getChartType(): string {
    return 'discreteBarChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof DiscreteBarChartConfiguration ? this.chartConf : new DiscreteBarChartConfiguration;
    conf.x1Axis.tickFormat = this.getTickFormatter(conf.xDataType) || conf.xDataType;
    conf.y1Axis.tickFormat = this.getTickFormatter(conf.yDataType) || conf.yDataType;
    const valueFormat = this.getTickFormatter(conf.valueType) || conf.valueType;

    let options = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: conf.width,
      margin: conf.margin.getMarginOptions(),
      x: this.getXValue(),
      y: this.getYValue(),
      duration: conf.duration,
      showValues: conf.showValues,
      staggerLabels: conf.staggerLabels,
      rotateLabels: conf.rotateLabels,
      wrapLabels: conf.wrapLabels,
      showXAxis: conf.showXAxis,
      showYAxis: conf.showYAxis,
      showLegend: conf.showLegend,
      rightAlignYAxis: conf.rightAlingYAxis,
      legend: conf.legend.getLegendOptions(),
      xAxis: conf.x1Axis.getAxisOptions(),
      yAxis: conf.y1Axis.getAxisOptions(),
      valueFormat: valueFormat,
      noData: conf.noDataMessage
    };
    return options;
  }

}
