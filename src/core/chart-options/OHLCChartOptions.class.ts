import { AbstractChartOptions } from './AbstractChartOptions.class';
import { OHLCChartConfiguration } from './OHLCChartConfiguration.class';
declare var d3: any;

export class OHLCChartOptions extends AbstractChartOptions {

  getChartType() {
    return 'ohlcBarChart';
  }

  getChartOptions() {
    let params = this.chartConf as OHLCChartConfiguration;
    /*
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
    */
    let chart = {
      type: 'ohlcBarChart',
      height: 450,
      margin: {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: this.getXValue(),
      y: this.getYValue(),
      duration: 100,

      xAxis: {
        axisLabel: 'Dates',
        tickFormat: function (_d) {
          return d3.time.format('%x')(new Date());
        },
        showMaxMin: false
      },

      yAxis: {
        axisLabel: 'Stock Price',
        tickFormat: function (d) {
          return '$' + d3.format(',.1f')(d);
        },
        showMaxMin: false
      },
      zoom: {
        enabled: true,
        scaleExtent: [1, 10],
        useFixedDomain: false,
        useNiceScale: false,
        horizontalOff: false,
        verticalOff: true,
        unzoomEventType: 'dblclick.zoom'
      }
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
