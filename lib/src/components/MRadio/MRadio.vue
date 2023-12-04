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
import { computed, ref, watch } from 'vue'
import MStateLayer from '../MStateLayer.vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:checked'])

const actualState = ref(props.checked)

watch(props.checked, () => {
  actualState.value = props.checked
})

const stateBackground = computed(() => {
  return actualState.value
    ? 'var(--md-sys-color-primary)'
    : 'var(--md-sys-color-on-surface)'
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
  actualState.value = true
}
</script>

<script>
export default {
  name: 'MRadio',
}
</script>
