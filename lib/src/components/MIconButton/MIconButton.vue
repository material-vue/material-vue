<template>
  <component
    :is="element"
    :href="href"
    class="inline-flex !no-underline select-none justify-center items-center gap-2 h-10 w-10 relative overflow-hidden rounded-full"
    :class="[
      {
        'border-solid border !border-[--md-sys-color-outline]':
          variant === 'outlined' && (!toggleable || (toggleable && !active)),
        'pointer-events-none': disabled,
      },
    ]"
    :style="[iconColor, backgroundColor]"
    @click="active = !active"
  >
    <MStateLayer :background="stateBackground" :disabled="disabled" />
    <span
      :class="{ 'filled-icon': toggleable && active }"
      class="material-symbols-rounded text-[24px]"
      v-text="icon"
    />
  </component>
</template>

<script setup>
import MStateLayer from '../MStateLayer.vue'
import { computed, h, ref } from 'vue'
import { useLocalModel } from '../../composables/useLocalModel.js'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  toggleable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
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
    default: 'standard',
    validator(value) {
      return ['filled', 'outlined', 'tonal', 'standard'].includes(value)
    },
  },
})

const active = ref()
useLocalModel(props.modelValue, active)

const element = computed(() => {
  return h(props.href ? 'a' : 'button', {})
})

const iconColor = computed(() => {
  if (props.disabled) {
    return 'color: var(--md-sys-color-on-surface); opacity: 0.38'
  }
  switch (props.variant) {
    case 'filled':
      if (props.toggleable && !active.value)
        return 'color: var(--md-sys-color-primary)'
      return 'color: var(--md-sys-color-on-primary)'
    case 'outlined':
      if (props.toggleable && active.value)
        return 'color: var(--md-sys-color-inverse-on-surface)'
      return 'color: var(--md-sys-color-on-surface-variant)'
    case 'tonal':
      if (props.toggleable && active.value)
        return 'color: var(--md-sys-color-on-secondary-container))'
      return 'color: var(--md-sys-color-on-secondary-container)'
    case 'standard':
      if (props.toggleable && active.value)
        return 'color: var(--md-sys-color-primary)'
      return 'color: var(--md-sys-color-on-surface-variant)'
  }
})
const backgroundColor = computed(() => {
  if (props.disabled) {
    return 'background-color: transparent'
  }
  switch (props.variant) {
    case 'filled':
      if (props.toggleable && !active.value)
        return 'background-color: var(--md-sys-color-surface-container-highest)'
      return 'background-color: var(--md-sys-color-primary)'
    case 'outlined':
      if (props.toggleable && active.value)
        return 'background-color: var(--md-sys-color-inverse-surface)'
      return 'background-color: transparent'
    case 'tonal':
      if (props.toggleable && !active.value)
        return 'background-color: var(--md-sys-color-surface-container-highest)'
      return 'background-color: var(--md-sys-color-secondary-container)'
    case 'standard':
      return 'background-color: transparent'
  }
})

const stateBackground = computed(() => {
  if (props.disabled) {
    if (['filled', 'tonal'].includes(props.variant)) {
      return 'background-color: var(--md-sys-color-on-surface); opacity: 0.12 !important'
    } else {
      return 'background-color: transparent'
    }
  }
  switch (props.variant) {
    case 'filled':
      if (props.toggleable && !active.value)
        return 'background: var(--md-sys-color-primary)'
      return 'background: var(--md-sys-color-on-primary)'
    case 'outlined':
      if (props.toggleable && active.value)
        return 'background-color: var(--md-sys-color-inverse-on-surface)'
      return 'background: var(--md-sys-color-on-surface-variant)'
    case 'tonal':
      if (props.toggleable && active.value)
        return 'background: var(--md-sys-color-on-surface-variant)'
      return 'background: var(--md-sys-color-on-secondary-container)'
    case 'standard':
      if (props.toggleable && active.value)
        return 'background: var(--md-sys-color-primary)'
      return 'background: var(--md-sys-color-on-surface-variant)'
  }
})
</script>

<script>
export default {
  name: 'MIconButton',
}
</script>
