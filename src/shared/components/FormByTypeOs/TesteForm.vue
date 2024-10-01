<script setup>
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import MyInput from "@/shared/components/Form/input/MyInput.vue"
import MySelect from"@/shared/components/Form/select/MySelect.vue"


import { toast, Toaster, ToastAction } from '@/shared/components/ui/toast'
import { EnvelopeIcon } from '@heroicons/vue/24/solid'


const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
  mobile: z.boolean().default(false).optional(),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    mobile: true,
  }
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'Uh oh! Something went wrong.',
    variant: 'defaultTopRight',
    class: "fixed w-50 top-0 right-0 -translate-x-2 translate-y-2",
    description: h(
      'pre', { class: 'mt-2 w-[340px] rounded-md bg-red-950 p-4 overflow-auto' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})

</script>

<template>
  <div class="flex items-cneter justify-center ">
    <form class="border-orange-100 border-2 rounded-md w-1/3 space-y-6 p-6" @submit.prevent="(e) => onSubmit(e)">
      <FormField v-slot="{ componentField }" name="username">  
        <MyInput label="Username" v-bind="componentField" type="text">
          <template #before>
            <EnvelopeIcon class="size-6 text-blue-500" />
          </template>
        </MyInput>
      </FormField>
     
      <FormField v-slot="{ componentField }" name="email">
        <MySelect :componentField="componentField"  label="Email" v-bind="componentField"/>
      </FormField>

      <FormField v-slot="{ componentField }" type="radio" name="type">
        <FormItem class="space-y-3">
          <FormLabel>Notify me about...</FormLabel>

          <FormControl>
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
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ value, handleChange }" type="checkbox" name="mobile">
        <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox :checked="value" @update:checked="handleChange" />
          </FormControl>
          <div class="space-y-1 leading-none">
            <FormLabel>Use different settings for my mobile devices</FormLabel>
            <FormDescription>
              You can manage your mobile notifications in the
              <a href="/examples/forms">mobile settings</a> page.
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      </FormField>
      <Button type="submit">
        Submit
      </Button>
    </form>
  </div>
</template>

<style></style>