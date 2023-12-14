<template>
  <div class="w-12 h-12 relative">
    <div class="absolute inset-1 rounded-full overflow-hidden" @click="click">
      <MStateLayer
        :background="stateBackground"
        :ripple-background="rippleBackground"
      />
    </div>
    <span
      class="material-symbols-rounded m-3 z-10 pointer-events-none absolute w-6 h-6"
      :class="contentColor"
      v-text="actualState ? 'radio_button_checked' : 'radio_button_unchecked'"
    />
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue'
import MStateLayer from '../MStateLayer.vue'
import { radioGroupModelValueSymbol } from '../../utils/keys.js'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    required: true,
  },
})

//TODO: symbol
let group = inject(radioGroupModelValueSymbol, undefined)

const emits = defineEmits(['update:modelValue'])

const actualState = ref(group ? group === props.value : props.modelValue)

if (group === undefined) {
  watch(props.modelValue, () => {
    actualState.value = props.modelValue
  })
} else {
  watch(group, () => {
    actualState.value = group.value === props.value
  })
}

const stateBackground = computed(() => {
  return actualState.value
    ? 'background: var(--md-sys-color-primary)'
    : 'background: var(--md-sys-color-on-surface)'
})

const rippleBackground = computed(() => {
  return actualState.value
    ? 'var(--md-sys-color-on-surface)'
    : 'var(--md-sys-color-primary)'
})

const contentColor = computed(() => {
  return actualState.value
    ? 'text-[--md-sys-color-primary]'
    : 'text-[--md-sys-color-on-surface]'
})

function click() {
  if (group === undefined) {
    actualState.value = !actualState.value
    emits('update:modelValue', actualState.value)
  } else {
    actualState.value = true
    group.value = props.value
  }
}
</script>

<script>
export default {
  name: 'MRadio',
}
</script>
