<template>
  <div
    ref="stateEl"
    class="absolute top-0 left-0 right-0 bottom-0 cursor-pointer opacity-0 hover:opacity-[8%] focus:opacity-[12%] active:opacity-[12%]"
    :class="{ 'pointer-events-none': disabled }"
    :style="`background: ${background}`"
  />
  <span
    ref="rippleEl"
    class="ripple opacity-0 absolute pointer-events-none"
    :style="`
      background: radial-gradient(
        closest-side,
        ${
          rippleBackground ? rippleBackground : background
        } max(calc(100% - 70px), 65%),
        transparent
      );
    `"
  />
</template>

<script setup>
import '../styles/style.css'
import { EASING } from './utils/motion.js'
import { onMounted, onUnmounted, ref } from 'vue'

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  background: {
    type: String,
    required: true,
  },
  rippleBackground: {
    type: String,
    default: null,
  },
})

const stateEl = ref(null)
const rippleEl = ref(null)
const rectWidth = ref(null)
const showRipple = ref(false)
const ripplePos = ref({ x: 0, y: 0 })

const PRESS_GROW_MS = 500
const MINIMUM_PRESS_MS = 300
const INITIAL_ORIGIN_SCALE = 0.2
const PADDING = 10
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35
const ANIMATION_FILL = 'forwards'

function getEndPoint() {
  const { height, width } = stateEl.value.getBoundingClientRect()
  // end in the center
  return {
    x: (width - initialSize) / 2,
    y: (height - initialSize) / 2,
  }
}

let animation = null

function handleTouchStart(event) {
  showRipple.value = true
  ripplePos.value.x = event.offsetX
  ripplePos.value.y = event.offsetY

  const endPoint = getEndPoint()
  const startPoint = { x: event.offsetX, y: event.offsetY }

  animation = rippleEl.value.animate(
    {
      opacity: [0.2],
      height: [rectWidth.value, rectWidth.value],
      width: [rectWidth.value, rectWidth.value],
      top: [`${startPoint.y}px`, `${endPoint.y}px`],
      left: [`${startPoint.x}px`, `${endPoint.x}px`],
      transform: [
        `translate(-50%, -50%) scale(1)`,
        `translate(-50%, -50%) scale(${rippleScale})`,
      ],
    },
    {
      // timing options
      duration: PRESS_GROW_MS,
      fill: ANIMATION_FILL,
      easing: EASING.STANDARD,
    }
  )
}
async function handleTouchEnd() {
  let pressAnimationPlayState = Infinity
  if (typeof animation?.currentTime === 'number') {
    pressAnimationPlayState = animation.currentTime
  } else if (animation?.currentTime) {
    pressAnimationPlayState = animation.currentTime.to('ms').value
  }

  if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
    animEnd()
    return
  }

  await new Promise((resolve) => {
    setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState)
  })

  animEnd()
}

function animEnd() {
  showRipple.value = false

  rippleEl.value.animate(
    {
      opacity: [0.2, 0],
    },
    {
      // timing options
      duration: 270,
      fill: ANIMATION_FILL,
      easing: EASING.STANDARD,
    }
  )
}

let rippleScale = null
let initialSize = null

onMounted(() => {
  stateEl.value.addEventListener('mousedown', handleTouchStart)
  stateEl.value.addEventListener('mouseup', handleTouchEnd)

  const { height, width } = stateEl.value.getBoundingClientRect()
  const maxDim = Math.max(height, width)
  const softEdgeSize = Math.max(
    SOFT_EDGE_CONTAINER_RATIO * maxDim,
    SOFT_EDGE_MINIMUM_SIZE
  )

  initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)
  const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
  const maxRadius = hypotenuse + PADDING

  rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`
  rectWidth.value = `${initialSize}px`
})

onUnmounted(() => {
  if (stateEl.value) {
    stateEl.value.removeEventListener('mousedown', handleTouchStart)
    stateEl.value.removeEventListener('mouseup', handleTouchEnd)
  }
})
</script>

<script>
export default {
  name: 'MVStateLayer',
}
</script>
