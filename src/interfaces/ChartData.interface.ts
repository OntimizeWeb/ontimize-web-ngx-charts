export interface ChartPoint {
  x: any;
  y: any;
}

export interface ChartSeries {
  //key  - the name of the series.
  key: string;
  //values - represents the array of {x,y} data points
  values: Array<ChartPoint>;
  //color - optional: choose your own line color (e.g.'#ff7f0e').
  color?: string;
  //area - optional: set to true if you want this line to turn into a filled area chart.
  area?: boolean;
}
