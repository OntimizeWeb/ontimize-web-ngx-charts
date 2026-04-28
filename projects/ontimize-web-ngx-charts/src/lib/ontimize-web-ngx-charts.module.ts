import { NgModule } from '@angular/core';

import { OChartComponent } from './components/chart/o-chart.component';
import { OChartOnDemandComponent } from './components/chart-on-demand/o-chart-on-demand.component';
import { OCHART_PROVIDERS } from './o-services';
import { OChartOnDemandService } from './services/chart-on-demand.service';
import { TranslateChartService } from './services/translate-chart.service';

/**
 * Exports
 */
export * from './o-components';
export * from './o-models';
export * from './o-adapters';
export * from './o-interfaces';
export * from './o-services';

const OCHART_STANDALONE = [OChartComponent, OChartOnDemandComponent];

@NgModule({
  imports: OCHART_STANDALONE,
  exports: OCHART_STANDALONE,
  providers: [OCHART_PROVIDERS, OChartOnDemandService]
})

export class OChartModule {

  constructor(private readonly translationService: TranslateChartService) {
     this.translationService.loadTranslations();
  }
 }
