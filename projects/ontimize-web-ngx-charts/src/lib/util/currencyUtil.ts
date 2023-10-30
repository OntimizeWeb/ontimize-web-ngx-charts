export class CurrencyUtil {
  static languageToCurrencyCode = {
    'es': 'EUR', // Spanish
    'en': 'USD', // English
    'pt': 'BRL', // Portuguese
    'fr': 'EUR', // French
    'de': 'EUR', // German
    'it': 'EUR', // Italian
    'ja': 'JPY', // Japanese
    'zh': 'CNY', // Chinese
    'ru': 'RUB', // Russian
    'ar': 'AED', // Arabic
  };


  static getCurrencyCode(language: string): string {
    const code = this.languageToCurrencyCode[language];
    if (code) {
      return code;
    } else {
      return 'USD';
    }
  }
}