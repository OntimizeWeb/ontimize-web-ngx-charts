import { Injector, NgModule } from '@angular/core';
import { O_CHART_ON_DEMAND_SERVICE, OntimizePreferencesService, preferencesServiceFactory } from 'ontimize-web-ngx';

import { OChartOnDemandService } from '../../services/chart-on-demand.service';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { OChartOnDemandComponent } from './o-chart-on-demand.component';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';

/**
 * @deprecated Use `OChartOnDemandComponent` directly (standalone). This module will be removed in a future version.
 */
@NgModule({
  imports: [OChartOnDemandComponent, SavePreferencesDialogComponent, LoadPreferencesDialogComponent],
  exports: [OChartOnDemandComponent],
  providers: [
    { provide: O_CHART_ON_DEMAND_SERVICE, useClass: OChartOnDemandService },
    { provide: OntimizePreferencesService, useFactory: preferencesServiceFactory, deps: [Injector] }
  ]
})
export class OChartOnDemandComponentModule { }
