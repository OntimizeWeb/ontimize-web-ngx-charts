import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ChartConfiguration } from '../ChartConfiguration.class';
import { PieChartConfiguration } from './PieChartConfiguration.class';

export class PieChartOptions extends AbstractChartOptions {

  constructor(chartConf: ChartConfiguration) {
    super(chartConf);
  }

  protected getChartType(): string {
    return 'pieChart';
  }

  protected getChartOptions(): Object {
    let params;
    if(this.chartConf instanceof PieChartConfiguration){
      params = (this.chartConf as PieChartConfiguration);
    }
    else{
      params = new PieChartConfiguration();
    }
    let chart = {
      type: this.getChartType(),
      height: this.getChartHeight(),
      margin: this.getChartMargins(),
      duration: params.duration,
      showLabels: params.showLabels,
      labelThreshold: params.labelThreshold,
      labelSunbeamLayout: params.labelSunbeamLayout,
      showLegend: params.showLeyend,
      legendPosition: params.legendPosition,
      cornerRadius: params.cornerRadius,
      legend: {
        maxKeyLength: params.legend.maxKeyLength,
        radioButtonMode: params.legend.radioButtonMode,
        expanded: params.legend.expanded
      },
      pie: {
        donut: params.donut,
        donutRatio: params.donutRatio,
        pieLabelOutside: params.pieLabelOutside,
        donutLabelOutside: params.donutLabelOutside,
        labelType: params.labelType,
      },
    }
    return chart;
  }

}
