import { ChartConfiguration } from "../ChartConfiguration.class";
import { ChartAxisConfiguration } from "./ChartAxisConfiguration.class";
import { ChartLegendConfiguration } from "./ChartLegendConfiguration.class";

export class LinePlusBarFocusChartConfiguration extends ChartConfiguration {
    x1Axis: ChartAxisConfiguration;
    y1Axis: ChartAxisConfiguration;
    xScale: any;
    yScale: any;
    switchYAxisOrder: boolean = false;

    showLabels: boolean = false;
    showLegend: boolean = true;
    legend: ChartLegendConfiguration;
    
    isArea: any;
    interactive: boolean = true;

    focusEnable: boolean = true;
    focusShowAxisX: boolean = true;
    focusShowAxisY: boolean = false;

    bars: Array<boolean>

    constructor() {
        super();
        this.x1Axis = new ChartAxisConfiguration();
        this.y1Axis = new ChartAxisConfiguration();
        this.legend = new ChartLegendConfiguration();
        this.isArea = this.funtionIsArea();
    }

    funtionIsArea() {
        return function(d) { return d.area; };
    }
}