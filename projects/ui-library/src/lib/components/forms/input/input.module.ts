import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFieldModule } from '../validator-field/validator-field.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, ValidatorFieldModule],
  exports: [InputComponent],
})
export class InputModule {}
