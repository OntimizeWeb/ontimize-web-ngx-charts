import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletRoutingModule } from './bullet-routing.module';
import { BulletComponent } from './bullet.component';
import { SharedModule } from 'app/shared/shared.module';

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
