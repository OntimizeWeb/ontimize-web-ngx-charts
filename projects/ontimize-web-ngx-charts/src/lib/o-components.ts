import { OChartOnDemandComponentModule } from './components/chart-on-demand/o-chart-on-demand.module';
import { OChartComponentModule } from './components/chart/o-chart.module';

export * from './components/chart/o-chart.component';
export * from './components/chart/o-chart.factory';
export * from './components/chart-on-demand/o-chart-on-demand.component';

export const OCHART_MODULES: any = [
  OChartComponentModule,
  OChartOnDemandComponentModule
];
