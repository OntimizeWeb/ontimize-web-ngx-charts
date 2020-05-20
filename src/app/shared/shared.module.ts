import { NgModule } from '@angular/core';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';

import { CustomChartComponentModule } from './chart/custom.chart.component';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';
import { NavigationBarService } from './services/navigation-bar.service';

@NgModule({
  imports: [
    OntimizeWebModule,
    HighlightJsModule,
    OChartModule,
    CustomChartComponentModule
  ],
  declarations: [
    ExampleComponent,
    HighlightComponent
  ],
  exports: [
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent,
    OChartModule,
    CustomChartComponentModule
  ],
  providers: [
    HighlightJsService,
    NavigationBarService
  ]
})
export class SharedModule { }
