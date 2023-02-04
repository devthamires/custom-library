import { Directive, Injector, Input, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
} from '@angular/forms';

@Directive()
export class ControlValueAccessorConnector implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;
  @Input() formControl!: FormControl;
  @Input() formControlName!: string;

  constructor(private injector: Injector) {}

  get control(): FormControl {
    return (
      this.formControl ||
      (this.controlContainer.control.get(this.formControlName) as FormControl)
    );
  }

  get hasErrors(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer as typeof ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective?.valueAccessor.setDisabledState(isDisabled);
  }
}
