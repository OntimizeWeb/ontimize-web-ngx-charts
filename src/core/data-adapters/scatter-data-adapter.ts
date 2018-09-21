import { ChartDataAdapter } from "../../interfaces/ChartDataAdapterFactory.interface";
import { ChartConfiguration } from "../ChartConfiguration.class";
import { ChartPoint } from "../../interfaces/ChartData.interface";

export class ScatterDataAdapter implements ChartDataAdapter{
    
    protected chartConf: ChartConfiguration;
    protected xAxis: string;
    protected yAxis: string;

    constructor(chartConf: ChartConfiguration){
        if(chartConf){
            this.chartConf = chartConf;
            this.xAxis = this.chartConf.xAxis ? this.chartConf.xAxis: '';
            let yAxis = this.chartConf.yAxis;
            this.yAxis = yAxis && yAxis.length ? yAxis[0]: ''; 
        }
    }

    adaptResult(data: Array<any>): Array<ChartPoint> {
        const values = [];
        const self = this;
        data.forEach((item: any, _index: number) => {
            let itemLabel = item[self.xAxis];
            if (self.chartConf.translateService) {
                itemLabel = self.chartConf.translateService.get(itemLabel);
            }
            const val = {
                'x': itemLabel,
                'y': Math.abs(item[self.yAxis]),
                'shape': 'circle'
            };
            values.push(val)
        });
        return values;
    }

    createDefaultValues(): Object {
        var defaultData = [];
        var shapes = [ 'circle', 'cross', 'diamond']
        for(let x= 0; x<3; x++){
            defaultData.push({
                key: 'Group '+x,
                values: []
            });

            for(let y=0; y<15; y++){
                defaultData[x].values.push({
                    x: Math.random(),
                    y: Math.random(),
                    shape: shapes[x]
                })
            }
        }   
        return defaultData;
    }
}