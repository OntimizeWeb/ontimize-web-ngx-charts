import {
    ChartSeries,
    ChartPoint
} from './ChartData.interface';

export interface ChartDataAdapter {
    adaptResult(data: Array<any>): Array<ChartSeries | ChartPoint>;
}

export interface ChartDataAdapterFactory {
    getAdapter(chartType: string): ChartDataAdapter;
}
