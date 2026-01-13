import { ChartConfiguration } from './ChartConfiguration.class';

export class MultiBarHorizontalChartConfiguration extends ChartConfiguration {

  public readonly type: string = 'multiBarHorizontalChart';

  /** Enable/disable animations */
  public animations: boolean = true;

  /** Behavior */
  public noBarWhenZero: boolean = true;
  public roundEdges: boolean = true;
  public barPadding: number = 8;


  constructor() {
    super();
  }

}
