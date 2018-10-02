import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OhlcRoutingModule } from './ohlc-routing.module';
import { OhlcComponent } from './ohlc.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    OhlcRoutingModule
  ],
  declarations: [
    OhlcComponent
  ]
})
export class OhlcModule { }
