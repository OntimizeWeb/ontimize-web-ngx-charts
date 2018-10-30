import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { ParallelCoordinatesChartConfiguration } from './ParallelCoordinatesChartConfiguration.class';

export class ParallelCoordinatesChartOptions extends AbstractChartOptions {
  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  getChartOptions() {
    let conf = (this.chartConf instanceof ParallelCoordinatesChartConfiguration) ? this.chartConf : new ParallelCoordinatesChartConfiguration();
    let chart = {
      type: conf.type,
      height: this.getChartHeight(),
      width: conf.width,
      duration: 500,
      dimensionData: conf.dimensionData,
      undefinedValuesLabel: conf.undefinedValueLabel,
      color: conf.color,
      lineTension: conf.lineTension
    }
    return chart;
  }
}