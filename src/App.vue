<template>
  <div class="colors">
    <div class="primary"><p class="m-text m-display-small">Primary</p></div>
    <div class="primary_container"><p class="m-text m-display-small">Primary container</p></div>
  </div>
  <m-button/>
  <m-button :enabled="false"/>
</template>
<script>
import MButton from "@/components/action/MButton.vue";
export default {
  components: {MButton}
}
</script>
<style lang="scss">
.colors {
  width: 100vw;
  height: 128px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &>* {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.primary {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
}
.primary_container {
  background-color: var(--primary-container-color);
  color: var(--on-primary-container-color);
}
</style>
<script setup>
import MButton from "@/components/action/MButton.vue";
</script>