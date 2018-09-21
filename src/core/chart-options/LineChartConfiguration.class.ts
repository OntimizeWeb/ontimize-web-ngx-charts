import { ChartConfiguration } from '../ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';

export class LineChartConfiguration extends ChartConfiguration {
  duration: number = 500;
  legend: ChartLegendConfiguration;
  legendPosition: string = 'top';
  showLabels: boolean = false;
  showLegend: boolean = true;
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  focusEnable: boolean = false;
  focusShowAxisX: boolean = false;
  focusShowAxisY: boolean = false;
  rightAlignYAxis: boolean = false;
  useInteractiveGuideLine: boolean = true;
  isArea: Array<boolean> = null;
  colors: Array<string> = null;
  xScale: any = null;
  yScale: any = null;
  xAxis1: ChartAxisConfiguration;
  yAxis1: ChartAxisConfiguration;

  constructor() {
    super();
    this.legend = new ChartLegendConfiguration();
    this.xAxis1 = new ChartAxisConfiguration();
    this.yAxis1 = new ChartAxisConfiguration();
  }
}
