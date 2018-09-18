import { ChartConfiguration } from "../ChartConfiguration.class";
import { ChartAxisConfiguration } from "./ChartAxisConfiguration.class";
import { ChartLegendConfiguration } from "./ChartLegendConfiguration.class";

export class MultiBarHorizontalChartConfiguration extends ChartConfiguration{
    showLegend: boolean = true;
    legend: ChartLegendConfiguration;

    showControls: boolean = true;
    showValues: boolean = true;
    
    valuePadding: number = 60;
    groupSpacing: number = 0.1;
    duration: number = 500;
    stacked: boolean = false;
    
    axisX: ChartAxisConfiguration;
    axisY: ChartAxisConfiguration;
    showXAxis: boolean = true;
    showYAxis: boolean = false;
    xScale: any = null;
    yScale: any = null;
    
    constructor(){
        super();
        this.axisX = new ChartAxisConfiguration();
        this.axisY = new ChartAxisConfiguration();
        this.legend = new ChartLegendConfiguration();
    }
}