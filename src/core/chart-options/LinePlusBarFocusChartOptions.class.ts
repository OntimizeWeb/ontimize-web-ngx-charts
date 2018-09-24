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
    let params = this.chartConf as LinePlusBarFocusChartConfiguration;
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
      height: params.height,
      width: params.width,
      x: this.getXValue(),
      y: this.getYValue(),
      color: params.colors,
      xAxis: params.x1Axis.getAxisOptions(),
      x2Axis: params.x1Axis.getAxisOptions(),
      y1Axis: params.y1Axis.getAxisOptions(),
      y2Axis: params.y1Axis.getAxisOptions(),
      y3Axis: params.y1Axis.getAxisOptions(),
      y4Axis: params.y1Axis.getAxisOptions(),
      duration: params.duration,
      margin: params.margin.getMarginOptions(),
      switchYAxisOrder: params.switchYAxisOrder,
      showLabels: params.showLabels,
      showLegend: params.showLegend,
      legend: params.legend.getLegendOptions(),
      isArea: params.isArea,
      interactive: params.interactive,
      focusEnable: params.focusEnable,
      focusShowAxisX: params.focusShowAxisX,
      focusShowAxisY: params.focusShowAxisY,
    };
    return chart;
  }

  protected getTicksValues(data: Array<any>): Array<number> {
    let values = [];
    data.forEach((item: any, _index: number) => {
      values.push(item['x']);
    });
    return values;
  }

}
