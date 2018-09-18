import { ChartConfiguration } from "../ChartConfiguration.class";
import { Margin } from "../Margin.class";
import { ChartLegendConfiguration } from "./ChartLegendConfiguration.class";
import { ChartAxisConfiguration } from "./ChartAxisConfiguration.class";

export class MultiBarChartConfiguration extends ChartConfiguration {
    margin : Margin;

    showLegend: boolean = true;
    legend: ChartLegendConfiguration;
   
    duration: number = 500;
    stacked: boolean = true;
    hideable: boolean= false;
    groupSpacing: number = 0.1;
    reduceXTicks: boolean = true;
    showControls: boolean = true;
    
    rotateLabels: number = 0;
    wrapLabels: boolean = false;
    
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    rightAlignYAxis: boolean = false;
    xScale: any = null;
    yScale: any = null;
    axisX: ChartAxisConfiguration;
    axisY: ChartAxisConfiguration;

    constructor(){
        super();
        this.margin = new Margin();
        this.legend = new ChartLegendConfiguration();
        this.axisX = new ChartAxisConfiguration();
        this.axisY = new ChartAxisConfiguration();
    }

}