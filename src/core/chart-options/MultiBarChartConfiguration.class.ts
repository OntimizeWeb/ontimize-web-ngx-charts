import { ChartConfiguration } from "./ChartConfiguration.class";
import { ChartMarginConfiguration } from "./ChartMarginConfiguration.class";
import { ChartLegendConfiguration } from "./ChartLegendConfiguration.class";
import { ChartAxisConfiguration } from "./ChartAxisConfiguration.class";
import { ChartControlConfiguration } from "./ChartControlConfiguration.class";

export class MultiBarChartConfiguration extends ChartConfiguration {
    readonly type: string = 'multiBar';

    margin : ChartMarginConfiguration;

    showLegend: boolean = true;
    legend: ChartLegendConfiguration;

    duration: number = 500;
    stacked: boolean = true;
    hideable: boolean= false;
    groupSpacing: number = 0.1;
    reduceXTicks: boolean = true;

    showControls: boolean = true;
    control: ChartControlConfiguration;

    rotateLabels: number = 0;
    wrapLabels: boolean = false;

    showXAxis: boolean = true;
    showYAxis: boolean = true;
    rightAlignYAxis: boolean = false;
    x1Axis: ChartAxisConfiguration;
    y1Axis: ChartAxisConfiguration;

    colors: Array<string> = null;



    constructor(){
        super();
        this.margin = new ChartMarginConfiguration();
        this.legend = new ChartLegendConfiguration();
        this.x1Axis = new ChartAxisConfiguration();
        this.y1Axis = new ChartAxisConfiguration();
        this.control = new ChartControlConfiguration();
    }

}