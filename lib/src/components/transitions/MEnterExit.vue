<template>
  <div
    ref="grow"
    class="mv-max-h-0 mv-overflow-hidden"
    :class="`${show ? enterClass : exitClass}`"
    style="transition-property: max-height, transform, opacity"
    :style="{
      transitionDuration: `${transitionDuration}ms`,
      transitionTimingFunction: EASING.STANDARD_DECELERATE,
    }"
  >
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { EASING } from '../../utils/motion.js'

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  enterClass: {
    type: String,
    default: '',
  },
  exitClass: {
    type: String,
    default: '',
  },
  // TODO: vertical or horizontal
})
const ENTER_DURATION = 250
const EXIT_DURATION = 200

const transitionDuration = ref(ENTER_DURATION)

const grow = ref(null)

onMounted(() => {
  watch(
    () => props.show,
    () => {
      if (props.show === false) {
        transitionDuration.value = EXIT_DURATION
        grow.value.style.maxHeight = null
      } else {
        transitionDuration.value = ENTER_DURATION
        grow.value.style.maxHeight = grow.value.scrollHeight + 'px'
      }
    },
    { immediate: true }
  )
})
</script>
