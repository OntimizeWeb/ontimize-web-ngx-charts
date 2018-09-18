import { ChartConfiguration } from "../ChartConfiguration.class";
import { ChartAxisConfiguration } from "./ChartAxisConfiguration.class";
import { Margin } from "../Margin.class";
import { ChartLegendConfiguration } from "./ChartLegendConfiguration.class";

export class ScatterChartConfiguration extends ChartConfiguration {
    showDistX: boolean = true;
    showDistY: boolean = true;
    duration: number = 350;
    xAxis1: ChartAxisConfiguration;
    yAxis1: ChartAxisConfiguration;
    xScale: any = null;
    yScale: any = null;
    legend: ChartLegendConfiguration;
    rightAlignYAxis: boolean = false;
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    showLegend: boolean = true;
    margin: Margin;
    clipEdge: boolean = false;
    colors: Array<string> = null;
    shape: Array<string> = null;


    constructor(){
        super();
        this.xAxis1 = new ChartAxisConfiguration();
        this.yAxis1 = new ChartAxisConfiguration();
        this.margin = new Margin();
        this.legend = new ChartLegendConfiguration();
    }

}