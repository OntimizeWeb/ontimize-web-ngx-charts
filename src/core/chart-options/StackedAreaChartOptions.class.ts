import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { StackedAreaChartConfiguration } from './StackedAreaChartConfiguration.class';

export class StackedAreaChartOptions extends AbstractChartOptions {

  constructor(conf: ChartConfiguration) {
    super(conf);
  }

  protected getChartType() {
    return 'stackedAreaChart';
  }

  protected getChartOptions() {
    let params: StackedAreaChartConfiguration;
    if (this.chartConf instanceof StackedAreaChartConfiguration) {
      params = this.chartConf
    }
    else {
      params = new StackedAreaChartConfiguration();
    }
    if (!params.x1Axis.tickFormat && this.chartConf.xDataType) {
      params.x1Axis.tickFormat = this.getTickFormatter(this.chartConf.xDataType);
    }
    if (!params.y1Axis.tickFormat && this.chartConf.yDataType) {
      params.y1Axis.tickFormat = this.getTickFormatter(this.chartConf.yDataType);
    }

    let chart = {
      type: this.getChartType(),
      duration: 500,
      height: this.getChartHeight(),
      width: this.chartConf.width,
      x: this.getXValue(),
      y: this.getYValue(),
      xAxis: params.x1Axis.getAxisOptions(),
      showXAxis: params.showXAxis,
      yAxis: params.y1Axis.getAxisOptions(),
      showYAxis: params.showYAxis,
      rightAlignYAxis: params.rightAlignYAxis,
      legend: params.legend.getLegendOptions(),
      showLegend: params.showLegend,
      control: params.control.getChartControlConfiguration(),
      showControls: params.showControls,
      zoom: params.zoom.getZoomOptions(),
      useInteractiveGuideline: params.useInteractiveGuideline,
      style: params.style,
      interactive: params.interactive,
      useVoronoi: params.useVoronoi,
      showVoronoi: params.showVoronoi
    };

    return chart;
  }
}