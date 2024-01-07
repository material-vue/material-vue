<template>
  <div
    class="mv-flex mv-gap-0.5 mv-cursor-pointer mv-items-center"
    @click="handleClick"
  >
    <div class="mv-w-12 mv-h-12 mv-relative">
      <div class="mv-absolute mv-inset-1 mv-rounded-full mv-overflow-hidden">
        <MStateLayer
          ref="stateLayer"
          classes="mv-rounded-full"
          :background="stateBackground"
          :ripple-background="rippleBackground"
        />
      </div>
      <span
        class="material-symbols-rounded mv-m-3 mv-z-10 mv-pointer-events-none mv-absolute mv-w-6 mv-h-6"
        :class="contentColor"
        v-text="actualState ? 'radio_button_checked' : 'radio_button_unchecked'"
      />
    </div>
    <p
      v-if="text"
      class="body-large mv-lowercase first-letter:mv-uppercase mv-text-[--md-sys-color-on-surface]"
      v-text="text"
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
  text: {
    type: String,
    default: null,
  },
})

const stateLayer = ref(null)

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
    ? 'mv-text-[--md-sys-color-primary]'
    : 'mv-text-[--md-sys-color-on-surface]'
})

function handleClick(e) {
  stateLayer.value.animStart({ center: true })

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
