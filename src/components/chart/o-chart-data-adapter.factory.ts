import { ChartDataAdapterFactory, ChartDataAdapter } from '../../interfaces';

import {
  ChartConfiguration,
  GenericDataAdapter,
  PieDataAdapter
} from '../../core';

export class OChartDataAdapterFactory implements ChartDataAdapterFactory {

  protected chartConf: ChartConfiguration;

  constructor(chartConf: ChartConfiguration) {
    this.chartConf = chartConf;
  }

  getAdapter(chartType: string): ChartDataAdapter {
    let adapter: ChartDataAdapter;
    switch (chartType) {
      case 'line':
        adapter = this.createGenericDataAdapter();
        break;
      case 'discreteBar':
        adapter = this.createGenericDataAdapter();
        break;
      case 'pie':
        adapter = this.createPieDataAdapter();
        break;
      case 'multiBar':
        adapter = this.createGenericDataAdapter();
        break;
      case 'multiBarHorizontal':
        adapter = this.createGenericDataAdapter();
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

}

