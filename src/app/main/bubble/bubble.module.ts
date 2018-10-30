import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { BubbleRoutingModule } from './bubble-routing.module';
import {  BubbleComponent } from './bubble.component';


@NgModule({
  imports: [
    CommonModule,
    BubbleRoutingModule,
    SharedModule
  ],
  declarations: [
    BubbleComponent
  ]
})
export class BubbleModule { }
