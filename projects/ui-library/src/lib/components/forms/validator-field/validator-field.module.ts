import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '../../../pipes/translate/translate.module';
import { ValidatorFieldComponent } from './validator-field.component';

@NgModule({
  declarations: [ValidatorFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  exports: [ValidatorFieldComponent],
})
export class ValidatorFieldModule {}
