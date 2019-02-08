export interface ChartPoint {
  x: any;
  y: any;
  color?: string;
}

export interface ChartSeries {
  /** key - the name of the series */
  key: string;
  /** values - represents the array of {x, y} data points */
  values: Array<ChartPoint>;
  /** color - optional: choose your own line color (e.g.'#ff7f0e') */
  color?: string;
  /** area - optional: set to true if you want this line to turn into a filled area chart */
  area?: boolean;
  /** shape - optional: choose your preferred shape for your point */
  shape?: string;
  /** bar - optional: set true in LinePLusBarChart for select bar option */
  bar?: boolean;
}
