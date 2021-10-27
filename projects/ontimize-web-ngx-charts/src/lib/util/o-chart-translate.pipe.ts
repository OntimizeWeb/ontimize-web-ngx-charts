import { Injector, Pipe, PipeTransform } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import * as CORE_TRANSLATIONS from '../i18n/i18n';

@Pipe({
  name: 'oChartTranslate',
  pure: false
})
export class OChartTranslatePipe implements PipeTransform {

  protected translateService: OTranslateService;

  constructor(protected injector: Injector) {
    this.translateService = this.injector.get(OTranslateService);
  }

  transform(text: string): string {
    let textTranslated = undefined;
    let bundle = CORE_TRANSLATIONS.MAP[this.translateService.getCurrentLang()];
    if (bundle && bundle[text]) {
      textTranslated = bundle[text];
    } else {
      textTranslated = this.translateService.get(text);
    }
    return textTranslated;
  }

}

// @NgModule({
//   declarations: [OChartTranslatePipe],
//   imports: [],
//   exports: [OChartTranslatePipe]
// })
// export class OChartTranslateModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: OChartTranslateModule,
//       providers: []
//     };
//   }
// }
