import { PieChartConfiguration } from './PieChartConfiguration.class';

export class DonutChartConfiguration extends PieChartConfiguration {
  readonly donut: boolean = true;
  donutRatio: number = 0.35;

  constructor() {
    super();
  }
}
