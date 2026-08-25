import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';

import { CustomChartComponentModule } from './chart/custom.chart.component';
import { ExampleComponent } from './example/example.component';
import { HighlightComponent } from './highlight/highlight.component';
import { NavigationBarService } from './services/navigation-bar.service';
import { SwitchModeThemeComponent } from './switch-mode-theme/switch-mode-theme.component';

@NgModule({
  imports: [
    CommonModule,
    OntimizeWebModule,
    OChartModule,
    CustomChartComponentModule,
    ClipboardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
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
    SwitchModeThemeComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    NavigationBarService
  ]
})
export class SharedModule { }
