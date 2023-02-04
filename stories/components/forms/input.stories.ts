import { Component, Input as ngInput } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { InputComponent, InputModule } from 'ui-library';

export default {
  title: 'Components/Forms/Inputs',
  component: InputComponent,
  argTypes: {
    type: {
      control: 'text',
      type: { name: 'string', required: false },
      description: 'tipo do input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
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
    iconAfter: {
      control: 'text',
      description: 'icone pós input',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    uniqId: {
      control: 'text',
      description: 'id do input',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta;

@Component({
  selector: 'storybook-form',
  template: `
    <form [formGroup]="form">
      <ui-input
        formControlName="input"
        [label]="label"
        [type]="type"
        [placeholder]="placeholder"
        [readonly]="readonly"
        [iconAfter]="iconAfter"
        (clickedIcon)="onIconClick()"
      >
      </ui-input>
    </form>
    <br />
    <div>{{ form.get('input').value }}</div>
  `,
})
class InputStoryComponent {
  @ngInput() label: string;
  @ngInput() type = 'text';
  @ngInput() placeholder: string;
  @ngInput() readonly: boolean;
  @ngInput() iconAfter: string;
  form: FormGroup;
  message = 'You must enter a value';

  pattern = /^^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W|_]).{8,}$/;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.pattern(this.pattern),
        ]),
      ],
    });
  }

  onIconClick() {
    action('clickedIcon')();
  }
}

@Component({
  selector: 'storybook-form-disabled',
  template: `
    <form [formGroup]="form">
      <ui-input
        formControlName="input"
        [label]="label"
        [type]="type"
        [placeholder]="placeholder"
        [readonly]="readonly"
      ></ui-input>
    </form>
    <br />
    <div>{{ form.get('input').value }}</div>
  `,
})
class InputDisabledStoryComponent {
  @ngInput() label: string;
  @ngInput() type = 'text';
  @ngInput() placeholder: string;
  @ngInput() readonly: boolean;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      input: [{ value: '', disabled: true }],
    });
  }
}

const template1: Story<InputComponent> = (args: InputComponent) => ({
  moduleMetadata: {
    imports: [ReactiveFormsModule, InputModule],
    declarations: [InputStoryComponent],
  },
  props: args,
  template: `<storybook-form  [label]="label" [type]="type" [placeholder]="placeholder" [readonly]="readonly" [iconAfter]="iconAfter"></storybook-form>`,
});

export const inputIcon = template1.bind({});
inputIcon.args = {
  label: 'Busca',
  placeholder: 'Search partner',
  iconAfter: 'bi-search',
};

export const password = template1.bind({});
password.args = {
  label: 'Senha',
  placeholder: 'Digite a senha',
  type: 'password',
};

export const readonly = template1.bind({});
readonly.args = {
  label: 'ReadOnly',
  placeholder: 'Search your partner',
  type: 'text',
  readonly: true,
};

export const inputValidate = template1.bind({});
inputValidate.args = {
  label: 'E-mail',
  placeholder: 'Digite o email',
  type: 'email',
};

const template3: Story<InputComponent> = (args: InputComponent) => ({
  moduleMetadata: {
    imports: [FormsModule, ReactiveFormsModule, InputModule],
    declarations: [InputDisabledStoryComponent],
  },
  props: args,
  template: `<storybook-form-disabled [label]="label" [type]="type" [placeholder]="placeholder" [readonly]="readonly"></storybook-form-disabled>`,
});

export const disabled = template3.bind({});
disabled.args = {
  label: 'Disabled',
  placeholder: 'Search your partner',
  type: 'text',
};
