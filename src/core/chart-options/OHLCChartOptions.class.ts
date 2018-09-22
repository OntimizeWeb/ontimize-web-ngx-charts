import { AbstractChartOptions } from './AbstractChartOptions.class';
import { OHLCChartConfiguration } from './OHLCChartConfiguration.class';

export class OHLCChartOptions extends AbstractChartOptions {

  getChartType() {
    return 'ohlcBarChart';
  }

  getChartOptions() {
    let params = this.chartConf as OHLCChartConfiguration;

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
