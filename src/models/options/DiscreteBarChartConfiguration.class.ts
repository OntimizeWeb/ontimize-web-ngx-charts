import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class DiscreteBarChartConfiguration extends ChartConfiguration {

  readonly type: string = 'discreteBar';

  public showValues: boolean = true;
  public duration: number = 500;
  public showLegend: boolean = false;
  public legend: ChartLegendConfiguration;
  public staggerLabels: boolean = false;
  public rotateLabels: number = 0;
  public wrapLabels: boolean = true;
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public rightAlingYAxis: boolean = false;
  public x1Axis: ChartAxisConfiguration;
  public y1Axis: ChartAxisConfiguration;
  public margin: ChartMarginConfiguration;
  /** whether group the values with the same key or not */
  public agroup: boolean = false;
  /** Value format */
  public valueType: string;

  constructor() {
    super();
    this.legend = new ChartLegendConfiguration();
    this.x1Axis = new ChartAxisConfiguration();
    this.y1Axis = new ChartAxisConfiguration();
    this.margin = new ChartMarginConfiguration();
  }

}
