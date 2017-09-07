import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PieComponent } from './pie.component';
import { PieRoutingModule } from './pie-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PieRoutingModule
  ],
  declarations: [
    PieComponent
  ]
})
export class PieModule { }
