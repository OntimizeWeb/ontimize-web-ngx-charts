
import {
  ChartConfiguration,
  LineChartOptions,
  PieChartOptions,
  DiscreteBarChartOptions,
  MultiBarChartOptions,
  MultiBarHorizontalChartOptions
} from '../../core';

import { ChartFactory } from '../../interfaces';



export class OChartFactory implements ChartFactory {

  constructor() {
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
      case 'multiBarHorizontal':
        chartOpts = this.createMultiBarHorizontalChartOptions(chartConf);
        break;
    }
    return chartOpts;
  }

  public createLineChartOptions(chartConf: ChartConfiguration): any {
    let lineChartOpts = new LineChartOptions(chartConf);
    return lineChartOpts.getOptions();
  }

  public createDiscreteBarChartOptions(chartConf: ChartConfiguration): any {
    let discreteBarChartOpts = new DiscreteBarChartOptions(chartConf);
    return discreteBarChartOpts.getOptions();
  }

  public createPieChartOptions(chartConf: ChartConfiguration): any {
    let pieChartOpts = new PieChartOptions(chartConf);
    return pieChartOpts.getOptions();
  }

  public createMultiBarChartOptions(chartConf: ChartConfiguration): any {
    let multiBarChartOpts = new MultiBarChartOptions(chartConf);
    return multiBarChartOpts.getOptions();
  }

  public createMultiBarHorizontalChartOptions(chartConf: ChartConfiguration): any {
    let multiBarHorChartOpts = new MultiBarHorizontalChartOptions(chartConf);
    return multiBarHorChartOpts.getOptions();
  }

}
