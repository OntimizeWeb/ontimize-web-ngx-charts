import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MultiBarHorizontalComponent } from './multi-bar-horizontal.component';
import { MultiBarHorizontalRoutingModule } from './multi-bar-horizontal-routing.module';

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
