import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OntimizeWebModule, O_CHART_ON_DEMAND_SERVICE } from 'ontimize-web-ngx';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { OChartOnDemandService } from '../../services/chart-on-demand.service';
import { OChartTranslatePipe } from '../../util/o-chart-translate.pipe';
import { OChartComponentModule } from '../chart/o-chart.module';
import { LoadPreferencesDialogComponent } from './load-preferences-dialog/load-preferences-dialog.component';
import { OChartOnDemandComponent } from './o-chart-on-demand.component';
import { SavePreferencesDialogComponent } from './save-preferences-dialog/save-preferences-dialog.component';
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [OChartOnDemandComponent, SavePreferencesDialogComponent, LoadPreferencesDialogComponent, OChartTranslatePipe],
  imports: [
    CommonModule,
    OntimizeWebModule,
    FormsModule,
    OChartComponentModule,
    [LottieModule.forRoot({ player: playerFactory })]
  ],
  exports: [OChartOnDemandComponent],
  providers: [{ provide: O_CHART_ON_DEMAND_SERVICE, useClass: OChartOnDemandService }],
  entryComponents: [OChartOnDemandComponent, SavePreferencesDialogComponent, LoadPreferencesDialogComponent]
})
export class OChartOnDemandComponentModule { }
