import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { StackedAreaRoutingModule } from './stacked-area-routing.module';
import {  StackedAreaComponent } from './stacked-area.component';

@NgModule({
  imports: [
    CommonModule,
    StackedAreaRoutingModule,
    SharedModule
  ],
  declarations: [
    StackedAreaComponent
  ]
})
export class StackedAreaModule { }
