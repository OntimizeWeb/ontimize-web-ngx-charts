import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
