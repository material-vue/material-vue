<template>
  <hr
    role="separator"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    class="mv-border-[0.5px] mv-self-stretch mv-border-[--md-sys-color-outline-variant]"
    :class="{
      'mv-max-w-full mv-block mv-max-h-px': !vertical,
      'mv-max-w-px mv-max-h-full mv-inline-flex': vertical,
      'mv-mx-4': middle && !vertical,
      'mv-ml-4': inset && !vertical,
      'mv-mt-4': inset && vertical,
      'mv-my-4': middle && vertical,
    }"
    :style="{ height: vertical ? 'inherit' : '' }"
  />
</template>

<script setup>
defineProps({
  inset: {
    type: Boolean,
    default: false,
  },
  middle: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  subheader: {
    type: String,
    default: null,
  },
})
</script>

<script>
export default {
  name: 'MDivider',
}
</script>
