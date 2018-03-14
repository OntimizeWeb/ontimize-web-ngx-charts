import { NgModule } from '@angular/core';

import { NavigationBarService } from './services/navigation-bar.service';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { CustomChartComponent, CustomChartComponentModule } from './chart/custom.chart.component';

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
