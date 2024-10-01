import type { Meta } from '@storybook/vue3';
import { Button } from "@/shared/components/ui/button"
import Input from './MyInput.vue';
import {
  FormField,
} from '@/shared/components/ui/form'
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from '@heroicons/vue/24/solid'
import { action } from '@storybook/addon-actions'; // Importar a função action
import { ref } from 'vue'; // Importar ref para estado reativo

export default {
  title: 'Components/form/Input',
  component: Input,
  argTypes: {
    label: {
      control: { type: 'text' }, // control type (text input)
      description: 'label text for the input',
    },
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

const passwordInputTemplate = `
<FormField v-slot="{ componentField }" name="username">
  <Input :type="inputType" :placeHolder="args.placeHolder" :label="args.label" v-bind="componentField">
    <template #before>
      <LockClosedIcon class="size-6 text-blue-500" />
    </template>
    <template #after>
      <Button variant="ghost" size="icon" @click="onEyeClick">
        <EyeIcon class="size-6 text-blue-500" />
      </Button>
    </template>
  </Input>
</FormField>
`;

// default task state
export const myPasswordInput = (args: any) => {
  const inputType = ref(args.type); // Estado reativo para o tipo do input

  const onEyeClick = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'; // Alternar entre 'text' e 'password'
    action('eye-button-clicked')(); // Registra a ação no Storybook
  };
  return {
    components: { Input, FormField, Button, EyeIcon, EyeSlashIcon, LockClosedIcon },
    setup() {
      return {
        args,
        inputType,
        onEyeClick, // Função de ação para o clique do botão
      };
    },
    template: passwordInputTemplate,
  }
};

myPasswordInput.args = {
  label: 'Meu Input Senha',
  placeHolder: 'password'
}

const inputTemplate = `
<FormField v-slot="{ componentField }" name="username">
  <Input v-bind="args" v-bind="componentField">
    <template #before>
      <LockClosedIcon class="size-6 text-blue-500" />
    </template>
  </Input>
</FormField>
`;

export const myInput = (args: any) => {
  return {
    components: { Input, FormField, Button, LockClosedIcon },
    setup() {
      return {
        args,
      };
    },
    template: inputTemplate,
  }
};

myInput.args = {
  label: 'Meu Input',
  type: 'text',
  placeHolder: 'placeholder'

}

