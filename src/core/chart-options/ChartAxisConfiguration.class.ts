export class ChartAxisConfiguration {
  axisLabel: string = '';
  axisLabelDistance: number = 0;
  staggerLabels: boolean = false;
  rotateLabels: number = 0;
  rotateYLabel: boolean = true;
  showMaxMin: boolean = true;
  height: number = 60;
  width: number = 75;
  duration: number = 250;
  orient: string = 'bottom';
  ticks: number = null;
  tickValues: any = null;
  tickFormat: any = null;

  getAxisOptions(): Object {
    let axis = {
      axisLabel: this.axisLabel,
      axisLabelDistance: this.axisLabelDistance,
      staggerLabels: this.staggerLabels,
      rotateLabels: this.rotateLabels,
      rotateYLabel: this.rotateYLabel,
      showMaxMin: this.showMaxMin,
      height: this.height,
      width: this.width,
      duration: this.duration,
      orient: this.orient,
      ticks: this.ticks,
      tickValues: this.tickValues,
      tickFormat: this.tickFormat,
    };
    return axis;
  }
}
