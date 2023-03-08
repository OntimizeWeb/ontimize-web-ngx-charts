import { NgModule } from '@angular/core';
import { DonutRoutingModule } from './donut-routing.module';
import { DonutComponent } from './donut.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DonutRoutingModule
  ],
  declarations: [
    DonutComponent
  ]
})
export class DonutModule { }
