import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatorFieldModule } from '../validator-field/validator-field.module';

@NgModule({
  declarations: [TextAreaComponent],
  imports: [CommonModule, ReactiveFormsModule, ValidatorFieldModule],
  exports: [TextAreaComponent],
})
export class TextAreaModule {}
