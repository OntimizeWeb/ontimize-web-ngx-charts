import { Injectable } from '@angular/core';
import { nvD3 } from 'ontimize-web-ngx-nvd3';

import { ChartMarginConfiguration } from '../models';

@Injectable()
export class ChartService {
  private _chart: any;
  private _chartWrapper: nvD3;

  public get chart() {
    return this._chart;
  }

  public get chartWrapper(): nvD3 {
    return this._chartWrapper;
  }

  public set chartWrapper(chart: nvD3) {
    this._chartWrapper = chart;
    if (this._chartWrapper) {
      this._chart = (this._chartWrapper as any).chart;
    }
  }

  /**
   * Returns all configured options of chart.
   * @returns Object
   */
  public getChartOptions(): Object {
    if (this._chartWrapper) {
      return this._chartWrapper.options['chart'];
    }
    return {};
  }

  public setXAxisLabel(text: string) {
    let opts = this.getChartOptions();
    if (opts && opts['xAxis']) {
      opts['xAxis']['axisLabel'] = text;
    }
  }

  public setXAxisLabelDistance(distance: number) {
    let opts = this.getChartOptions();
    if (opts && opts['xAxis']) {
      opts['xAxis']['axisLabelDistance'] = distance;
    }
  }

  public setYAxisLabel(text: string) {
    let opts = this.getChartOptions();
    if (opts && opts['yAxis']) {
      opts['yAxis']['axisLabel'] = text;
    }
  }

  public setYAxisLabelDistance(distance: number) {
    let opts = this.getChartOptions();
    if (opts && opts['yAxis']) {
      opts['yAxis']['axisLabelDistance'] = distance;
    }
  }

  setMargin(margin: ChartMarginConfiguration) {
    let opts = this.getChartOptions();
    if (opts && margin) {
      opts['margin'] = margin;
    }
  }

}
