export class Margin {
  top: number;
  bottom: number;
  right: number;
  left: number;

  getChartOptions() : Object {
    let opt = {
      top: this.top,
      bottom: this.bottom,
      right: this.right,
      left: this.left
    }
    return opt;
  }
}
