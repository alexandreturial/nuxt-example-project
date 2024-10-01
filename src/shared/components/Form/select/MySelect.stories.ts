import type { Meta } from '@storybook/vue3';
import { Button } from "@/shared/components/ui/button"
import Select from './MySelect.vue';
import {
  FormField,
} from '@/shared/components/ui/form'
import { LockClosedIcon } from '@heroicons/vue/24/solid'

export default {
  title: 'Components/form/Select',
  component: Select,
  argTypes: {
    type: {
      control: { type: 'select' }, // control type (select dropdown)
      options: ['text', 'number', 'password'], // control options
      description: 'Type of the input field',
    },
    placeHolder: {
      control: { type: 'text' }, // control type (text input)
      description: 'Placeholder text for the input',
    },
  },
} as Meta;


const selectTemplate = `
<FormField v-slot="{ componentField }" name="username">
  <Select v-bind="args" v-bind="componentField">
    <template #before>
      <LockClosedIcon class="size-6 text-blue-500" />
    </template>
  </Select>
</FormField>
`;

export const mySelect = (args: any) => {
  return {
    components: { Select, FormField, Button, LockClosedIcon },
    setup() {
      return {
        args,
      };
    },
    template: selectTemplate,
  }
};

mySelect.args = {
  type: 'text',
  placeHolder: 'placeholder',
}

