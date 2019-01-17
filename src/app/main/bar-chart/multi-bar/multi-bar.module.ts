import { NgModule } from '@angular/core';

import { MultiBarComponent } from './multi-bar.component';
import { MultiBarRoutingModule } from './multi-bar-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MultiBarRoutingModule
  ],
  declarations: [
    MultiBarComponent
  ]
})
export class MultiBarModule { }
