import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleRoutingModule } from './bubble-routing.module';
import { BubbleComponent } from './bubble.component';
import { SharedModule } from 'app/shared/shared.module';


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
