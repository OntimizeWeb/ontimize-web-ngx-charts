import { NgModule, Injector } from '@angular/core';

import {
  APP_CONFIG,
  ONTIMIZE_MODULES,
  ONTIMIZE_PROVIDERS
} from 'ontimize-web-ngx';

import { CONFIG } from './app.config';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';

import { NavigationBarService } from './shared/services/navigation-bar.service';
import { CustomOntimizeService } from './shared/services/custom-ontimize.service';

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
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    ...ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }

