import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';
import {  ChartAxisConfiguration } from './ChartAxisConfiguration.class';

export class MultiBarHorizontalChartConfiguration extends ChartConfiguration {
  readonly type: string = 'multiBarHorizontalChart';

  showLegend: boolean = true;
  legend: ChartLegendConfiguration;

  showControls: boolean = true;
  showValues: boolean = true;

  margin: ChartMarginConfiguration;
  valuePadding: number = 60;
  groupSpacing: number = 0.1;
  duration: number = 500;
  stacked: boolean = false;

  showXAxis: boolean = true;
  showYAxis: boolean = false;
  x1Axis: ChartAxisConfiguration;
  y1Axis: ChartAxisConfiguration;

  colors: Array<string> = null;

  constructor() {
    super();
    this.legend = new ChartLegendConfiguration();
    this.margin = new ChartMarginConfiguration();
    this.x1Axis = new ChartAxisConfiguration();
    this.y1Axis = new ChartAxisConfiguration();
  }
}
