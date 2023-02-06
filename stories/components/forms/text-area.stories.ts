import { Component, Input as ngInput } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Meta, Story } from '@storybook/angular';
import { TextAreaModule, TextAreaComponent } from 'ui-library';

export default {
  title: 'Components/Forms/TextArea',
  component: TextAreaComponent,
  argTypes: {
    label: {
      control: 'text',
      description: 'label do input',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'placeholder do input',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    readonly: {
      control: 'boolean',
      type: { name: 'boolean', required: false },
      description: 'estado readonly do input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    cols: {
      control: 'text',
      description: 'numbers of columns',
      type: { name: 'string', required: false },
    },
    rows: {
      control: 'text',
      description: 'numbers of rows',
      type: { name: 'string', required: false },
    },
  },
} as Meta;

@Component({
  selector: 'storybook-form',
  template: `
    <form [formGroup]="form">
      <ui-text-area
        formControlName="textarea"
        [label]="label"
        [placeholder]="placeholder"
        [readonly]="readonly"
        [cols]="cols"
        [rows]="rows"
      >
      </ui-text-area>
    </form>
  `,
})
class InputStoryComponent {
  @ngInput() label: string;
  @ngInput() placeholder: string;
  @ngInput() readonly: boolean;
  @ngInput() rows: number;
  @ngInput() cols: number;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textarea: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(7)]),
      ],
    });
  }
}

const template1: Story<TextAreaComponent> = (args: TextAreaComponent) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule, TextAreaModule],
    declarations: [InputStoryComponent],
  },
  props: args,
  template: `
          <storybook-form
            [label]="label"
            [type]="type"
            [placeholder]="placeholder"
            [readonly]="readonly"
            [cols]="cols"
            [rows]="rows">
          </storybook-form>`,
});

export const textarea = template1.bind({});
textarea.args = {
  label: 'Text Area',
  placeholder: 'Type here ...',
};

export const readonly = template1.bind({});
readonly.args = {
  label: 'Text Area',
  readonly: true,
};
