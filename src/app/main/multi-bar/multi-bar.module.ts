import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MultiBarComponent } from './multi-bar.component';
import { MultiBarRoutingModule } from './multi-bar-routing.module';

@NgModule({
  imports: [
     SharedModule,
    MultiBarRoutingModule
  ],
  declarations: [
    MultiBarComponent
  ]
})
export class MultiBarModule { }
