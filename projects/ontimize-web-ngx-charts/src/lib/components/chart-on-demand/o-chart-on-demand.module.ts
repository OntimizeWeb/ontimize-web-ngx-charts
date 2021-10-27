import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { O_CHART_ON_DEMAND_SERVICE, OntimizeWebModule } from 'ontimize-web-ngx';

import { OChartOnDemandService } from '../../services/chart-on-demand.service';
import { OChartTranslatePipe } from '../../util/o-chart-translate.pipe';
import { OChartComponentModule } from '../chart/o-chart.module';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { OChartOnDemandComponent } from './o-chart-on-demand.component';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';


@NgModule({
  declarations: [OChartOnDemandComponent, SavePreferencesDialogComponent, LoadPreferencesDialogComponent, OChartTranslatePipe],
  imports: [
    CommonModule,
    OntimizeWebModule,
    FormsModule,
    OChartComponentModule
  ],
  exports: [OChartOnDemandComponent],
  providers: [{provide: O_CHART_ON_DEMAND_SERVICE, useClass: OChartOnDemandService}],
  entryComponents: [OChartOnDemandComponent, SavePreferencesDialogComponent, LoadPreferencesDialogComponent]
})
export class OChartOnDemandComponentModule { }
