import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';

export class ScatterChartConfiguration extends ChartConfiguration {
  readonly type: string = 'scatterChart';

  showDistX: boolean = true;
  showDistY: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;

  showLegend: boolean = true;
  legend: ChartLegendConfiguration;

  duration: number = 350;
  margin: ChartMarginConfiguration;
  clipEdge: boolean = false;

  rightAlignYAxis: boolean = false;
  xAxis1: ChartAxisConfiguration;
  yAxis1: ChartAxisConfiguration;

  colors: Array<string> = null;
  shape: Array<string> = null;
  size: Array<number> = null;

  constructor() {
    super();
    this.xAxis1 = new ChartAxisConfiguration();
    this.yAxis1 = new ChartAxisConfiguration();
    this.margin = new ChartMarginConfiguration();
    this.legend = new ChartLegendConfiguration();
  }
}
