import { DefaultChartConfiguration } from './DefaultChartConfiguration.class';

export class MultiBarChartConfiguration extends DefaultChartConfiguration {

  public readonly type: string = 'multiBar';

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
