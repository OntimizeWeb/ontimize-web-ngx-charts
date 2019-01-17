import { NgModule } from '@angular/core';

import { MultiBarHorizontalComponent } from './multi-bar-horizontal.component';
import { MultiBarHorizontalRoutingModule } from './multi-bar-horizontal-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MultiBarHorizontalRoutingModule
  ],
  declarations: [
    MultiBarHorizontalComponent
  ]
})
export class MultiBarHorizontalModule { }
