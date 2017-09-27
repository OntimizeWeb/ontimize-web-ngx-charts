import { NgModule } from '@angular/core';

import { NavigationBarService } from './services/navigation-bar.service';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';


@NgModule({
  imports: [
    OntimizeWebModule,
    HighlightJsModule,
    OChartModule
  ],
  declarations: [
    ExampleComponent,
    HighlightComponent
  ],
  exports: [
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent,
    OChartModule
  ],
  providers: [
    HighlightJsService,
    NavigationBarService
  ]
})
export class SharedModule { }
