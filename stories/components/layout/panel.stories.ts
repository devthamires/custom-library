import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, Story } from '@storybook/angular';
import { PanelComponent, PanelModule } from 'ui-library';

export default {
  title: 'Layouts/Panel',
  component: PanelComponent,
  argTypes: {
    side: {
      type: { name: 'string', required: false },
      description: 'side that will display',
      table: {
        type: { summary: 'TSide' },
        defaultValue: { summary: 'left' },
      },
    },
    fullscreen: {
      type: { name: 'boolean', required: false },
      description: 'option for width 100%',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hasBackground: {
      type: { name: 'boolean', required: false },
      description: 'background color when open',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta;

const storybook: Story<PanelComponent> = (args: PanelComponent) => ({
  moduleMetadata: {
    imports: [PanelModule, BrowserAnimationsModule],
  },
  props: args,
  template: `
  <div>
    <ui-panel #panel [side]="side" [fullscreen]="fullscreen" [hasBackground]="hasBackground" [className]="className">
      <div style="padding:20px">
        <h1>panel</h1>
        <button (click)="panel.close()"> close</button>
      </div>
    </ui-panel>
    <button (click)="panel.open()">open</button>
    <button (click)="panel.toggle()">toggle</button>
  </div>

`,
});

export const panel = storybook.bind({});
panel.args = {
  side: 'left',
  fullscreen: false,
  hasBackground: false,
  className: 'white',
};
