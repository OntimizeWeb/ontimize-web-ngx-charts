import { AbstractChartOptions } from './AbstractChartOptions.class';
import { OHLCChartConfiguration } from './OHLCChartConfiguration.class';

export class OHLCChartOptions extends AbstractChartOptions {

  getChartType() {
    return 'ohlcBarChart';
  }

  getChartOptions() {
    let params = this.chartConf as OHLCChartConfiguration;
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
        low: this.getLow(),
        high: this.getHigh(),
        xAxis: params.x1Axis.getAxisOptions(),
        yAxis: params.y1Axis.getAxisOptions(),
        showXAxis: params.showXAxis,
        showYAxis: params.showYAxis,
        rightAlignYAxis: params.rightAlignYAxis,
        legend: params.legend.getLegendOptions(),
        showLegend: params.showLegend,
        zoom: params.zoom.getZoomOptions(),
        useInteractiveGuideline: params.useInteractiveGuideline,
        padData: params.padData,
        clipEdge: params.clidEdge
    };
    return chart;
  }


  getLow() {
    return function (d) { return d.low; };
  }

  getHigh() {
    return function (d) { return d.high; };
  }

  getXValue() {
    return function (d) { return d.date; };
  }

  getYValue() {
    return function (d) { return d.close; };
  }
}
