import { Injector, NgModule } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import css from 'highlight.js/lib/languages/css';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { APP_CONFIG, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { MainModule } from './main/main.module';
import { CustomOntimizeService } from './shared/services/custom-ontimize.service';
import { NavigationBarService } from './shared/services/navigation-bar.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

export function getCustomOntimizeServiceProvider(injector: Injector) {
  return new CustomOntimizeService(injector);
}

// Defining custom providers (if needed)...
export const customProviders = [
  NavigationBarService,
  {
    provide: CustomOntimizeService,
    useFactory: getCustomOntimizeServiceProvider,
    deps: [Injector]
  }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    AppRoutingModule,
    OntimizeWebModule.forRoot(CONFIG),
    FlexLayoutModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }

