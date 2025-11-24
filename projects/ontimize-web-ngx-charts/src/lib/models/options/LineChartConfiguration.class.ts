import { TemplateRef } from '@angular/core';
import { ChartConfiguration } from './ChartConfiguration.class';

export class LineChartConfiguration extends ChartConfiguration {

  public readonly type: string = 'line';

  // --- Exclusivos de Line Chart (no están en ChartConfiguration) ---

  /** Tipo de escala de color (‘ordinal’ o ‘linear’) */
  public schemeType: 'ordinal' | 'linear' = 'ordinal';

  /** Opacidad del área sombreada (para min/max range) */
  public rangeFillOpacity: number = 0.15;

  /** Redondea dominios para alinear líneas de cuadrícula */
  public roundDomains: boolean = false;

  /** Define si se muestra la línea de tiempo (solo escalas lineales o de tiempo) */
  public timeline: boolean = false;

  /** Define la interpolación de la curva (acepta cualquier d3.curve) */
  public curve?: any;

  /** Líneas de referencia */
  public referenceLines?: { name: string; value: number }[];
  public showRefLines: boolean = false;
  public showRefLabels: boolean = true;

  /** Escala mínima y máxima para ejes */
  public xScaleMin?: any;
  public xScaleMax?: any;
  public yScaleMin?: number;
  public yScaleMax?: number;

  /** Configuración adicional de ticks */
  public trimXAxisTicks: boolean = true;
  public trimYAxisTicks: boolean = true;
  public rotateXAxisTicks: boolean = true;
  public maxXAxisTickLength: number = 16;
  public maxYAxisTickLength: number = 16;
  public wrapTicks: boolean = false;


}
