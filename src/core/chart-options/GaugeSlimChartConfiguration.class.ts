import { ChartConfiguration } from './ChartConfiguration.class';

export class GaugeSlimChartConfiguration extends ChartConfiguration {
  readonly donut: boolean = true;
  arcsRadius: number = 0.1;
  readonly showLabels: boolean = false;
  showLegend: boolean = false;
  legendPosition: string = 'top';
  title: string = '';
  titleOffset: number = 0;
  color: Array<string> = ['#1A5276', '#A3E4D7'];
  duration: number = 500;
  growOnHover: boolean = false;
}