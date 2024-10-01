import type { Meta, StoryObj } from '@storybook/vue3';

import { Button } from './index.ts'

const meta: Meta = {
  title: 'Components/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    slot: {
      default: `Default slot content`,
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' }, // control type (select dropdown)
      options: ['outline', 'default', 'destructive',
        'secondary',
        'ghost',
        'link'], // control options
      description: 'Type of the input field',
    },
    size: {
      control: { type: 'select' }, // control type (select dropdown)
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon'], // control options
      description: 'Type of the input field',
    },
  },
}

export default meta;

const buttonTemplate = `
  <Button v-bind="args">
    {{ args.label }}
  </Button>
`;

export const myButton = (args: any) => {
  return {
    components: { Button },
    setup() {
      return {
        args,
      };
    },
    template: buttonTemplate,
  }
};

myButton.args = {
  label: 'Meu botão',
}