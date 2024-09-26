import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DataInputDialogComponent } from './data-input-dialog/data-input-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent,
    DataInputDialogComponent
  ]
})
export class MainModule { }
