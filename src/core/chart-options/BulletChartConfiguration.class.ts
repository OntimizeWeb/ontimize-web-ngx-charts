import { ChartConfiguration } from './ChartConfiguration.class';
import { ChartMarginConfiguration } from './ChartMarginConfiguration.class';

export class BulletChartConfiguration extends ChartConfiguration {
  ticks: number = null;
  tickFormat: any = null;
  orient: string = 'left';
  duration: number = 500;

  title: string = '';
  subtitle: string = '';

  margin: ChartMarginConfiguration;

  constructor() {
    super();
    this.margin = new ChartMarginConfiguration();
  }
}