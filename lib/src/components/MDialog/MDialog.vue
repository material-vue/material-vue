<template>
  <transition v-bind="scrimFade">
    <div
      v-if="show"
      class="mv-fixed -mv-inset-20 mv-opacity-40 mv-bg-[--md-sys-color-scrim] mv-z-[9999988]"
      :class="{ 'mv-pointer-event-none': !show }"
      @click="close()"
    />
  </transition>
  <MEnterExit
    class="mv-top-1/2 mv-left-1/2 mv-z-[9999999] mv-w-[312px] mv-bg-[--md-sys-color-surface-container-high] mv-rounded-[28px] mv-fixed"
    ref="dialog"
    enter-class="mv-opacity-100"
    exit-class="mv-opacity-0 !mv-max-h-2"
    :show="show"
  >
    <div ref="wrapper" class="mv-p-6">
      <span
        v-if="icon"
        class="material-symbols-rounded mv-mb-4 mv-block mv-text-center mv-text-[--md-sys-color-secondary] mv-text-[24px]"
        v-text="icon"
      />
      <p
        class="headline-small mv-text-[--md-sys-color-on-surface]"
        :class="{ 'mv-text-center': !!icon }"
        v-text="title"
      />
      <p
        class="body-medium mv-text-[--md-sys-color-on-surface-variant] mv-mt-4"
        v-text="text"
      />

      <slot />

      <!--actions-->
      <div
        v-if="$slots.actions"
        class="mv-flex mv-gap-2 mv-pt-6 mv-justify-end"
      >
        <slot name="actions" />
      </div>
    </div>
  </MEnterExit>
</template>

<script setup>
import MEnterExit from '../transitions/MEnterExit.vue'
import { nextTick, onMounted, ref } from 'vue'
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
