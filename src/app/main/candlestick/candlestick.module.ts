import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandlestickRoutingModule } from './candlestick-routing.module';
import { CandlestickComponent } from './candlestick.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CandlestickRoutingModule
  ],
  declarations: [
    CandlestickComponent
  ]
})
export class CandlestickModule { }
