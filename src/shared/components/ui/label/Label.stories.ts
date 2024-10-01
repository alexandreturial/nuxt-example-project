import type { Meta, StoryObj } from '@storybook/vue3';

import { Label } from './index.ts'


// import {action} from '@storybook/addon-interactions'

const meta: Meta<typeof Label> = {
  title: 'Components/ui/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    slot: {
      default: `Default slot content`,
    }
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

    default(_) {
      return 'teste'
    },
  },
}