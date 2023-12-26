<template>
  <div class="example-wrapper" :class="{'dark': darkMode, 'light': !darkMode}" :style="{flexDirection: vertical ? 'column' : 'row'}">
    <div v-if="toggleable" class="icon" @click="() => {
      darkMode = !darkMode
      chosenMode = true
    }">
      <DarkModeIcon v-if="!darkMode"/>
      <LightModeIcon v-if="darkMode"/>
    </div>
    <slot/>
  </div>
  <p v-if="description" class="label-medium" style="color: var(--md-sys-color-on-surface-variant); margin-top: -8px" v-text="description"/>
</template>

<script setup>
import DarkModeIcon from "./DarkModeIcon.vue"
import LightModeIcon from "./LightModeIcon.vue"
import {ref, watch} from "vue"
import {useToggle, useDark} from '@vueuse/core'
import {useData} from "vitepress"

const darkMode = ref(false)
const chosenMode = ref(false)

const {isDark} = useData()
const dark = useDark()
const toggleDark = useToggle(dark)

watch(isDark, () => {
  darkMode.value = isDark.value
  console.log()
  toggleDark(isDark.value)
}, {immediate: true})

defineProps({
  description: {
    type: String,
    default: null
  },
  vertical: {
    type: Boolean,
    default: false
  },
  toggleable: {
    type: Boolean,
    default: true
  }
})
</script>

<style>
.example-wrapper {
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  margin: 12px 0;

  min-height: 150px;
  padding: 12px;
  border-radius: 16px;
  border: solid var(--md-sys-color-outline);
  background: var(--md-sys-color-background);
}

.example-wrapper > .vp-doc p {
  margin: unset;
}

@media (max-width: 640px) {
  .example-wrapper {
    flex-direction: column !important;
  }
  .icon {
    opacity: 1 !important;
  }
}

.dotted {
  background-image: radial-gradient(
      circle at center,
      var(--md-sys-color-on-background) 0.75px,
      transparent 0
  );
  background-size: 12px 12px;
  background-repeat: round;
}

.icon {
  cursor: pointer;

  position: absolute;
  z-index: 10;
  top: 8px;
  right: 8px;
  opacity: 0;
  transition: all 200ms;

  color: var(--md-sys-color-on-background);
  border-radius: 999px;
  padding: 4px;
}
.icon:hover {
  background: var(--md-sys-color-surface-container-high);
}

.icon-tabler {
  animation: ease-in rotation 250ms;
}

@keyframes rotation {
  0% {
    transform: rotate(260deg);
    opacity: 0;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}

.example-wrapper:hover .icon {
  opacity: 1;
}
</style>
