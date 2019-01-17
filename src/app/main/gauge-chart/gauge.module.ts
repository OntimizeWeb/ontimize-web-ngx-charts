import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { GaugeRoutingModule } from './gauge-routing.module';

import { GaugeSimpleComponent } from './gauge-simple/gauge-simple.component';
import { GaugeSlimComponent } from './gauge-slim/gauge-slim.component';
import { GaugeSpaceComponent } from './gauge-space/gauge-space.component';
import { GaugeDashboardComponent } from './gauge-dashboard/gauge-dashboard.component';
import { RadialPercentComponent } from './radial-percent/radial-percent.component';

@NgModule({
  imports: [
    CommonModule,
    GaugeRoutingModule,
    SharedModule
  ],
  declarations: [
    GaugeSimpleComponent,
    GaugeSlimComponent,
    GaugeSpaceComponent,
    GaugeDashboardComponent,
    RadialPercentComponent
  ]
})
export class GaugeModule { }
