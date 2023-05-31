<template>
  <m-top-bar behavior="background"><span class="material-symbols-outlined">menu</span>Material 3 design system<span class="material-symbols-outlined">account_circle</span></m-top-bar>
  <div class="colors">
    <div class="primary"><p class="m-text m-display-small">Primary</p></div>
    <div class="primary_container"><p class="m-text m-display-small">Primary container</p></div>
    <div class="secondary"><p class="m-text m-display-small">Secondary</p></div>
    <div class="secondary_container"><p class="m-text m-display-small">Secondary container</p></div>
  </div>
  <div class="buttons">
    <m-button>Filled</m-button>
    <m-button :enabled="false">Disabled</m-button>
    <m-button type="filled-tonal">Filled tonal</m-button>
    <m-button type="outlined">Outlined</m-button>
  </div>
</template>
<script>
import MButton from "@/components/action/MButton.vue";
import MTopBar from "@/components/navigation/MTopBar.vue";
export default {
  components: {MTopBar, MButton}
}
</script>
<style lang="scss">
.colors {
  width: 100vw;
  height: 128*6px;
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
.secondary {
  background-color: var(--secondary-color);
  color: var(--on-secondary-color);
}
.secondary_container {
  background-color: var(--secondary-container-color);
  color: var(--on-secondary-container-color);
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
}
</style>