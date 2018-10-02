import { NgModule } from '@angular/core';

import { LineplusbarRoutingModule } from './lineplusbar-routing.module';
import { LineplusbarComponent } from './lineplusbar.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LineplusbarRoutingModule
  ],
  declarations: [
    LineplusbarComponent
  ]
})
export class LineplusbarModule { }
