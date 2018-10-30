import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { DiscreteBarChartConfiguration } from './DiscreteBarChartConfiguration.class';

export class DiscreteBarChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'discreteBarChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof DiscreteBarChartConfiguration ? this.chartConf : new DiscreteBarChartConfiguration;
    conf.x1Axis.tickFormat = conf.xDataType ? this.getTickFormatter(conf.xDataType) : null;
    conf.y1Axis.tickFormat = conf.yDataType ? this.getTickFormatter(conf.yDataType) : null;

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
      yAxis: conf.y1Axis.getAxisOptions()
    };
    return options;
  }

}
