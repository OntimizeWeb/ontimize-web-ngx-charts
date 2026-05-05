import { ChartConfiguration } from './ChartConfiguration.class';

export class PieChartConfiguration extends ChartConfiguration {

  public readonly type: string = 'pie';

  public showLabels: boolean = false;
  public labelFormatting?: (d: any) => string;
  public trimLabels: boolean = true;
  public maxLabelLength: number = 10;

  public explodeSlices: boolean = false;

  public donut: boolean = false;
  public donutRatio: number = 0; // equivale a arcWidth

  public tooltipText?: (d: any) => string;

}
