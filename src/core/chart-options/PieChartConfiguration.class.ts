import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartLegendConfiguration } from './ChartLegendConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class PieChartConfiguration extends ChartConfiguration {

  readonly type: string = 'pie';
  readonly donut: boolean = false;
  readonly donutRatio: number = 0;

  public showLeyend: boolean = true;
  public legend: ChartLegendConfiguration;
  /** Position of the legend (top or right) */
  public legendPosition: 'top' | 'right' | 'bottom' = 'top';
  public duration: number = 500;
  public cornerRadius: number = 0;
  public margin: ChartMarginConfiguration;
  /** Display pie labels */
  public showLabels: boolean = true;
  /** Configure what type of data to show in the label. It can be "key", "value" or "percent" */
  public labelType: 'key' | 'value' | 'percent' = 'key';
  /** Configure the minimum slice size for labels to show up */
  public labelThreshold: number = 0.01;
  public labelSunbeamLayout: boolean = true;
  /** Whether pie chart labels should be outside the slices instead of inside them */
  public labelsOutside: boolean = false;
  public color: string[];
  /** Formats value(s) */
  public valueType: string;
  /** Enables or disabled the tooltip */
  public showTooltip: boolean = true;

  constructor() {
    super();
    this.margin = new ChartMarginConfiguration();
    this.legend = new ChartLegendConfiguration();
  }

}
