import { Pipe, PipeTransform } from '@angular/core';
import { dictionary } from '../../../assets/i18n/en';

const PARAMS = /{{ value }}/gi;

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(key: string, value?: string): string {
    const message = this.findKey(dictionary, key);
    return message ? this.addParameter(message, value) : key;
  }

  private addParameter(key: string, value: string = ''): string {
    return key.replace(PARAMS, value);
  }

  private findKey(object: object, keyToTranslate: string): string {
    let key;
    Object.keys(object).map((objKey) => {
      if (objKey === keyToTranslate) {
        key = object[objKey];
      }

      if (object[objKey] && typeof object[objKey] === 'object') {
        key = this.findKey(object[objKey], keyToTranslate);
      }
    });

    return key;
  }
}
