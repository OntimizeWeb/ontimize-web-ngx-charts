import { NgModule } from '@angular/core';
 import { SharedModule } from '../../shared/shared.module';
import { DiscreteBarComponent } from './discrete-bar.component';
import { DiscreteBarRoutingModule } from './discrete-bar-routing.module';

@NgModule({
  imports: [
     SharedModule,
    DiscreteBarRoutingModule
  ],
  declarations: [
    DiscreteBarComponent
  ]
})
export class DiscreteBarModule { }
