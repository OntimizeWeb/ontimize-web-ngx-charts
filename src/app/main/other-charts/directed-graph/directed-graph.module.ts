import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectedGraphRoutingModule } from './directed-graph-routing.module';
import { DirectedGraphComponent } from './directed-graph.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DirectedGraphRoutingModule
  ],
  declarations: [
    DirectedGraphComponent
  ]
})
export class DirectedGraphModule { }
