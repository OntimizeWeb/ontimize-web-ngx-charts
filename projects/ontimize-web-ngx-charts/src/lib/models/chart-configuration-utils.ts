import { ParallelCoordinatesChartConfiguration } from './options/ParallelCoordinatesChartConfiguration.class';
import { RadarChartConfiguration } from './options/RadarChartConfiguration.class';
import { StackedAreaChartConfiguration } from './options/StackedAreaChartConfiguration.class';
import { BubbleChartConfiguration } from './options/BubbleChartConfiguration.class';
import { GaugeSimpleChartConfiguration } from './options/GaugeSimpleChartConfiguration.class';
import { RadialPercentChartConfiguration } from './options/RadialPercentChartConfiguration.class';
import { GaugeSpaceChartConfiguration } from './options/GaugeSpaceChartConfiguration.class';
import { GaugeSlimChartConfiguration } from './options/GaugeSlimChartConfiguration.class';
import { GaugeDashboardChartConfiguration } from './options/GaugeDashboardChartConfiguration.class';
import { BulletChartConfiguration } from './options/BulletChartConfiguration.class';
import { OHLCChartConfiguration } from './options/OHLCChartConfiguration.class';
import { CandlestickChartConfiguration } from './options/CandlestickChartConfiguration.class';
import { ForceDirectedGraphConfiguration } from './options/ForceDirectedGraphConfiguration.class';
import { LinePlusBarFocusChartConfiguration } from './options/LinePlusBarFocusChartConfiguration.class';
import { ScatterChartConfiguration } from './options/ScatterChartConfiguration.class';
import { MultiBarHorizontalChartConfiguration } from './options/MultiBarHorizontalChartConfiguration.class';
import { MultiBarChartConfiguration } from './options/MultiBarChartConfiguration.class';
import { DiscreteBarChartConfiguration } from './options/DiscreteBarChartConfiguration.class';
import { DonutChartConfiguration } from './options/DonutChartConfiguration.class';
import { PieChartConfiguration } from './options/PieChartConfiguration.class';
import { LineChartConfiguration } from './options/LineChartConfiguration.class';
import { ChartConfiguration } from './options/ChartConfiguration.class';

export class ChartConfigurationUtils {

  public static getConfigurationForType(type: string): ChartConfiguration {
    let chartConf: ChartConfiguration;
    switch (type) {
      case 'line':
        chartConf = new LineChartConfiguration();
        break;
      case 'pie':
        chartConf = new PieChartConfiguration();
        break;
      case 'donutChart':
        chartConf = new DonutChartConfiguration();
        break;
      case 'discreteBar':
        chartConf = new DiscreteBarChartConfiguration();
        break;
      case 'multiBar':
        chartConf = new MultiBarChartConfiguration();
        break;
      case 'multiBarHorizontalChart':
        chartConf = new MultiBarHorizontalChartConfiguration();
        break;
      case 'scatterChart':
        chartConf = new ScatterChartConfiguration();
        break;
      case 'linePlusBarWithFocusChart':
        chartConf = new LinePlusBarFocusChartConfiguration();
        break;
      case 'forceDirectedGraph':
        chartConf = new ForceDirectedGraphConfiguration();
        break;
      case 'candlestickBarChart':
        chartConf = new CandlestickChartConfiguration();
        break;
      case 'ohlcBarChart':
        chartConf = new OHLCChartConfiguration();
        break;
      case 'bulletChart':
        chartConf = new BulletChartConfiguration();
        break;
      // case 'gaugeDashboardChart':
      //   chartConf = new GaugeDashboardChartConfiguration();
      //   break;
      // case 'gaugeSlimChart':
      //   chartConf = new GaugeSlimChartConfiguration();
      //   break;
      // case 'gaugeSpaceChart':
      //   chartConf = new GaugeSpaceChartConfiguration();
      //   break;
      // case 'radialPercentChart':
      //   chartConf = new RadialPercentChartConfiguration();
      //   break;
      // case 'gaugeSimpleChart':
      //   chartConf = new GaugeSimpleChartConfiguration();
      //   break;
      // case 'bubbleChart':
      //   chartConf = new BubbleChartConfiguration();
      //   break;
      // case 'stackedAreaChart':
      //   chartConf = new StackedAreaChartConfiguration();
      //   break;
      // case 'radarChart':
      //   chartConf = new RadarChartConfiguration();
      //   break;
      // case 'parallelCoordinatesChart':
      //   chartConf = new ParallelCoordinatesChartConfiguration();
      //   break;
      default:
        chartConf = new ChartConfiguration();
        break;
    }
    return chartConf;
  }
}