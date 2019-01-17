import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarRoutingModule } from './radar-routing.module';
import { RadarComponent } from './radar.component';
import { SharedModule } from 'app/shared/shared.module';

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
