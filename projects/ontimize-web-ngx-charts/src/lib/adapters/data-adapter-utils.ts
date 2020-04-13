import {
  BulletDataAdapter,
  CandlestickDataAdapter,
  DiscreteBarDataAdapter,
  ForceDirectedGraphDataAdapter,
  GaugeDataAdapter,
  GaugeSimpleDataAdapter,
  GenericDataAdapter,
  LineDataAdapter,
  LinePlusBarDataAdapter,
  MultiBarDataAdapter,
  MultiBarHorizontalDataAdapter,
  OhlcDataAdapter,
  ParallelCoordinatesDataAdapter,
  PieDataAdapter,
  RadarDataAdapter,
  ScatterDataAdapter,
  StackedAreaDataAdapter
} from '../adapters';
import { ChartDataAdapter } from '../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../models';

export class DataAdapterUtils {

  public static adapter: ChartDataAdapter = null;

  constructor() { }

  public static createDataAdapter(chartConf: ChartConfiguration) {
    switch (chartConf.type) {
      case 'line':
        DataAdapterUtils.adapter = new LineDataAdapter(chartConf);
        break;
      case 'discreteBar':
        DataAdapterUtils.adapter = new DiscreteBarDataAdapter(chartConf);
        break;
      case 'pie':
      case 'donutChart':
        DataAdapterUtils.adapter = new PieDataAdapter(chartConf);
        break;
      case 'multiBar':
        DataAdapterUtils.adapter = new MultiBarDataAdapter(chartConf);
        break;
      case 'scatterChart':
        DataAdapterUtils.adapter = new ScatterDataAdapter(chartConf);
        break;
      case 'candlestickBarChart':
        DataAdapterUtils.adapter = new CandlestickDataAdapter(chartConf);
        break;
      case 'ohlcBarChart':
        DataAdapterUtils.adapter = new OhlcDataAdapter(chartConf);
        break;
      case 'boxPlotChart':
        break;
      case 'multibarHorizontalChart':
        DataAdapterUtils.adapter = new MultiBarHorizontalDataAdapter(chartConf);
        break;
      case 'linePlusBarWithFocusChart':
        DataAdapterUtils.adapter = new LinePlusBarDataAdapter(chartConf);
        break;
      case 'forceDirectedGraph':
        DataAdapterUtils.adapter = new ForceDirectedGraphDataAdapter(chartConf);
        break;
      case 'bulletChart':
        DataAdapterUtils.adapter = new BulletDataAdapter(chartConf);
        break;
      case 'gaugeDashboardChart':
      case 'radialPercentChart':
      case 'gaugeSpaceChart':
      case 'gaugeSlimChart':
        DataAdapterUtils.adapter = new GaugeDataAdapter(chartConf);
        break;
      case 'gaugeSimpleChart':
        DataAdapterUtils.adapter = new GaugeSimpleDataAdapter(chartConf);
        break;
      case 'stackedAreaChart':
        DataAdapterUtils.adapter = new StackedAreaDataAdapter(chartConf);
        break;
      case 'radarChart':
        DataAdapterUtils.adapter = new RadarDataAdapter(chartConf);
        break;
      case 'parallelCoordinatesChart':
        DataAdapterUtils.adapter = new ParallelCoordinatesDataAdapter(chartConf);
        break;
      default:
        DataAdapterUtils.adapter = new GenericDataAdapter(chartConf);
        break;
    }
  }

}
