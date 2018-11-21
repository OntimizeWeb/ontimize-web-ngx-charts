import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { LinePlusBarFocusChartConfiguration } from './LinePlusBarFocusChartConfiguration.class';

export class LinePlusBarFocusChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }


  protected getChartType(): string {
    return 'linePlusBarChart';
  }

  protected getChartOptions(): Object {
    let conf = this.chartConf instanceof LinePlusBarFocusChartConfiguration ? this.chartConf : new LinePlusBarFocusChartConfiguration();
    conf.x1Axis.tickFormat = conf.xDataType ? this.getTickFormatter(conf.xDataType) : null;
    conf.y1Axis.tickFormat = conf.yDataType ? this.getTickFormatter(conf.yDataType) : null;

    let chart = {
      type: this.getChartType(),
      height: conf.height,
      width: conf.width,
      x: this.getXValue(),
      y: this.getYValue(),
      color: conf.colors,
      xAxis: conf.x1Axis.getAxisOptions(),
      x2Axis: conf.x1Axis.getAxisOptions(),
      y1Axis: conf.y1Axis.getAxisOptions(),
      y2Axis: conf.y1Axis.getAxisOptions(),
      y3Axis: conf.y1Axis.getAxisOptions(),
      y4Axis: conf.y1Axis.getAxisOptions(),
      forceX: conf.forceX,
      forceY: conf.forceY,
      duration: conf.duration,
      margin: conf.margin.getMarginOptions(),
      switchYAxisOrder: conf.switchYAxisOrder,
      showLabels: conf.showLabels,
      showLegend: conf.showLegend,
      legend: conf.legend.getLegendOptions(),
      isArea: conf.isArea,
      interactive: conf.interactive,
      focusEnable: conf.focusEnable,
      focusShowAxisX: conf.focusShowAxisX,
      focusShowAxisY: conf.focusShowAxisY,
    };
    return chart;
  }

}
