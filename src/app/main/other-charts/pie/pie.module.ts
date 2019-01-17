import { NgModule } from '@angular/core';
import { PieComponent } from './pie.component';
import { PieRoutingModule } from './pie-routing.module';
import { SharedModule } from 'app/shared/shared.module';

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
