import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from '../ChartConfiguration.class';
import { MultiBarHorizontalChartConfiguration } from './MultiBarHorizontalChartConfiguration.class';

declare var d3: any;

export class MultiBarHorizontalChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'multiBarHorizontalChart';
  }

  protected getChartOptions(): Object {
    let params = this.chartConf as MultiBarHorizontalChartConfiguration;
    if(params.xDataType){
      this.selectTickFormatter(params.xDataType, params.xScale);
      params.axisX.tickFormat = this.getTickFormatter(params.xDataType);
    }
    if(params.yDataType){
      this.selectTickFormatter(params.yDataType, params.yScale);
      params.axisY.tickFormat = this.getTickFormatter(params.yDataType);
    }
    if(params.xLabel){
      params.axisX.axisLabel = params.xLabel;
    }
    if(params.yLabel){
      params.axisY.axisLabel = params.yLabel;
    }

    let chart = {
      type: this.getChartType(),
      height: params.height,
      x: this.getXValue(),
      y: this.getYValue(),
      legend: params.legend.getLegendOptions(),
      xAxis: params.axisX.getAxisOptions(),
      yAxis: params.axisY.getAxisOptions(),
      showControls: params.showControls,
      showValues: params.showValues,
      duration: params.duration,
      stacked: params.stacked,
      valuePadding: params.valuePadding,
      groupSpacing: params.groupSpacing,
      showLegend: params.showLegend,
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
      xScale: params.xScale,
      yScale: params.yScale,
    }
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
