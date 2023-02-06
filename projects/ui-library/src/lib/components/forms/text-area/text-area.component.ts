import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../utils/control-value-accessor-connector.ts';

@Component({
  selector: 'ui-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent
  extends ControlValueAccessorConnector
  implements OnInit
{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() cols: number = 20;
  @Input() rows: number = 4;

  isRequired: boolean;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.handleValidate();
  }

  private handleValidate(): void {
    try {
      const validators = this.control.validator({} as AbstractControl);
      this.isRequired = validators['required'];
    } catch {}
  }
}
