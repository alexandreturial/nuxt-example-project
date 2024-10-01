import type { Meta } from '@storybook/vue3';
import Radio from './Radio.vue';
import {
  FormField,
} from '@/shared/components/ui/form'
import { action } from '@storybook/addon-actions'; // Importar a função action
import { ref } from 'vue'; // Importar ref para estado reativo

export default {
  title: 'Components/form/Radio',
  component: Radio,
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
  <Radio :type="inputType" :placeHolder="args.placeHolder" :label="args.label" v-bind="componentField">
    <template #before>
      <LockClosedIcon class="size-6 text-blue-500" />
    </template>
    <template #after>
      <Button variant="ghost" size="icon" @click="onEyeClick">
        <EyeIcon class="size-6 text-blue-500" />
      </Button>
    </template>
  </Radio>
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
    components: { Radio, FormField },
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


