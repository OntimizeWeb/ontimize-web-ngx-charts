import { ChartSeries, ChartDataAdapter } from '../../interfaces';
import {
  ChartConfiguration
} from '../../core';

export class MultiBarHorizontalDataAdapter implements ChartDataAdapter{
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
        return [{
            "key": "Series1",
            "color": "#d62728",
            "values": [
                {
                    "x": "Group A",
                    "y": -1.8746444827653
                },
                {
                    "x": "Group B",
                    "y": -8.0961543492239
                },
                {
                    "x": "Group C",
                    "y": -0.57072943117674
                },
                {
                    "x": "Group D",
                    "y": -2.4174010336624
                },
                {
                    "x": "Group E",
                    "y": -0.72009071426284
                },
                {
                    "x": "Group F",
                    "y": -0.77154485523777
                },
                {
                    "x": "Group G",
                    "y": -0.90152097798131
                },
                {
                    "x": "Group H",
                    "y": -0.91445417330854
                },
                {
                    "x": "Group I",
                    "y": -0.055746319141851
                }
            ]
        },
        {
            "key": "Series2",
            "color": "#1f77b4",
            "values": [
                {
                    "x": "Group A",
                    "y": 25.307646510375
                },
                {
                    "x": "Group B",
                    "y": 16.756779544553
                },
                {
                    "x": "Group C",
                    "y": 18.451534877007
                },
                {
                    "x": "Group D",
                    "y": 8.6142352811805
                },
                {
                    "x": "Group E",
                    "y": 7.8082472075876
                },
                {
                    "x": "Group F",
                    "y": 5.259101026956
                },
                {
                    "x": "Group G",
                    "y": 0.30947953487127
                },
                {
                    "x": "Group H",
                    "y": 0
                },
                {
                    "x": "Group I",
                    "y": 0
                }
            ]
        }
        ]
    }
}