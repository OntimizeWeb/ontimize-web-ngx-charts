import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';

import { CustomChartComponentModule } from './chart/custom.chart.component';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';
import { NavigationBarService } from './services/navigation-bar.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { SwitchModeThemeComponent } from './switch-mode-theme/switch-mode-theme.component';

@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule,
    CustomChartComponentModule,
    ClipboardModule
  ],
  declarations: [
    ExampleComponent,
    HighlightComponent,
    SwitchModeThemeComponent
  ],
  exports: [
    OntimizeWebModule,
    ExampleComponent,
    HighlightComponent,
    OChartModule,
    CustomChartComponentModule,
    SwitchModeThemeComponent
  ],
  providers: [
    NavigationBarService
  ]
})
export class SharedModule { }
