import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GaugeDashboardComponent } from './gauge-dashboard/gauge-dashboard.component';
import { GaugeSimpleComponent } from './gauge-simple/gauge-simple.component';
import { GaugeSlimComponent } from './gauge-slim/gauge-slim.component';
import { GaugeSpaceComponent } from './gauge-space/gauge-space.component';
import { RadialPercentComponent } from './radial-percent/radial-percent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gaugeSimple'
  },
  {
    path: 'gaugeSimple',
    component: GaugeSimpleComponent
  },
  {
    path: 'gaugeSlim',
    component: GaugeSlimComponent
  },
  {
    path: 'gaugeSpace',
    component: GaugeSpaceComponent
  },
  {
    path: 'gaugeDashboard',
    component: GaugeDashboardComponent
  },
  {
    path: 'radialPercent',
    component: RadialPercentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaugeRoutingModule { }
