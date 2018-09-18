import { ChartDataAdapter } from "../../interfaces/ChartDataAdapterFactory.interface";
import { ChartSeries } from "../../interfaces/ChartData.interface";
import { ChartConfiguration } from '../ChartConfiguration.class';

export class MultiBarDataAdapter implements ChartDataAdapter {

    protected chartConf: ChartConfiguration;

    protected xAxis: string;
    protected yAxis: Array<string>;
  
    constructor(chartConf: ChartConfiguration) {
      if(chartConf) {
        this.chartConf = chartConf;
        this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
        let yAxis = this.chartConf.yAxis;
        this.yAxis = yAxis && yAxis.length ? yAxis : [];
      }
    }
  
    adaptResult(data: Array<any>): Array<ChartSeries> {
      let result: Array<ChartSeries> = [];
      if (data && data.length) {
        let seriesvalues = this.processSeriesValues(data);
        var self = this;
        this.yAxis.forEach((axis: string, _index: number) => {
          let serie: ChartSeries = {
            'key': 'series',
            'values': []
          };
          let key = axis;
          if(self.chartConf.translateService) {
            key = self.chartConf.translateService.get(key);
          }
          serie['key'] = key;
          serie['values'] = seriesvalues[axis];
  
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

    createDefaultData(): Object {
      let values = [];
      let values0 = [];
      let values1 = [];
      //change number of bars here by editing '50'//
      for (var h = 0; h < 50; h++) {
        //replace the y values with your own values//
        values.push({ x: h, y: Math.random() + 1 });
        values0.push({ x: h, y: Math.sqrt(h) / 2 });
        values1.push({ x: h, y: Math.abs(h - 18) })
      }

      return [{
        key: 'Values 1',
        color: '#bcbd22',
        values: values
      },
      {
        key: 'Values 2',
        color: '#1f77b4',
        values: values0
      },
      {
        key: 'Values 3',
        color: 'black',
        values: values1
      }
      ];
    }

}