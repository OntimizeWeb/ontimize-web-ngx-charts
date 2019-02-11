import {
  ChartConfiguration, LineChartOptions, PieChartOptions, DiscreteBarChartOptions, MultiBarChartOptions,
  MultiBarHorizontalChartOptions, ScatterChartOptions, BulletChartOptions, GaugeDashboardChartOptions,
  DonutChartOptions, LinePlusBarFocusChartOptions, ForceDirectedGraphOptions, CandlestickChartOptions,
  OHLCChartOptions, GaugeSlimChartOptions, GaugeSpaceChartOptions, RadialPercentChartOptions,
  GaugeSimpleChartOptions, BubbleChartOptions, StackedAreaChartOptions, RadarChartOptions,
  ParallelCoordinatesChartOptions
} from '../../core';

import { ChartFactory } from '../../interfaces';
import { OTranslateService } from 'ontimize-web-ngx';

export class OChartFactory implements ChartFactory {

  constructor(protected translate: OTranslateService) {
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
      case 'bulletChart':
        chartOpts = this.createBulletChartOptions(chartConf);
        break;
      case 'gaugeDashboardChart':
        chartOpts = this.createGaugeDashboardChartOptions(chartConf);
        break;
      case 'gaugeSlimChart':
        chartOpts = this.createGaugeSlimChartOptions(chartConf);
        break;
      case 'gaugeSpaceChart':
        chartOpts = this.createGaugeSpaceChartOptions(chartConf);
        break;
      case 'radialPercentChart':
        chartOpts = this.createRadialPercentChartOptions(chartConf);
        break;
      case 'gaugeSimpleChart':
        chartOpts = this.createGaugeSimpleChartOptions(chartConf);
        break;
      case 'bubbleChart':
        chartOpts = this.createBubbleChartOptions(chartConf);
        break;
      case 'stackedAreaChart':
        chartOpts = this.createStackedAreaChartOptions(chartConf);
        break;
      case 'radarChart':
        chartOpts = this.createRadarChartOptions(chartConf);
        break;
      case 'parallelCoordinatesChart':
        chartOpts = this.createParallelCoordinatesChartOptions(chartConf);
        break;

    }
    return chartOpts;
  }

  public createLineChartOptions(chartConf: ChartConfiguration): any {
    let lineChartOpts = new LineChartOptions(chartConf, this.translate);
    return lineChartOpts.getOptions();
  }

  public createDiscreteBarChartOptions(chartConf: ChartConfiguration): any {
    let discreteBarChartOpts = new DiscreteBarChartOptions(chartConf, this.translate);
    return discreteBarChartOpts.getOptions();
  }

  public createPieChartOptions(chartConf: ChartConfiguration): any {
    let pieChartOpts = new PieChartOptions(chartConf, this.translate);
    return pieChartOpts.getOptions();
  }

  public createMultiBarChartOptions(chartConf: ChartConfiguration): any {
    let multiBarChartOpts = new MultiBarChartOptions(chartConf, this.translate);
    return multiBarChartOpts.getOptions();
  }

  public createMultiBarHorizontalChartOptions(chartConf: ChartConfiguration): any {
    let multiBarHorChartOpts = new MultiBarHorizontalChartOptions(chartConf, this.translate);
    return multiBarHorChartOpts.getOptions();
  }

  public createScatterChartOptions(chartConf: ChartConfiguration): any {
    let scatterChartOpts = new ScatterChartOptions(chartConf, this.translate);
    return scatterChartOpts.getOptions();
  }

  public createDonutChartOptions(chartConf: ChartConfiguration): any {
    let donutChartOptions = new DonutChartOptions(chartConf, this.translate);
    return donutChartOptions.getOptions();
  }

  public createLinePlusBarOptions(chartConf: ChartConfiguration): any {
    let linePlusBarOptions = new LinePlusBarFocusChartOptions(chartConf, this.translate);
    return linePlusBarOptions.getOptions();
  }

  public createForceDirectedGraph(chartConf: ChartConfiguration): any {
    let directedGraphOptions = new ForceDirectedGraphOptions(chartConf, this.translate);
    return directedGraphOptions.getOptions();
  }

  public createCandlestickBarChart(chartConf: ChartConfiguration): any {
    let candlestickOptions = new CandlestickChartOptions(chartConf, this.translate);
    return candlestickOptions.getOptions();
  }

  public createOhlcBarChart(chartConf: ChartConfiguration): any {
    let ohlcOptions = new OHLCChartOptions(chartConf, this.translate);
    return ohlcOptions.getOptions();
  }

  public createBulletChartOptions(chartConf: ChartConfiguration): any {
    let bulletOptions = new BulletChartOptions(chartConf, this.translate);
    return bulletOptions.getOptions();
  }

  public createGaugeDashboardChartOptions(chartConf: ChartConfiguration): any {
    let gaugeOptions = new GaugeDashboardChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createGaugeSlimChartOptions(chartConf: ChartConfiguration): any {
    let gaugeOptions = new GaugeSlimChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createGaugeSpaceChartOptions(chartConf: ChartConfiguration): any {
    let gaugeOptions = new GaugeSpaceChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createRadialPercentChartOptions(chartConf: ChartConfiguration): any{
    let radialPercentOptions = new RadialPercentChartOptions(chartConf, this.translate);
    return radialPercentOptions.getOptions();
  }

  public createGaugeSimpleChartOptions(chartConf: ChartConfiguration): any {
    let gaugeSimpleOptions = new GaugeSimpleChartOptions(chartConf, this.translate);
    return gaugeSimpleOptions.getOptions();
  }

  public createBubbleChartOptions(chartConf: ChartConfiguration): any {
    let bubbleOptions = new BubbleChartOptions(chartConf, this.translate);
    return bubbleOptions.getOptions();
  }

  public createStackedAreaChartOptions(chartConf: ChartConfiguration): any {
    let stackedAreaOptions = new StackedAreaChartOptions(chartConf, this.translate);
    return stackedAreaOptions.getOptions();
  }

  public createRadarChartOptions(chartConf: ChartConfiguration): any {
    let radarChartOptions = new RadarChartOptions(chartConf, this.translate);
    return radarChartOptions.getOptions();
  }

  public createParallelCoordinatesChartOptions(chartConf: ChartConfiguration): any {
    let parallelCoordinatesChartOptions = new ParallelCoordinatesChartOptions(chartConf, this.translate);
    return parallelCoordinatesChartOptions.getOptions();
  }
}