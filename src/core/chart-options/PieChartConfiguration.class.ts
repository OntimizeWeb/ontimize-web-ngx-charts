import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';

export class PieChartConfiguration extends ChartConfiguration {
  showLeyend: boolean = true;
  legend: ChartLegendConfiguration;
  legendPosition: string = 'top';

  duration: number = 500;
  cornerRadius: number = 0;
  margin: ChartMarginConfiguration;

  showLabels: boolean = true;
  labelType: string = 'key';
  labelThreshold: number = 0.01;
  labelSunbeamLayout: boolean = true;
  pieLabelOutside: boolean = true;
  donutLabelOutside: boolean = false;

  readonly donut: boolean = false;
  readonly donutRatio: number = 0;



  constructor() {
    super();
    this.margin = new ChartMarginConfiguration();
    this.legend = new ChartLegendConfiguration();
  }
}
