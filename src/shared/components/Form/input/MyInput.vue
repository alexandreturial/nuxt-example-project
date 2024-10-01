<script setup>
import { useSlots } from 'vue'

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

const props = defineProps({
  label: {
    type: String,
    default:""
  },
  type: {
    type: String,
    default:"text"
  },
  placeHolder: {
    type: String,
    default:"shadcn"
  },
})
const slots = useSlots();


</script>

<template>
  <FormItem>
    <FormLabel>{{ label }}</FormLabel>
    <FormControl>
      <Input :type="type" :placeholder="placeHolder" v-bind="componentField" >
        <template v-for="slotName in Object.keys(slots)"  v-slot:[slotName]>
          <slot :name="slotName"/>
        </template>
      </Input>
    </FormControl>
    <FormMessage />
  </FormItem>
</template>
