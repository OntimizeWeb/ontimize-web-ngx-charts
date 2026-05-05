import { ChartConfiguration } from "./ChartConfiguration.class";

export class DefaultChartConfiguration extends ChartConfiguration {

  /** Tipo de escala de color (‘ordinal’ o ‘linear’) */
  public schemeType: 'ordinal' | 'linear' = 'ordinal';

  /** Redondea dominios para alinear líneas de cuadrícula */
  public roundDomains: boolean = false;

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

  constructor() {
    super();
  }
}