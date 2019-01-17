import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AreaRoutingModule } from 'app/main/area-chart/area-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AreaRoutingModule
  ]
})
export class AreaChartModule { }
