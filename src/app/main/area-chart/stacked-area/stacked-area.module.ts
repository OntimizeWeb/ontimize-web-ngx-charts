import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedAreaRoutingModule } from './stacked-area-routing.module';
import { StackedAreaComponent } from './stacked-area.component';
import { SharedModule } from 'app/shared/shared.module';

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
