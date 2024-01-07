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
        :class="iconClasses"
        v-text="isSelected ? 'check_box' : 'check_box_outline_blank'"
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
import { computed, ref } from 'vue'
import { useLocalModel } from '../../composables/useLocalModel.js'
import MStateLayer from '../MStateLayer.vue'

const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
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

const localModal = ref()
useLocalModel(props.modelValue, localModal)

const isSelected = computed(() => {
  if (typeof localModal.value === 'boolean') return localModal.value === true
  return localModal.value.includes(props.value)
})

const iconClasses = computed(() => {
  return isSelected.value
    ? 'mv-text-[--md-sys-color-primary] filled-icon'
    : 'mv-text-[--md-sys-color-on-surface-variant]'
})

const rippleBackground = computed(() => {
  return isSelected.value
    ? 'var(--md-sys-color-on-surface)'
    : 'var(--md-sys-color-primary)'
})

const stateBackground = computed(() => {
  return isSelected.value
    ? 'background: var(--md-sys-color-primary)'
    : 'background: var(--md-sys-color-on-surface)'
})

const emits = defineEmits(['update:modelValue'])

function handleClick() {
  stateLayer.value.animStart({ center: true })

  if (typeof localModal.value === 'boolean') {
    localModal.value = !localModal.value
  } else {
    if (isSelected.value)
      localModal.value.splice(localModal.value.indexOf(props.value), 1)
    else localModal.value.push(props.value)
  }
  emits('update:modelValue', localModal.value)
}
</script>

<script>
export default {
  name: 'MCheckbox',
}
</script>
