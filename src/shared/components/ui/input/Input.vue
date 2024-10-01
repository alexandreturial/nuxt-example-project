<script setup lang="ts">
import { useSlots,useAttrs, type HTMLAttributes } from 'vue'

import { useVModel } from '@vueuse/core'
import { cn } from '@/shared/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const slot = useSlots();

// Capturando os atributos
const attrs = useAttrs();

const paddingBySlot = () => { 
  if (!!slot.before && !!slot.after) { 
    return 'px-10'
  }

  if (!!slot.before) { 
    return 'pl-10'
  }

  if (!!slot.after) { 
    return 'pr-10'
  }
}
</script>

<template>
  <div class="relative">
    <input v-bind="attrs" v-model="modelValue"
      :class="cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
        paddingBySlot(),
      )" />
    <div class="absolute flex items-center justify-center h-7 w-7 top-0 left-0 translate-x-2 translate-y-1">
      <slot name="before"></slot>
    </div>
    <div class="absolute flex items-center justify-center h-7 w-7 top-0 right-0 -translate-x-2 translate-y-1">
      <slot name="after"></slot>
    </div>
  </div>
</template>
