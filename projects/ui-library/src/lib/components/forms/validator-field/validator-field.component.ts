import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../utils/control-value-accessor-connector.ts';

@Component({
  selector: 'ui-validator-field',
  templateUrl: './validator-field.component.html',
  styleUrls: ['./validator-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidatorFieldComponent),
      multi: true,
    },
  ],
})
export class ValidatorFieldComponent extends ControlValueAccessorConnector {
  @Input() patternError: string;

  constructor(injector: Injector) {
    super(injector);
  }

  get errorKey() {
    return (
      this.control && this.control.errors && Object.keys(this.control.errors)[0]
    );
  }

  hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }
}
