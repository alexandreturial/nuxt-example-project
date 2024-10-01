<script setup>
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import  {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import { useSlots } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default:""
  },
  placeHolder: {
    type: String,
    default: "shadcn"
  },
})
const componentField = defineModel('componentField', {})

const slots = useSlots();
</script>

<template>
  <FormItem>
    <FormLabel>{{ label }}</FormLabel>
    <Select :modelValue="componentField" v-bind="componentField">
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a verified email to display" />
          <template v-for="slotName in Object.keys(slots)"  v-slot:[slotName]>
            <slot :name="slotName"/>
          </template>
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="m@example.com">
            m@example.com
          </SelectItem>
          <SelectItem value="m@google.com">
            m@google.com
          </SelectItem>
          <SelectItem value="m@support.com">
            m@support.com
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <FormDescription>
     TODO: DESCRIPTION
    </FormDescription>
    <FormMessage />
  </FormItem>
</template>
