import { OTranslateService } from 'ontimize-web-ngx';

import { MAP } from '../i18n/i18n';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateChartService {
  private static initialized = false;
  constructor(
    public translate: OTranslateService
  ) {
    if (!TranslateChartService.initialized) {
      this.loadTranslations();
      TranslateChartService.initialized = true;
    }
   }

  loadTranslations() {
    console.log('loadTranslations ');
    Object.keys(MAP).forEach(lang => {
      this.translate.getNgxTranslateService().setTranslation(lang, MAP[this.translate.getCurrentLang()], true); // `true` => merge
    });

  }

}
