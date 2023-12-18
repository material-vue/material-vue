<template>
  <transition v-bind="scrimFade">
    <div
      v-show="show"
      class="fixed inset-0 opacity-40 bg-[--md-sys-color-scrim] z-[99998]"
      @click="close()"
    />
  </transition>
  <MEnterExit
    class="top-1/2 left-1/2 z-[99999] w-[312px] bg-[--md-sys-color-surface-container-high] rounded-[28px] fixed"
    ref="dialog"
    enter-class="opacity-100"
    exit-class="opacity-0 !max-h-2"
    :show="show"
  >
    <div ref="wrapper" class="p-6">
      <span
        v-if="icon"
        class="material-symbols-rounded mb-4 block text-center text-[--md-sys-color-secondary] text-[24px]"
        v-text="icon"
      />
      <p
        class="headline-small text-[--md-sys-color-on-surface]"
        :class="{ 'text-center': !!icon }"
        v-text="title"
      />
      <p
        class="body-medium text-[--md-sys-color-on-surface-variant] mt-4"
        v-text="text"
      />

      <slot />

      <!--actions-->
      <div v-if="$slots.actions" class="flex gap-2 pt-6 justify-end">
        <slot name="actions" />
      </div>
    </div>
  </MEnterExit>
</template>

<script setup>
import MEnterExit from '../transitions/MEnterExit.vue'
import { onMounted, ref } from 'vue'
import { scrimFade } from '../../utils/transitions.js'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: null,
  },
})

defineExpose({ open: open, close: close })

const wrapper = ref(null)
const dialog = ref(null)

onMounted(() => {
  dialog.value.$el.style.transform = `translate(-50%, -${
    wrapper.value.scrollHeight / 2 + 36
  }px)`
})

const show = ref(false)

function open() {
  dialog.value.$el.style.transform = `translate(-50%, -${
    wrapper.value.scrollHeight / 2
  }px)`
  show.value = true
}

function close() {
  dialog.value.$el.style.transform = `translate(-50%, -${
    wrapper.value.scrollHeight / 2 + 36
  }px)`
  show.value = false
}
</script>

<script>
export default {
  name: 'MDialog',
}
</script>
