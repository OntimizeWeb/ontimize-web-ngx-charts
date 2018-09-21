import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { LinePlusBarFocusChartConfiguration } from './LinePlusBarFocusChartConfiguration.class';
import { ChartSeries } from '../../interfaces/ChartData.interface';
//import * as d3 from 'd3';

//declare var d3: any;

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
      duration: 350,
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

  protected getTicksValues(data: Array<any>): Array<number> {
    let values = [];
    data.forEach((item: any, _index: number) => {
      values.push(item['x']);
    });
    return values;
  }

  protected getXScale() {
    let scale = d3.time.scale.utc();
    return scale
      .domain(this.getXDomain())
      .range(this.getXRange())
      .ticks(this.getTicksValues((this.chartConf.data[0] as ChartSeries).values).length);
  }

  protected getXDomain() {
    let domain = [this.getTicksValues((this.chartConf.data[0] as ChartSeries).values)[0], this.getTicksValues((this.chartConf.data[0] as ChartSeries).values)[length - 1]];
    return domain;
  }

  protected getXRange() {
    return [0, Number.parseInt(d3.time.day.toString())];
  }
}
