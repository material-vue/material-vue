<template>
  <div class="m-state" ref="stateLayer">

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

let stateLayer = ref<null | HTMLElement>(null)

onMounted(() => {
  stateLayer.value?.addEventListener('mouseenter', function() {
    stateLayer.value?.classList.add('m-state--hover');
  });

  stateLayer.value?.addEventListener('mouseleave', function() {
    stateLayer.value?.classList.remove('m-state--hover');
  });

  stateLayer.value?.addEventListener('touchstart', function() {
    stateLayer.value?.classList.add('m-state--hover');
  });

  stateLayer.value?.addEventListener('touchend', function() {
    stateLayer.value?.classList.remove('m-state--hover');
  });
})
</script>

<style scoped lang="scss">

</style>