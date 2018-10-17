import { ChartDataAdapterFactory, ChartDataAdapter } from '../../interfaces';

import {
  ChartConfiguration,
  GenericDataAdapter,
  PieDataAdapter,
  GaugeDataAdapter
} from '../../core';
import { LineDataAdapter } from '../../core/data-adapters/line-data-adapter';
import { ScatterDataAdapter } from '../../core/data-adapters/scatter-data-adapter';
import { DiscreteBarDataAdapter } from '../../core/data-adapters/discreteBar-data-adapter';
import { MultiBarDataAdapter } from '../../core/data-adapters/multibar-data-adapter';
import { MultiBarHorizontalDataAdapter } from '../../core/data-adapters/multibar-horizontal-data-adapter';
import { LinePlusBarDataAdapter } from '../../core/data-adapters/lineplusbar-data-adapter';
import { ForceDirectedGraphDataAdapter } from '../../core/data-adapters/forceDirectedGraph-data-adapter';
import { CandlestickDataAdapter } from '../../core/data-adapters/candlestick-data-adapter';
import { OhlcDataAdapter } from '../../core/data-adapters/ohlc-data-adapter';
import {  BulletDataAdapter } from '../../core';

export class OChartDataAdapterFactory implements ChartDataAdapterFactory {

  protected chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
  }

  getAdapter(chartType: string): ChartDataAdapter {
    let adapter: ChartDataAdapter;
    switch (chartType) {
      case 'line':
        adapter = this.createLineDataAdapter();
        break;
      case 'discreteBar':
        adapter = this.createDiscreteBarDataAdapter();
        break;
      case 'pie':
        adapter = this.createPieDataAdapter();
        break;
      case 'multiBar':
        adapter = this.createMultiBarDataAdapter();
        break;
      case 'multiBarHorizontalChart':
        adapter = this.createMultiBarHorizontalDataAdapter();
        break;
      case 'scatterChart':
        adapter = this.createScatterDataAdapter();
        break;
      case 'donutChart':
        adapter = this.createPieDataAdapter();
        break;
      case 'linePlusBarWithFocusChart':
        adapter = this.createLinePlusBarDataAdapter();
        break;
      case 'forceDirectedGraph':
        adapter = this.createForceDirectedGraphDataAdapter();
        break;
      case 'candlestickBarChart':
        adapter = this.createCandlestickDataAdapter();
        break;
      case 'ohlcBarChart':
        adapter = this.createOhlcDataAdapter();
        break;
      case 'bulletChart':
        adapter = this.createBulletDataAdapter();
        break;
      case 'gaugeChart':
        adapter = this.createGaugeDataAdapter();
        break;
    }
    return adapter;
  }

  public createGenericDataAdapter(): ChartDataAdapter {
    return new GenericDataAdapter(this.chartConf);
  }

  public createPieDataAdapter(): ChartDataAdapter {
    return new PieDataAdapter(this.chartConf);
  }

  public createLineDataAdapter(): ChartDataAdapter {
    return new LineDataAdapter(this.chartConf);
  }

  public createScatterDataAdapter(): ChartDataAdapter {
    return new ScatterDataAdapter(this.chartConf);
  }

  public createDiscreteBarDataAdapter(): ChartDataAdapter {
    return new DiscreteBarDataAdapter(this.chartConf);
  }

  public createMultiBarDataAdapter(): ChartDataAdapter {
    return new MultiBarDataAdapter(this.chartConf);
  }

  public createMultiBarHorizontalDataAdapter(): ChartDataAdapter {
    return new MultiBarHorizontalDataAdapter(this.chartConf);
  }

  public createLinePlusBarDataAdapter(): ChartDataAdapter {
    return new LinePlusBarDataAdapter(this.chartConf);
  }

  public createForceDirectedGraphDataAdapter(): ChartDataAdapter {
    return new ForceDirectedGraphDataAdapter(this.chartConf);
  }

  public createCandlestickDataAdapter(): ChartDataAdapter {
    return new CandlestickDataAdapter(this.chartConf);
  }

  public createOhlcDataAdapter(): ChartDataAdapter {
    return new OhlcDataAdapter(this.chartConf);
  }

  public createBulletDataAdapter(): ChartDataAdapter {
    return new BulletDataAdapter(this.chartConf);
  }

  public createGaugeDataAdapter(): ChartDataAdapter {
    return new GaugeDataAdapter(this.chartConf);
  }
}
