import type { Meta, StoryObj } from '@storybook/vue3';

import TesteForm from '@/shared/components/FormByTypeOs/TesteForm.vue'

const meta: Meta<typeof TesteForm> = {
  title: 'Components/TesteForm',
  component: TesteForm,
  parameters: {
    slot: {
      default: `Default slot content`,
    }
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    class: 'shadow-lg',
  },
}