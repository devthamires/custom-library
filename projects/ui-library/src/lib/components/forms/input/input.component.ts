import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '../utils/control-value-accessor-connector.ts';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent
  extends ControlValueAccessorConnector
  implements OnInit
{
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() readonly = false;
  @Input() icon = '';

  @Output() clickedIcon: EventEmitter<void> = new EventEmitter();
  isRequired = false;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.handleValidate();
  }

  onIconClick() {
    this.clickedIcon.emit();
  }

  private handleValidate(): void {
    try {
      const validators = this.control.validator({} as AbstractControl);
      this.isRequired = validators['required'];
    } catch {}
  }
}
