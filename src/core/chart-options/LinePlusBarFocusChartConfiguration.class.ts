import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class LinePlusBarFocusChartConfiguration extends ChartConfiguration {
  x1Axis: ChartAxisConfiguration;
  y1Axis: ChartAxisConfiguration;
  switchYAxisOrder: boolean = false;

  showLabels: boolean = false;
  showLegend: boolean = true;
  legend: ChartLegendConfiguration;

  margin: ChartMarginConfiguration;
  isArea: any;
  interactive: boolean = true;

  focusEnable: boolean = true;
  focusShowAxisX: boolean = true;
  focusShowAxisY: boolean = false;

  //Parameter for select chart with bars or line
  bars: Array<boolean>;
  //Parameters for select the chart colors
  colors: Array<string>;

  //Parameters for create equispaced points in chart
  //to_zero is priority in the case of two parameters are activated
  to_zero: Array<boolean>;
  to_previusValue: Array<boolean>;

  constructor() {
    super();
    this.x1Axis = new ChartAxisConfiguration();
    this.y1Axis = new ChartAxisConfiguration();
    this.legend = new ChartLegendConfiguration();
    this.isArea = this.funtionIsArea();
    this.margin = new ChartMarginConfiguration();
  }

  funtionIsArea() {
    return function (d) { return d.area; };
  }
}
