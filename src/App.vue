<template>
  <m-navigation-drawer :modal="false" :overlay="false" content_area="#content_area" ref="drawer1">

  </m-navigation-drawer>
  <div id="content_area">
<!--    <m-top-bar behavior="background"><span class="material-symbols-outlined" @click="this.$refs.drawer1.openNav()">menu</span>Material 3 design system<span class="material-symbols-outlined">account_circle</span></m-top-bar>-->
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
  </div>
</template>
<script>
import MButton from "@/components/action/MButton.vue";
import MTopBar from "@/components/navigation/MTopBar.vue";
import MDivider from "@/components/utils/MDivider.vue";
import MNavigationDrawer from "@/components/navigation/MNavigationDrawer.vue";

export default {
  components: {MNavigationDrawer, MDivider, MTopBar, MButton},
}
</script>
<style lang="scss">
body {
  background: var(--surface-container-lowest);
}

.content_area {
  width: max-content;
  height: 100vh;

}

.colors {
  width: 100%;
  height: 128*6px;
  padding: 28px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  &>* {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
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
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 100%;
  margin-top: 16px;
}
.divider {
  margin-top: 8px;
  margin-bottom: 8px;
}
.m-text {
  text-align: center;
}
</style>