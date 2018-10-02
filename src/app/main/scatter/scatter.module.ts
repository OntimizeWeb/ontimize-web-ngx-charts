import { NgModule } from '@angular/core';
import { ScatterRoutingModule } from './scatter-routing.module';
import { ScatterComponent } from './scatter.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ScatterRoutingModule
  ],
  declarations: [
    ScatterComponent
  ]
})
export class ScatterModule { }
