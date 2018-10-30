import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { BulletRoutingModule } from './bullet-routing.module';
import {  BulletComponent } from './bullet.component';

@NgModule({
  imports: [
    CommonModule,
    BulletRoutingModule,
    SharedModule
  ],
  declarations: [
    BulletComponent
  ]
})
export class BulletModule { }
