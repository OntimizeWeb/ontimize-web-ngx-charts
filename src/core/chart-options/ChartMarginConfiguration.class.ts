export class ChartMarginConfiguration {
  top: number = 30;
  bottom: number = 40;
  right: number = 40;
  left: number = 60;

  getMarginOptions(): Object {
    let opt = {
      top: this.top,
      bottom: this.bottom,
      right: this.right,
      left: this.left
    };
    return opt;
  }
}
