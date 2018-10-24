import { PieChartConfiguration } from './PieChartConfiguration.class';

export class DonutChartConfiguration extends PieChartConfiguration {
  readonly type: string = 'donutChart';
  readonly donut: boolean = true;
  donutRatio: number = 0.35;

  constructor() {
    super();
  }
}
