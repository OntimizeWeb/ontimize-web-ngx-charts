import { NgModule } from '@angular/core';
import { DiscreteBarComponent } from './discrete-bar.component';
import { DiscreteBarRoutingModule } from './discrete-bar-routing.module';
import { SharedModule } from 'app/shared/shared.module';

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
