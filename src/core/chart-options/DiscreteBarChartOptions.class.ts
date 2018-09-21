import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { DiscreteBarChartConfiguration } from './DiscreteBarChartConfiguration.class';

declare var d3: any;

export class DiscreteBarChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'discreteBarChart';
  }

  protected getChartOptions(): Object {
    let params = this.chartConf as DiscreteBarChartConfiguration;
    if (params.xDataType) {
      params.xAxis1.tickFormat = this.getTickFormatter(params.xDataType);
    }
    if (params.yDataType) {
      params.yAxis1.tickFormat = this.getTickFormatter(params.yDataType);
    }
    if (params.xLabel) {
      params.xAxis1.axisLabel = params.xLabel;
    }
    if (params.yLabel) {
      params.yAxis1.axisLabel = params.yLabel;
    }

    let options = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      width: params.width,
      margin: params.margin.getMarginOptions(),
      x: this.getXValue(),
      y: this.getYValue(),
      duration: params.duration,
      showValues: params.showValues,
      staggerLabels: params.staggerLabels,
      rotateLabels: params.rotateLabels,
      wrapLabels: params.wrapLabels,
      showXAxis: params.showXAxis,
      showYAxis: params.showYAxis,
      showLegend: params.showLegend,
      rightAlignYAxis: params.rightAlingYAxis,
      legend: params.legend.getLegendOptions(),
      xAxis: params.xAxis1.getAxisOptions(),
      yAxis: params.yAxis1.getAxisOptions()
    };
    return options;
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
