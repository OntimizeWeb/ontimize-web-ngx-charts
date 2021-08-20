import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { O_CHART_ON_DEMAND_SERVICE, OntimizeWebModule } from 'ontimize-web-ngx';

import { OChartOnDemandService } from '../../services/chart-on-demand.service';
import { OChartComponentModule } from '../chart/o-chart.module';
import { OChartOnDemandComponent } from './o-chart-on-demand.component';


@NgModule({
  declarations: [OChartOnDemandComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    FormsModule,
    OChartComponentModule
  ],
  exports: [OChartOnDemandComponent],
  providers: [{provide: O_CHART_ON_DEMAND_SERVICE, useClass: OChartOnDemandService}],
  entryComponents: [OChartOnDemandComponent]
})
export class OChartOnDemandComponentModule { }
