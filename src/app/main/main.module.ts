import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    HttpModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
