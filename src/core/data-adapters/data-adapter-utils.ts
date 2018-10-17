import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import {
  ChartConfiguration, LineDataAdapter, DiscreteBarDataAdapter, PieDataAdapter, MultiBarDataAdapter, ScatterDataAdapter,
  OhlcDataAdapter, CandlestickDataAdapter, MultiBarHorizontalDataAdapter, LinePlusBarDataAdapter, ForceDirectedGraphDataAdapter,
  GenericDataAdapter, BulletDataAdapter, GaugeDataAdapter
} from '../../core';

export class DataAdapterUtils {

  public static adapter: ChartDataAdapter = null;

  constructor() {

  }

  public static createDataAdapter(chartConfiguration: ChartConfiguration) {
    switch (chartConfiguration.type) {
      case 'line':
        DataAdapterUtils.adapter = new LineDataAdapter(chartConfiguration);
        break;
      case 'discreteBar':
        DataAdapterUtils.adapter = new DiscreteBarDataAdapter(chartConfiguration);
        break;
      case 'pie':
      case 'donutChart':
        DataAdapterUtils.adapter = new PieDataAdapter(chartConfiguration);
        break;
      case 'multiBar':
        DataAdapterUtils.adapter = new MultiBarDataAdapter(chartConfiguration);
        break;
      case 'scatterChart':
        DataAdapterUtils.adapter = new ScatterDataAdapter(chartConfiguration);
        break;
      case 'candlestickBarChart':
        DataAdapterUtils.adapter = new CandlestickDataAdapter(chartConfiguration);
        break;
      case 'ohlcBarChart':
        DataAdapterUtils.adapter = new OhlcDataAdapter(chartConfiguration);
        break;
      case 'boxPlotChart':
        break;
      case 'multibarHorizontalChart':
        DataAdapterUtils.adapter = new MultiBarHorizontalDataAdapter(chartConfiguration);
        break;
      case 'linePlusBarWithFocusChart':
        DataAdapterUtils.adapter = new LinePlusBarDataAdapter(chartConfiguration);
        break;
      case 'forceDirectedGraph':
        DataAdapterUtils.adapter = new ForceDirectedGraphDataAdapter(chartConfiguration);
        break;
      case 'bulletChart':
        DataAdapterUtils.adapter = new BulletDataAdapter(chartConfiguration);
        break;
      case 'gaugeChart':
        DataAdapterUtils.adapter = new GaugeDataAdapter(chartConfiguration);
        break;
      default:
        DataAdapterUtils.adapter = new GenericDataAdapter(chartConfiguration);
        break;
    }
  }
}