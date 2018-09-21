import { ChartDataAdapter } from '../../interfaces';
import {
  ChartConfiguration
} from '../../core';
import { DiscreteBarChartConfiguration } from '../chart-options/DiscreteBarChartConfiguration.class';

export class DiscreteBarDataAdapter implements ChartDataAdapter{
    protected chartConf: ChartConfiguration;
  protected xAxis: string;
  protected yAxis: string;

  constructor(chartConf: ChartConfiguration) {
     if(chartConf) {
      this.chartConf = chartConf;
      this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis : '';
      let yAxis = this.chartConf.yAxis;
      this.yAxis = yAxis && yAxis.length ? yAxis[0] : '';
    }
  }

  adaptResult(data: Array<any>): Object {
    const values = [];
    const self = this;
    const params = this.chartConf as DiscreteBarChartConfiguration;
    data.forEach( (item: any, _index: number) => {
      let itemLabel = item[self.xAxis];
      if(self.chartConf.translateService) {
        itemLabel = self.chartConf.translateService.get(itemLabel);
      }
      const filtered = self.filterCategory(itemLabel, values);
      if(params.agroup){
        if(filtered && filtered.length === 0){
          const val = {
            'x': itemLabel,
            'y': item[self.yAxis]
          };
          values.push(val)
        }
        else {
          filtered[0]['y'] += item[self.yAxis];
        }
      }
      else{
        const val = {
          'x': itemLabel,
          'y': item[self.yAxis]
        };
        values.push(val)
      }
    });
    let result = {
      key: self.xAxis,
      values: values
    };
    if(self.chartConf.translateService){
      result['key'] = self.chartConf.translateService.get(self.xAxis);
    }

    return result;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
        filtered = values.filter((val: Object) =>(val['x'] === category));
    }
    return filtered;
  }
}