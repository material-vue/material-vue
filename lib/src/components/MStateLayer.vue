<template>
  <div
    ref="stateEl"
    class="mv-absolute mv-transition-opacity mv-top-0 mv-left-0 mv-right-0 mv-bottom-0 mv-cursor-pointer mv-opacity-0 sm:hover:mv-opacity-[8%] focus:mv-opacity-[12%] active:mv-opacity-[12%]"
    :class="[classes, { 'mv-pointer-events-none': disabled }]"
    :style="`${background}`"
  />
  <span
    v-show="rippled"
    ref="rippleEl"
    class="ripple mv-opacity-0 mv-absolute mv-pointer-events-none"
    :style="`
      background: radial-gradient(
        closest-side,
        ${rippleBg} max(calc(100% - 70px), 65%),
        transparent
      );
    `"
  />
</template>

<script setup>
import '../styles/style.css'
import { EASING } from '../utils/motion.js'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
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
  rippled: {
    type: Boolean,
    default: true,
  },
  classes: {
    type: String,
    default: null,
  },
  padding: {
    type: Number,
    default: 10,
  },
})

const emits = defineEmits(['click'])

const stateEl = ref(null)
const rippleEl = ref(null)
const rectWidth = ref(null)
const showRipple = ref(false)
const ripplePos = ref({ x: 0, y: 0 })

const rippleBg = computed(() => {
  return props.rippleBackground
    ? props.rippleBackground
    : `${
        props.background.split(' ').find((w) => w.includes('--md-sys-color')) ??
        'transparent'
      }`
})

const PRESS_GROW_MS = 450
const MINIMUM_PRESS_MS = 225
const INITIAL_ORIGIN_SCALE = 0.2
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35
const ANIMATION_FILL = 'forwards'

function getEndPoint() {
  const { height, width } = stateEl.value.getBoundingClientRect()
  // end in the center
  return {
    x: width / 2,
    y: height / 2,
  }
}

let animation = null

function handleTouchStart(event) {
  animStart(event.offsetX, event.offsetY)
}

function animStart(x, y) {
  shouldEmit.value = true
  showRipple.value = true
  ripplePos.value.x = x
  ripplePos.value.y = y

  const endPoint = getEndPoint()
  const startPoint = { x, y }

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
  if (showRipple.value === false) return
  showRipple.value = false

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

const shouldEmit = ref(true)

function handleTouchLeave() {
  if (showRipple.value === false) return
  shouldEmit.value = false
  animEnd()
}

async function animEnd() {
  showRipple.value = false

  rippleEl.value.animate(
    {
      opacity: [0.2, 0],
    },
    {
      duration: 350,
      fill: ANIMATION_FILL,
      easing: EASING.STANDARD_ACCELERATE,
    }
  )

  if (!shouldEmit.value) return

  await new Promise((resolve) => {
    setTimeout(resolve, 30)
  })

  emits('click')
  shouldEmit.value = false
  animation = null
}

let rippleScale = null
let initialSize = null

onMounted(() => {
  stateEl.value.addEventListener('pointerdown', handleTouchStart)
  stateEl.value.addEventListener('pointerup', handleTouchEnd)
  stateEl.value.addEventListener('contextmenu', handleTouchEnd)
  stateEl.value.addEventListener('pointerleave', handleTouchLeave)

  const { height, width } = stateEl.value.getBoundingClientRect()
  const maxDim = Math.max(height, width)
  const softEdgeSize = Math.max(
    SOFT_EDGE_CONTAINER_RATIO * maxDim,
    SOFT_EDGE_MINIMUM_SIZE
  )

  initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE)
  const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
  const maxRadius = hypotenuse + props.padding

  rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`
  rectWidth.value = `${initialSize}px`
})

onUnmounted(() => {
  if (stateEl.value) {
    stateEl.value.removeEventListener('pointerdown', handleTouchStart)
    stateEl.value.removeEventListener('pointerup', handleTouchEnd)
    stateEl.value.removeEventListener('contextmenu', handleTouchEnd)
    stateEl.value.removeEventListener('pointerleave', handleTouchLeave)
  }
})

// auto end animation that start from exposed function
function eAnimStart(options) {
  if (animation !== null) return

  let x = options.x || 0
  let y = options.y || 0

  if (options.center) {
    x = stateEl.value.getBoundingClientRect().width / 2
    y = stateEl.value.getBoundingClientRect().height / 2
  }

  animStart(x, y)
  setTimeout(() => {
    if (showRipple.value !== false) animEnd()
  }, MINIMUM_PRESS_MS)
}

defineExpose({ animStart: eAnimStart })
</script>

<script>
export default {
  name: 'MStateLayer',
}
</script>
