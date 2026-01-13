import { ChartConfiguration } from './ChartConfiguration.class';

export class StackedAreaChartConfiguration extends ChartConfiguration {
  readonly type: string = 'stackedAreaChart';

  /** Opacidad del área sombreada (para min/max range) */
  public rangeFillOpacity: number = 0.15;

  /** Define si se muestra la línea de tiempo (solo escalas lineales o de tiempo) */
  public timeline: boolean = false;

  /** Líneas de referencia */
  public referenceLines?: { name: string; value: number }[];
  public showRefLines: boolean = false;
  public showRefLabels: boolean = true;


  constructor() {
    super();
  }
}