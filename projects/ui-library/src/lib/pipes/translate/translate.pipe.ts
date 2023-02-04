import { Pipe, PipeTransform } from '@angular/core';
import { dictionary } from '../../../assets/i18n/en';

const PARAMS = /{{ value }}/gi;

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(key: string, value?: string): string {
    return dictionary[key] ? this.addParameter(dictionary[key], value) : key;
  }

  private addParameter(key: string, value: string = ''): string {
    return key.replace(PARAMS, value);
  }
}
