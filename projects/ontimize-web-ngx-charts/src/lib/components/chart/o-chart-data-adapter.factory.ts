import { BulletDataAdapter } from '../../adapters/bullet-data-adapter';
import { CandlestickDataAdapter } from '../../adapters/candlestick-data-adapter';
import { DiscreteBarDataAdapter } from '../../adapters/discreteBar-data-adapter';
import { ForceDirectedGraphDataAdapter } from '../../adapters/forceDirectedGraph-data-adapter';
import { GaugeDataAdapter } from '../../adapters/gauge-data-adapter';
import { GaugeSimpleDataAdapter } from '../../adapters/gauge-simple-data-adapter';
import { GenericDataAdapter } from '../../adapters/generic-data-adapter';
import { LineDataAdapter } from '../../adapters/line-data-adapter';
import { LinePlusBarDataAdapter } from '../../adapters/lineplusbar-data-adapter';
import { MultiBarDataAdapter } from '../../adapters/multibar-data-adapter';
import { MultiBarHorizontalDataAdapter } from '../../adapters/multibar-horizontal-data-adapter';
import { OhlcDataAdapter } from '../../adapters/ohlc-data-adapter';
import { ParallelCoordinatesDataAdapter } from '../../adapters/parallel-coordinates-data-adapter';
import { PieDataAdapter } from '../../adapters/pie-data-adapter';
import { RadarDataAdapter } from '../../adapters/radar-data-adapter';
import { ScatterDataAdapter } from '../../adapters/scatter-data-adapter';
import { StackedAreaDataAdapter } from '../../adapters/stacked-area-data-adapter';
import { ChartDataAdapter, ChartDataAdapterFactory } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartConfiguration } from '../../models/ChartConfiguration.class';

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
      case 'gaugeDashboardChart':
      case 'gaugeSlimChart':
      case 'gaugeSpaceChart':
      case 'radialPercentChart':
        adapter = this.createGaugeDataAdapter();
        break;
      case 'gaugeSimpleChart':
        adapter = this.createGaugeSimpleDataAdapter();
        break;
      case 'stackedAreaChart':
        adapter = this.createStackedAreaDataAdapter();
        break;
      case 'radarChart':
        adapter = this.createRadarDataAdapter();
        break;
      case 'parallelCoordinatesChart':
        adapter = this.createParallelCoordinatesDataAdapter();
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

  public createGaugeSimpleDataAdapter(): ChartDataAdapter {
    return new GaugeSimpleDataAdapter(this.chartConf);
  }

  public createStackedAreaDataAdapter(): ChartDataAdapter {
    return new StackedAreaDataAdapter(this.chartConf);
  }

  public createRadarDataAdapter(): ChartDataAdapter {
    return new RadarDataAdapter(this.chartConf);
  }

  public createParallelCoordinatesDataAdapter(): ChartDataAdapter {
    return new ParallelCoordinatesDataAdapter(this.chartConf);
  }

}
