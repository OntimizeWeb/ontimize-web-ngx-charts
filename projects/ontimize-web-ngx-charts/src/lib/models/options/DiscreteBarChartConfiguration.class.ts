import { DefaultChartConfiguration } from './DefaultChartConfiguration.class';

export class DiscreteBarChartConfiguration extends DefaultChartConfiguration {
  readonly type: string = 'discreteBar';

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
