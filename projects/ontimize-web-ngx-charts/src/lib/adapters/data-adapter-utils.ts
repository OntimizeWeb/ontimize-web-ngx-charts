import { BulletDataAdapter } from '../adapters/bullet-data-adapter';
import { CandlestickDataAdapter } from '../adapters/candlestick-data-adapter';
import { DiscreteBarDataAdapter } from '../adapters/discreteBar-data-adapter';
import { ForceDirectedGraphDataAdapter } from '../adapters/forceDirectedGraph-data-adapter';
import { GaugeDataAdapter } from '../adapters/gauge-data-adapter';
import { GaugeSimpleDataAdapter } from '../adapters/gauge-simple-data-adapter';
import { GenericDataAdapter } from '../adapters/generic-data-adapter';
import { LineDataAdapter } from '../adapters/line-data-adapter';
import { LinePlusBarDataAdapter } from '../adapters/lineplusbar-data-adapter';
import { MultiBarDataAdapter } from '../adapters/multibar-data-adapter';
import { MultiBarHorizontalDataAdapter } from '../adapters/multibar-horizontal-data-adapter';
import { OhlcDataAdapter } from '../adapters/ohlc-data-adapter';
import { ParallelCoordinatesDataAdapter } from '../adapters/parallel-coordinates-data-adapter';
import { PieDataAdapter } from '../adapters/pie-data-adapter';
import { RadarDataAdapter } from '../adapters/radar-data-adapter';
import { ScatterDataAdapter } from '../adapters/scatter-data-adapter';
import { StackedAreaDataAdapter } from '../adapters/stacked-area-data-adapter';
import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models/ChartConfiguration.class';

export class DataAdapterUtils {

  constructor() { }

  public static createDataAdapter(chartConf: ChartConfiguration): ChartDataAdapter {
    let adapter: ChartDataAdapter = null;
    switch (chartConf.type) {
      case 'line':
        adapter = new LineDataAdapter(chartConf);
        break;
      case 'discreteBar':
        adapter = new DiscreteBarDataAdapter(chartConf);
        break;
      case 'pie':
      case 'donutChart':
        adapter = new PieDataAdapter(chartConf);
        break;
      case 'multiBar':
        adapter = new MultiBarDataAdapter(chartConf);
        break;
      case 'scatterChart':
        adapter = new ScatterDataAdapter(chartConf);
        break;
      case 'candlestickBarChart':
        adapter = new CandlestickDataAdapter(chartConf);
        break;
      case 'ohlcBarChart':
        adapter = new OhlcDataAdapter(chartConf);
        break;
      case 'boxPlotChart':
        break;
      case 'multibarHorizontalChart':
        adapter = new MultiBarHorizontalDataAdapter(chartConf);
        break;
      case 'linePlusBarWithFocusChart':
        adapter = new LinePlusBarDataAdapter(chartConf);
        break;
      case 'forceDirectedGraph':
        adapter = new ForceDirectedGraphDataAdapter(chartConf);
        break;
      case 'bulletChart':
        adapter = new BulletDataAdapter(chartConf);
        break;
      case 'gaugeDashboardChart':
      case 'radialPercentChart':
      case 'gaugeSpaceChart':
      case 'gaugeSlimChart':
        adapter = new GaugeDataAdapter(chartConf);
        break;
      case 'gaugeSimpleChart':
        adapter = new GaugeSimpleDataAdapter(chartConf);
        break;
      case 'stackedAreaChart':
        adapter = new StackedAreaDataAdapter(chartConf);
        break;
      case 'radarChart':
        adapter = new RadarDataAdapter(chartConf);
        break;
      case 'parallelCoordinatesChart':
        adapter = new ParallelCoordinatesDataAdapter(chartConf);
        break;
      default:
        adapter = new GenericDataAdapter(chartConf);
        break;
    }
    return adapter;
  }

}
