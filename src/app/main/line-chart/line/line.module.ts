import { NgModule } from '@angular/core';
import { LineComponent } from './line.component';
import { LineRoutingModule } from './line-routing.module';
import { SharedModule } from 'app/shared/shared.module';

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
