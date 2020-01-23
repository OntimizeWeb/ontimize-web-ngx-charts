import { AbstractChartOptions } from './AbstractChartOptions.class';
import { CandlestickChartConfiguration } from './CandlestickChartConfiguration.class';

export class CandlestickChartOptions extends AbstractChartOptions {

  getChartOptions() {
    let conf = this.chartConf instanceof CandlestickChartConfiguration ? this.chartConf : new CandlestickChartConfiguration;
    conf.x1Axis.tickFormat = this.getTickFormatter(conf.xDataType) || conf.xDataType;
    conf.y1Axis.tickFormat = this.getTickFormatter(conf.yDataType) || conf.yDataType;

    let chart = {
      type: this.getChartType(),
      height: conf.height,
      width: conf.width,
      x: this.getXValue(),
      y: this.getYValue(),
      low: this.getLow(),
      high: this.getHigh(),
      xAxis: conf.x1Axis.getAxisOptions(),
      yAxis: conf.y1Axis.getAxisOptions(),
      showXAxis: conf.showXAxis,
      showYAxis: conf.showYAxis,
      rightAlignYAxis: conf.rightAlignYAxis,
      legend: conf.legend.getLegendOptions(),
      showLegend: conf.showLegend,
      zoom: conf.zoom.getZoomOptions(),
      useInteractiveGuideline: conf.useInteractiveGuideline,
      padData: conf.padData,
      clipEdge: conf.clidEdge,
      noData: conf.noDataMessage
    };

    return chart;
  }

  getChartType() {
    return 'candlestickBarChart';
  }

  getLow() {
    return function (d) { return d.low; };
  }

  getHigh() {
    return function (d) { return d.high; };
  }

  getXValue() {
    return function (d) { return d['date']; };
  }

  getYValue() {
    return function (d) { return d['close']; };
  }
}
