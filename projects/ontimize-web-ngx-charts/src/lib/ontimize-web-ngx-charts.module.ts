import { NgModule } from '@angular/core';

import { OCHART_MODULES } from './o-components';
import { OCHART_PROVIDERS } from './o-services';
import { OChartOnDemandService } from './services/chart-on-demand.service';


@NgModule({
  imports: OCHART_MODULES,
  exports: OCHART_MODULES,
  providers: [OCHART_PROVIDERS, OChartOnDemandService]
})

export class OChartModule { }
