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
    this.translate.onLanguageChanged.subscribe((event: Event) => {
      TranslateChartService.initialized = false;
      this.loadTranslations();
    });
  }

  loadTranslations() {
    if (!TranslateChartService.initialized) {
      const lang = this.translate.getCurrentLang();
      this.translate.getNgxTranslateService().setTranslation(lang, MAP[lang], true); // `true` => merge
      TranslateChartService.initialized = true;
    }
  }

}
