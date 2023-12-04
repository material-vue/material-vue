<template>
  <div
    class="px-3 py-1.5 relative overflow-hidden inline-flex rounded-xl border border-[--md-sys-color-on-surface-variant]"
  >
    <MStateLayer background="bg-[--md-sys-color-on-surface-variant]" />
    <span class="label-large">MDChip label</span>
  </div>
</template>

<script setup>
import MStateLayer from '../MStateLayer.vue'
</script>

<script>
export default {
  name: 'MChip',
}
</script>
