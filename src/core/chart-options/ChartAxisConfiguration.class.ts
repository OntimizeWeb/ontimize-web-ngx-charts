export class ChartAxisConfiguration {
  axisLabel: string = '';
  axisLabelDistance: number = 0;
  staggerLabels: boolean = false;
  rotateLabels: number = 0;
  rotateYLabel: boolean = true;
  showMaxMin: boolean = true;

  duration: number = 250;
  orient: string = 'bottom';
  fontSize: number = 12;

  tickFormat: any = null;
  tickValues: Array<number> = null;
  ticks: number = null;


  getAxisOptions(): Object {
    let axis = {
      axisLabel: this.axisLabel,
      axisLabelDistance: this.axisLabelDistance,
      staggerLabels: this.staggerLabels,
      rotateLabels: this.rotateLabels,
      rotateYLabel: this.rotateYLabel,
      showMaxMin: this.showMaxMin,
      duration: this.duration,
      orient: this.orient,
      fontSize: this.fontSize,
      tickFormat: this.tickFormat,
      ticks: this.ticks,
      ticksValues: this.tickValues
    };
    return axis;
  }
}
