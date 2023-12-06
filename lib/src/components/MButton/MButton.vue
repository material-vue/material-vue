<template>
  <div
    class="inline-flex select-none justify-center items-center gap-2 py-2.5 relative overflow-hidden rounded-full"
    :class="[
      paddingX,
      { 'border border-[--md-sys-color-outline]': variant === 'outlined' },
    ]"
    :style="[$c(textColor), $c(backgroundColor)]"
  >
    <MStateLayer :background="$c(stateBackground)" :disabled="disabled" />
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
    <span
      v-else
      class="label-large lowercase first-letter:uppercase"
      v-text="text"
    />
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
import { useCustomThemeColor } from '../../composables/useCustomThemeColor.js'

const props = defineProps({
  ...useIconProps(),
  text: {
    type: String,
    required: true,
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
  color: {
    type: String,
    default: null,
  },
})

const $c = useCustomThemeColor(props.color)

const paddingX = computed(() => {
  if (props.variant === 'text' && props.icon == null)
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
