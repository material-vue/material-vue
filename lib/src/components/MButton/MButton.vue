<template>
  <component
    :is="element"
    :href="href"
    class="mv-inline-flex !mv-no-underline mv-select-none mv-justify-center mv-items-center mv-gap-2 mv-py-2.5 mv-relative mv-overflow-hidden mv-rounded-full"
    :class="[
      paddingX,
      {
        'mv-border-solid mv-border !mv-border-[--md-sys-color-outline]':
          variant === 'outlined',
        'mv-pointer-events-none': disabled,
      },
    ]"
    :style="[textColor, backgroundColor]"
  >
    <MStateLayer
      :background="stateBackground"
      :disabled="disabled"
      @click="$emit('click')"
    />
    <span
      v-if="prependIcon"
      class="material-symbols-rounded mv-text-[18px]"
      v-text="prependIcon"
    />
    <span
      class="label-large mv-lowercase first-letter:mv-uppercase"
      v-text="text"
    />
    <span
      v-if="appendIcon"
      class="material-symbols-rounded mv-text-[18px]"
      v-text="appendIcon"
    />
  </component>
</template>

<script setup>
import MStateLayer from '../MStateLayer.vue'
import { useIconProps } from '../../composables/useIconProps.js'
import { computed, h } from 'vue'

const props = defineProps({
  ...useIconProps(),
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'filled',
    validator(value) {
      return ['filled', 'outlined', 'tonal', 'text'].includes(value)
    },
  },
})

defineEmits(['click'])

const element = computed(() => {
  return h(props.href ? 'a' : 'button', {})
})

const paddingX = computed(() => {
  if (props.variant === 'text' && props.icon == null)
    return (
      'mv-px-3 ' +
      (props.prependIcon ? 'mv-pr-4 ' : '') +
      (props.appendIcon ? 'mv-pl-4' : '')
    )
  return (
    'mv-px-6 ' +
    (props.prependIcon ? 'mv-pl-4 ' : '') +
    (props.appendIcon ? 'mv-pr-4' : '')
  )
})

const textColor = computed(() => {
  if (props.disabled) {
    return 'color: var(--md-sys-color-on-surface); opacity: 0.38'
  }
  switch (props.variant) {
    case 'filled':
      return 'color: var(--md-sys-color-on-primary)'
    case 'outlined':
      return 'color: var(--md-sys-color-primary)'
    case 'tonal':
      return 'color: var(--md-sys-color-on-secondary-container)'
    case 'text':
      return 'color: var(--md-sys-color-primary)'
  }
})
const backgroundColor = computed(() => {
  if (props.disabled) {
    return 'background-color: transparent'
  }
  switch (props.variant) {
    case 'filled':
      return 'background-color: var(--md-sys-color-primary)'
    case 'outlined':
      return 'background-color: transparent'
    case 'tonal':
      return 'background-color: var(--md-sys-color-secondary-container)'
    case 'text':
      return 'background-color: transparent'
  }
})

const stateBackground = computed(() => {
  if (props.disabled) {
    if (['filled', 'tonal', 'elevated'].includes(props.variant)) {
      return 'background-color: var(--md-sys-color-on-surface); opacity: 0.12 !important'
    } else {
      return 'background-color: transparent'
    }
  }
  switch (props.variant) {
    case 'filled':
      return 'background: var(--md-sys-color-on-primary)'
    case 'outlined':
      return 'background: var(--md-sys-color-primary)'
    case 'tonal':
      return 'background: var(--md-sys-color-on-secondary-container)'
    case 'text':
      return 'background: var(--md-sys-color-primary)'
  }
})
</script>

<script>
export default {
  name: 'MButton',
}
</script>
