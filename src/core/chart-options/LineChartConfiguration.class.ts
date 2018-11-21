import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class LineChartConfiguration extends ChartConfiguration {
  readonly type: string = 'line';

  legend: ChartLegendConfiguration;
  legendPosition: string = 'top';
  showLegend: boolean = true;

  duration: number = 500;
  useInteractiveGuideline: boolean = true;
  interactive: boolean = true;
  margin: ChartMarginConfiguration;

  isArea: Array<boolean> = null;
  strokeWidth: Array<number> = null;
  classed: Array<string> = null;
  colors: Array<string> = null;

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  x1Axis: ChartAxisConfiguration;
  y1Axis: ChartAxisConfiguration;
  rightAlignYAxis: boolean = false;

  forceX: Array<number> = null;
  forceY: Array<number> = null;

  focusEnable: boolean = false;
  focusShowAxisX: boolean = false;
  focusShowAxisY: boolean = false;

  constructor() {
    super();
    this.legend = new ChartLegendConfiguration();
    this.x1Axis = new ChartAxisConfiguration();
    this.y1Axis = new ChartAxisConfiguration();
    this.margin = new ChartMarginConfiguration();
  }
}
