import { NgModule } from '@angular/core';

import { OtherChartsRoutingModule } from '../../main/other-charts/other-charts-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    OtherChartsRoutingModule
  ],
  declarations: [

  ]
})
export class OtherChartsModule { }
