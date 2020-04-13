import { OTranslateService } from 'ontimize-web-ngx';

import { ChartFactory } from '../../interfaces/ChartFactory.interface';
import { BubbleChartOptions } from '../../models/options/BubbleChartOptions.class';
import { BulletChartOptions } from '../../models/options/BulletChartOptions.class';
import { CandlestickChartOptions } from '../../models/options/CandlestickChartOptions.class';
import { ChartConfiguration } from '../../models/options/ChartConfiguration.class';
import { DiscreteBarChartOptions } from '../../models/options/DiscreteBarChartOptions.class';
import { DonutChartOptions } from '../../models/options/DonutChartOptions.class';
import { ForceDirectedGraphOptions } from '../../models/options/ForceDirectedGraphOptions.class';
import { GaugeDashboardChartOptions } from '../../models/options/GaugeDashboardChartOptions.class';
import { GaugeSimpleChartOptions } from '../../models/options/GaugeSimpleChartOptions.class';
import { GaugeSlimChartOptions } from '../../models/options/GaugeSlimChartOptions.class';
import { GaugeSpaceChartOptions } from '../../models/options/GaugeSpaceChartOptions.class';
import { LineChartOptions } from '../../models/options/LineChartOptions.class';
import { LinePlusBarFocusChartOptions } from '../../models/options/LinePlusBarFocusChartOptions.class';
import { MultiBarChartOptions } from '../../models/options/MultiBarChartOptions.class';
import { MultiBarHorizontalChartOptions } from '../../models/options/MultiBarHorizontalChartOptions.class';
import { OHLCChartOptions } from '../../models/options/OHLCChartOptions.class';
import { ParallelCoordinatesChartOptions } from '../../models/options/ParallelCoordinatesChartOptions.class';
import { PieChartOptions } from '../../models/options/PieChartOptions.class';
import { RadarChartOptions } from '../../models/options/RadarChartOptions.class';
import { RadialPercentChartOptions } from '../../models/options/RadialPercentChartOptions.class';
import { ScatterChartOptions } from '../../models/options/ScatterChartOption.class';
import { StackedAreaChartOptions } from '../../models/options/StackedAreaChartOptions.class';

export class OChartFactory implements ChartFactory {

  constructor(protected translate: OTranslateService) {
    // nothing to do
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
    const lineChartOpts = new LineChartOptions(chartConf, this.translate);
    return lineChartOpts.getOptions();
  }

  public createDiscreteBarChartOptions(chartConf: ChartConfiguration): any {
    const discreteBarChartOpts = new DiscreteBarChartOptions(chartConf, this.translate);
    return discreteBarChartOpts.getOptions();
  }

  public createPieChartOptions(chartConf: ChartConfiguration): any {
    const pieChartOpts = new PieChartOptions(chartConf, this.translate);
    return pieChartOpts.getOptions();
  }

  public createMultiBarChartOptions(chartConf: ChartConfiguration): any {
    const multiBarChartOpts = new MultiBarChartOptions(chartConf, this.translate);
    return multiBarChartOpts.getOptions();
  }

  public createMultiBarHorizontalChartOptions(chartConf: ChartConfiguration): any {
    const multiBarHorChartOpts = new MultiBarHorizontalChartOptions(chartConf, this.translate);
    return multiBarHorChartOpts.getOptions();
  }

  public createScatterChartOptions(chartConf: ChartConfiguration): any {
    const scatterChartOpts = new ScatterChartOptions(chartConf, this.translate);
    return scatterChartOpts.getOptions();
  }

  public createDonutChartOptions(chartConf: ChartConfiguration): any {
    const donutChartOptions = new DonutChartOptions(chartConf, this.translate);
    return donutChartOptions.getOptions();
  }

  public createLinePlusBarOptions(chartConf: ChartConfiguration): any {
    const linePlusBarOptions = new LinePlusBarFocusChartOptions(chartConf, this.translate);
    return linePlusBarOptions.getOptions();
  }

  public createForceDirectedGraph(chartConf: ChartConfiguration): any {
    const directedGraphOptions = new ForceDirectedGraphOptions(chartConf, this.translate);
    return directedGraphOptions.getOptions();
  }

  public createCandlestickBarChart(chartConf: ChartConfiguration): any {
    const candlestickOptions = new CandlestickChartOptions(chartConf, this.translate);
    return candlestickOptions.getOptions();
  }

  public createOhlcBarChart(chartConf: ChartConfiguration): any {
    const ohlcOptions = new OHLCChartOptions(chartConf, this.translate);
    return ohlcOptions.getOptions();
  }

  public createBulletChartOptions(chartConf: ChartConfiguration): any {
    const bulletOptions = new BulletChartOptions(chartConf, this.translate);
    return bulletOptions.getOptions();
  }

  public createGaugeDashboardChartOptions(chartConf: ChartConfiguration): any {
    const gaugeOptions = new GaugeDashboardChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createGaugeSlimChartOptions(chartConf: ChartConfiguration): any {
    const gaugeOptions = new GaugeSlimChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createGaugeSpaceChartOptions(chartConf: ChartConfiguration): any {
    const gaugeOptions = new GaugeSpaceChartOptions(chartConf, this.translate);
    return gaugeOptions.getOptions();
  }

  public createRadialPercentChartOptions(chartConf: ChartConfiguration): any {
    const radialPercentOptions = new RadialPercentChartOptions(chartConf, this.translate);
    return radialPercentOptions.getOptions();
  }

  public createGaugeSimpleChartOptions(chartConf: ChartConfiguration): any {
    const gaugeSimpleOptions = new GaugeSimpleChartOptions(chartConf, this.translate);
    return gaugeSimpleOptions.getOptions();
  }

  public createBubbleChartOptions(chartConf: ChartConfiguration): any {
    const bubbleOptions = new BubbleChartOptions(chartConf, this.translate);
    return bubbleOptions.getOptions();
  }

  public createStackedAreaChartOptions(chartConf: ChartConfiguration): any {
    const stackedAreaOptions = new StackedAreaChartOptions(chartConf, this.translate);
    return stackedAreaOptions.getOptions();
  }

  public createRadarChartOptions(chartConf: ChartConfiguration): any {
    const radarChartOptions = new RadarChartOptions(chartConf, this.translate);
    return radarChartOptions.getOptions();
  }

  public createParallelCoordinatesChartOptions(chartConf: ChartConfiguration): any {
    const parallelCoordinatesChartOptions = new ParallelCoordinatesChartOptions(chartConf, this.translate);
    return parallelCoordinatesChartOptions.getOptions();
  }

}
