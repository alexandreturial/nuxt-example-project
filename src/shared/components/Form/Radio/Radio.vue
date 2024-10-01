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
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  placeHolder: {
    type: String,
    default: "shadcn"
  },
})
const slots = useSlots();


</script>

<template>
  <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
    <FormItem class="flex items-center space-y-0 gap-x-3">
      <FormControl>
        <RadioGroupItem value="all" />
      </FormControl>
      <FormLabel class="font-normal">
        All new messages
      </FormLabel>
    </FormItem>
    <FormItem class="flex items-center space-y-0 gap-x-3">
      <FormControl>
        <RadioGroupItem value="mentions" />
      </FormControl>
      <FormLabel class="font-normal">
        Direct messages and mentions
      </FormLabel>
    </FormItem>
    <FormItem class="flex items-center space-y-0 gap-x-3">
      <FormControl>
        <RadioGroupItem value="none" />
      </FormControl>
      <FormLabel class="font-normal">
        Nothing
      </FormLabel>
    </FormItem>
  </RadioGroup>
</template>
