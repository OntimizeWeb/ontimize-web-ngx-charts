import { ChartAxisConfiguration } from './ChartAxisConfiguration.class';
import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class MultiBarHorizontalChartConfiguration extends ChartConfiguration {

  public readonly type: string = 'multiBarHorizontalChart';
  /** 'ordinal' | 'linear' */
  public schemeType: 'ordinal' | 'linear' = 'ordinal';

  /** Enable/disable animations */
  public animations: boolean = true;

  /** Round domains for aligned gridlines */
  public roundDomains: boolean = false;

  /** Tick trimming and formatting */
  public trimXAxisTicks: boolean = true;
  public trimYAxisTicks: boolean = true;
  public rotateXAxisTicks: boolean = true;

  public maxXAxisTickLength: number = 16;
  public maxYAxisTickLength: number = 16;

  public wrapTicks: boolean = false;

  /** Behavior */
  public noBarWhenZero: boolean = true;
  public roundEdges: boolean = true;
  public barPadding: number = 8;

  /** Scale limits */
  public yScaleMin?: number;
  public yScaleMax?: number;

  constructor() {
    super();
  }

}
