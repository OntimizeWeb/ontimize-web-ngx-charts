import { ChartDataAdapter } from '../../interfaces/ChartDataAdapterFactory.interface';
import { ChartSeries, ChartPoint } from '../../interfaces/ChartData.interface';
import { ChartConfiguration } from '../chart-options/ChartConfiguration.class';
import { LinePlusBarFocusChartConfiguration } from '../chart-options/LinePlusBarFocusChartConfiguration.class';

declare var d3: any;

export class LinePlusBarDataAdapter implements ChartDataAdapter {
  protected chartConf: ChartConfiguration;

  protected xAxis: string;
  protected yAxis: Array<string>;

  constructor(chartConf: ChartConfiguration) {
    if (chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      let yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis : [];
    }
  }

  adaptResult(data: Array<any>): Array<ChartSeries> {
    let result: Array<ChartSeries> = [];
    const params = this.chartConf as LinePlusBarFocusChartConfiguration;
    if (data && data.length) {
      let seriesvalues = this.processSeriesValues(data);
      var self = this;
      this.yAxis.forEach((axis: string, _index: number) => {
        let serie: ChartSeries = {
          'key': 'series',
          'bar': false,
          'values': []
        };
        if (params.bars && params.bars[_index]) {
          serie['bar'] = params.bars[_index];
        }
        let key = axis;
        if (self.chartConf.translateService) {
          key = self.chartConf.translateService.get(key);
        }
        serie['key'] = key;
        if ((this.chartConf as LinePlusBarFocusChartConfiguration).to_zero && (this.chartConf as LinePlusBarFocusChartConfiguration).to_zero[_index]) {
          serie['values'] = this.beautyResult(seriesvalues[axis], true);
        } else if ((this.chartConf as LinePlusBarFocusChartConfiguration).to_previusValue && (this.chartConf as LinePlusBarFocusChartConfiguration).to_previusValue[_index]) {
          serie['values'] = this.beautyResult(seriesvalues[axis], false);
        } else {
          serie['values'] = seriesvalues[axis];
        }

        result.push(serie);
      });
    }
    return result;
  }

  processSeriesValues(data: Array<Object>): Object {
    let seriesvalues = {};
    var self = this;
    data.forEach((item: any, _index: number) => {

      self.yAxis.forEach((axis: string, _axisIndex: number) => {
        if (seriesvalues[axis] === undefined) {
          seriesvalues[axis] = [];
        }
        let val = {
          'x': item[self.xAxis],
          'y': item[axis]
        };
        seriesvalues[axis].push(val);
      });
    });
    return seriesvalues;
  }

  //Function to create equispaced point in the chart
  beautyResult(data: Array<any>, zeros: boolean): ChartPoint[] {
    let values = [];
    let day = 24 * 60 * 60 * 1000, previusPoint = data[0]['x'], previusValue = 0;
    data.forEach((element) => {
      while ((element['x'] - previusPoint) > day) {
        previusPoint += day;
        if (zeros)
          values.push({ x: previusPoint, y: 0 });
        else
          values.push({ x: previusPoint, y: previusValue });
      }
      values.push(element);
      previusPoint = element['x'];
      previusValue = element['y'];
    });
    return values;
  }
}
