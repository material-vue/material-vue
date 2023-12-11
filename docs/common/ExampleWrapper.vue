<template>
  <div class="example-wrapper" :class="{'dark': darkMode && chosenMode, 'light': !darkMode && chosenMode}" :style="{flexDirection: vertical ? 'column' : 'row'}">
    <div class="icon" @click="() => {
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
import DarkModeIcon from "./DarkModeIcon.vue";
import LightModeIcon from "./LightModeIcon.vue";
import {onMounted, ref} from "vue";

const darkMode = ref(false)
const chosenMode = ref(false)

defineProps({
  description: {
    type: String,
    default: null
  },
  vertical: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  darkMode.value = document.documentElement.classList.contains('dark')
})
</script>

<style>
.example-wrapper {
  position: relative;

  display: flex;
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
