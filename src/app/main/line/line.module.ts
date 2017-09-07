import { NgModule } from '@angular/core';
 import { SharedModule } from '../../shared/shared.module';
import { LineComponent } from './line.component';
import { LineRoutingModule } from './line-routing.module';

@NgModule({
  imports: [
     SharedModule,
    LineRoutingModule
  ],
  declarations: [
    LineComponent
  ]
})
export class LineModule { }
