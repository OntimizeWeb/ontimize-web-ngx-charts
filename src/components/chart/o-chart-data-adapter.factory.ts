import { ChartDataAdapterFactory, ChartDataAdapter } from '../../interfaces';

import {
  ChartConfiguration,
  GenericDataAdapter,
  PieDataAdapter
} from '../../core';
import { LineDataAdapter } from '../../core/data-adapters/line-data-adapter';
import { ScatterDataAdapter } from '../../core/data-adapters/scatter-data-adapter';
import { DiscreteBarDataAdapter } from '../../core/data-adapters/discreteBar-data-adapter';
import { MultiBarDataAdapter } from '../../core/data-adapters/multibar-data-adapter';
import { MultiBarHorizontalDataAdapter } from '../../core/data-adapters/multibar-horizontal-data-adapter';
import { LinePlusBarDataAdapter } from '../../core/data-adapters/lineplusbar-data-adapter';

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
        adapter = this.createScatterAdapter();
        break;
      case 'donutChart':
        adapter = this.createPieDataAdapter();
        break;
      case 'linePlusBarFocusChart':
        adapter = this.createLinePlusBarDataAdapter();
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

  public createScatterAdapter(): ChartDataAdapter {
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
}

