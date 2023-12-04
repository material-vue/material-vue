<template>
  <div
    class="inline-flex items-center gap-2 py-2.5 relative overflow-hidden rounded-full"
    :class="[
      backgroundColor,
      textColor,
      paddingX,
      { 'border border-[--md-sys-color-outline]': variant === 'outlined' },
    ]"
  >
    <MStateLayer :background="stateBackground" />
    <span
      v-if="prependIcon"
      class="material-symbols-rounded text-[18px]"
      v-text="prependIcon"
    />
    <span
      v-if="icon"
      class="material-symbols-rounded text-[18px]"
      v-text="icon"
    />
    <span v-else class="label-large" v-text="text" />
    <span
      v-if="appendIcon"
      class="material-symbols-rounded text-[18px]"
      v-text="appendIcon"
    />
  </div>
</template>

<script setup>
import MStateLayer from '../MStateLayer.vue'
import { useIconProps } from '../../composables/useIconProps.js'
import { computed } from 'vue'

const props = defineProps({
  ...useIconProps(),
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'filled',
    validator(value) {
      return ['filled', 'outlined', 'tonal', 'text'].includes(value)
    },
  },
})

const paddingX = computed(() => {
  if (props.variant === 'text')
    return (
      'px-3 ' +
      (props.prependIcon ? 'pr-4 ' : '') +
      (props.appendIcon ? 'pl-4' : '')
    )
  return (
    'px-6 ' +
    (props.prependIcon ? 'pl-4 ' : '') +
    (props.appendIcon ? 'pr-4' : '')
  )
})

const textColor = computed(() => {
  switch (props.variant) {
    case 'filled':
      return 'text-[--md-sys-color-on-primary]'
    case 'outlined':
      return 'text-[--md-sys-color-primary]'
    case 'tonal':
      return 'text-[--md-sys-color-on-secondary-container]'
    case 'text':
      return 'text-[--md-sys-color-primary]'
  }
})
const backgroundColor = computed(() => {
  switch (props.variant) {
    case 'filled':
      return 'bg-[--md-sys-color-primary]'
    case 'outlined':
      return 'bg-transparent'
    case 'tonal':
      return 'bg-[--md-sys-color-secondary-container]'
    case 'text':
      return 'bg-transparent'
  }
})
//fixme: not equal to textColor?
const stateBackground = computed(() => {
  switch (props.variant) {
    case 'filled':
      return 'var(--md-sys-color-on-primary)'
    case 'outlined':
      return 'var(--md-sys-color-primary)'
    case 'tonal':
      return 'var(--md-sys-color-on-secondary-container)'
    case 'text':
      return 'var(--md-sys-color-primary)'
  }
})
</script>

<script>
export default {
  name: 'MButton',
}
</script>
