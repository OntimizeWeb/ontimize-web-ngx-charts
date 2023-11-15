import { AbstractChartOptions } from './AbstractChartOptions.class';
import { ForceDirectedGraphConfiguration } from './ForceDirectedGraphConfiguration.class';


export class ForceDirectedGraphOptions extends AbstractChartOptions {

  public getChartType(): string {
    return 'forceDirectedGraph';
  }

  public getChartOptions(): Object {
    let conf = this.chartConf instanceof ForceDirectedGraphConfiguration ? this.chartConf : new ForceDirectedGraphConfiguration();

    let chart = {
      type: this.getChartType(),
      height: conf.height,
      width: conf.width,
      margin: conf.margin.getMarginOptions(),
      linkStrenght: conf.linkStrength,
      friction: conf.friction,
      linkDist: conf.linkDist,
      charge: conf.charge,
      gravity: conf.gravity,
      theta: conf.theta,
      alpha: conf.alpha,
      radius: conf.radius,
      noData: conf.noDataMessage
    };
    return chart;
  }


}
