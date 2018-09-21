import { ChartConfiguration } from '../ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { Margin } from '../Margin.class';

export class DiscreteBarChartConfiguration extends ChartConfiguration {
  showValues: boolean = true;
  duration: number = 500;

  showLegend: boolean = false;
  legend: ChartLegendConfiguration;

  staggerLabels: boolean = false;
  rotateLabels: number = 0;
  wrapLabels: boolean = true;

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  rightAlingYAxis: boolean = false;
  xScale: any = null;
  yScale: any = null;
  xAxis1: ChartAxisConfiguration;
  yAxis1: ChartAxisConfiguration;

  margin: Margin;

  agroup: boolean = false;

  constructor() {
    super();
    this.legend = new ChartLegendConfiguration();
    this.xAxis1 = new ChartAxisConfiguration();
    this.yAxis1 = new ChartAxisConfiguration();
    this.margin = new Margin();
  }
}
