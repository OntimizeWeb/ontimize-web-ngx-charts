import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'

import { RadarRoutingModule } from './radar-routing.module';
import {  RadarComponent } from './radar.component';

@NgModule({
  imports: [
    CommonModule,
    RadarRoutingModule,
    SharedModule
  ],
  declarations: [
    RadarComponent
  ]
})
export class RadarModule { }
