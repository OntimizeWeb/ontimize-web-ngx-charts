import {
  ChartConfiguration,
  LineChartOptions,
  PieChartOptions,
  DiscreteBarChartOptions,
  MultiBarChartOptions,
  MultiBarHorizontalChartOptions,
  ScatterChartOptions
} from '../../core';

import { ChartFactory } from '../../interfaces';
import { DonutChartOptions } from '../../core/chart-options/DonutChartOptions.class';
import { LinePlusBarFocusChartOptions } from '../../core/chart-options/LinePlusBarFocusChartOptions.class';
import { ForceDirectedGraphOptions } from '../../core/chart-options/ForceDirectedGraphOptions.class';
import { CandlestickChartOptions } from '../../core/chart-options/CandlestickChartOptions.class';
import { OHLCChartOptions } from '../../core/chart-options/OHLCChartOptions.class';

export class OChartFactory implements ChartFactory {

  constructor() {
    //nothing to do
  }

  public createChartOptions(chartConf: ChartConfiguration): Object {

    let chartOpts;
    switch (chartConf.type) {
      case 'line':
        chartOpts = this.createLineChartOptions(chartConf);
        break;
      case 'discreteBar':
        chartOpts = this.createDiscreteBarChartOptions(chartConf);
        break;
      case 'pie':
        chartOpts = this.createPieChartOptions(chartConf);
        break;
      case 'multiBar':
        chartOpts = this.createMultiBarChartOptions(chartConf);
        break;
      case 'multiBarHorizontalChart':
        chartOpts = this.createMultiBarHorizontalChartOptions(chartConf);
        break;
      case 'scatterChart':
        chartOpts = this.createScatterChartOptions(chartConf);
        break;
      case 'donutChart':
        chartOpts = this.createDonutChartOptions(chartConf);
        break;
      case 'linePlusBarWithFocusChart':
        chartOpts = this.createLinePlusBarOptions(chartConf);
        break;
      case 'forceDirectedGraph':
        chartOpts = this.createForceDirectedGraph(chartConf);
        break;
      case 'candlestickBarChart':
        chartOpts = this.createCandlestickBarChart(chartConf);
        break;
      case 'ohlcBarChart':
        chartOpts = this.createOhlcBarChart(chartConf);
        break;
    }
    return chartOpts;
  }

  public createLineChartOptions(chartConf: ChartConfiguration): any {
    let lineChartOpts = new LineChartOptions(chartConf);
    return lineChartOpts.getOptions();
  }

  public createDiscreteBarChartOptions(chartConf: ChartConfiguration): any {
    let discreteBarChartOpts = new DiscreteBarChartOptions(chartConf);
    return discreteBarChartOpts.getOptions();
  }

  public createPieChartOptions(chartConf: ChartConfiguration): any {
    let pieChartOpts = new PieChartOptions(chartConf);
    return pieChartOpts.getOptions();
  }

  public createMultiBarChartOptions(chartConf: ChartConfiguration): any {
    let multiBarChartOpts = new MultiBarChartOptions(chartConf);
    return multiBarChartOpts.getOptions();
  }

  public createMultiBarHorizontalChartOptions(chartConf: ChartConfiguration): any {
    let multiBarHorChartOpts = new MultiBarHorizontalChartOptions(chartConf);
    return multiBarHorChartOpts.getOptions();
  }

  public createScatterChartOptions(chartConf: ChartConfiguration): any {
    let scatterChartOpts = new ScatterChartOptions(chartConf);
    return scatterChartOpts.getOptions();
  }

  public createDonutChartOptions(chartConf: ChartConfiguration): any {
    let donutChartOptions = new DonutChartOptions(chartConf);
    return donutChartOptions.getOptions();
  }

  public createLinePlusBarOptions(chartConf: ChartConfiguration): any {
    let linePlusBarOptions = new LinePlusBarFocusChartOptions(chartConf);
    return linePlusBarOptions.getOptions();
  }

  public createForceDirectedGraph(chartConf: ChartConfiguration): any {
    let directedGraphOptions = new ForceDirectedGraphOptions(chartConf);
    return directedGraphOptions.getOptions();
  }

  public createCandlestickBarChart(chartConf: ChartConfiguration): any {
    let candlestickOptions = new CandlestickChartOptions(chartConf);
    return candlestickOptions.getOptions();
  }

  public createOhlcBarChart(chartConf: ChartConfiguration): any {
    let ohlcOptions = new OHLCChartOptions(chartConf);
    return ohlcOptions.getOptions();
  }
}
