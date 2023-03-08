import { Injector, NgModule } from '@angular/core';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { MainModule } from './main/main.module';
import { CustomOntimizeService } from './shared/services/custom-ontimize.service';
import { NavigationBarService } from './shared/services/navigation-bar.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

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
    ONTIMIZE_MODULES,
    MainModule,
    AppRoutingModule,
    OntimizeWebModule.forRoot(CONFIG),
  ],
  declarations: [
    AppComponent,
    HighlightModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ONTIMIZE_PROVIDERS,
    ...customProviders,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        languages: getHighlightLanguages()
      }
    },
  ]
})
export class AppModule { }

