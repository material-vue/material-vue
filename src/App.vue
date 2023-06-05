<template>
  <m-navigation-drawer :modal="!screenSize.expand" content_area="#content_area" ref="drawer1">
    <template #headline>Some headline</template>
    <template #items>
      <m-navigation-drawer-section title="Section header">
        <m-navigation-drawer-item state="active">Item1</m-navigation-drawer-item>
        <m-navigation-drawer-item>Item2</m-navigation-drawer-item>
        <m-navigation-drawer-item>Item3</m-navigation-drawer-item>
      </m-navigation-drawer-section>
      <m-navigation-drawer-section title="Section 2 header">
        <m-navigation-drawer-item>Item4</m-navigation-drawer-item>
        <m-navigation-drawer-item>Item5</m-navigation-drawer-item>
        <m-navigation-drawer-item>Item6</m-navigation-drawer-item>
      </m-navigation-drawer-section>
    </template>
  </m-navigation-drawer>
  <div id="content_area">
    <m-top-bar v-show="!screenSize.expand" behavior="background"><span class="material-symbols-outlined" @click="this.$refs.drawer1.openNav()">menu</span>Material 3 design system<span class="material-symbols-outlined">account_circle</span></m-top-bar>
    <p class="title m-text m-display-medium">Ключевые цвета</p>
    <div class="colors">
      <div class="primary"><p class="m-text m-display-small">Primary</p></div>
      <div class="primary_container"><p class="m-text m-display-small">Primary container</p></div>
      <div class="secondary"><p class="m-text m-display-small">Secondary</p></div>
      <div class="secondary_container"><p class="m-text m-display-small">Secondary container</p></div>
    </div>
    <p class="title m-text m-display-medium">Нейтральные цвета</p>
    <div class="color_roles">
      <div class="color_shot" style="background: var(--surface-dim)"></div>
      <div class="color_shot" style="background: var(--surface-container-low)"></div>
      <div class="color_shot" style="background: var(--surface-container)"></div>
      <div class="color_shot" style="background: var(--surface-container-high)"></div>
      <div class="color_shot" style="background: var(--surface-container-highest)"></div>
      <div class="color_shot" style="background: var(--surface)"></div>
    </div>
    <p class="title m-text m-display-medium">Компоненты</p>
    <p class="title m-text m-headline-large" style="opacity: 75%">Кнопка</p>
    <div class="buttons">
      <m-button>Filled</m-button>
      <m-button :enabled="false">Disabled</m-button>
      <m-button type="filled-tonal">Filled tonal</m-button>
      <m-button type="outlined">Outlined</m-button>
    </div>
    <div class="m-scrim"></div>
  </div>
</template>
<script>
import MButton from "@/components/action/MButton.vue";
import MTopBar from "@/components/navigation/MTopBar.vue";
import MDivider from "@/components/utils/MDivider.vue";
import MNavigationDrawer from "@/components/navigation/MNavigationDrawer.vue";
import MNavigationDrawerSection from "@/components/navigation/MNavigationDrawerSection.vue";
import MNavigationDrawerItem from "@/components/navigation/MNavigationDrawerItem.vue";

export default {
  components: {MNavigationDrawerItem, MNavigationDrawerSection, MNavigationDrawer, MDivider, MTopBar, MButton},
  data() {
    return {
      screenSize: {
        compact: window.matchMedia("(max-width: 600px)").matches,
        medium: window.matchMedia("(min-width: 601px) and (max-width: 840px)").matches,
        expand: window.matchMedia("(min-width: 841px)").matches
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.screenSize = {
        compact: window.matchMedia("(max-width: 600px)").matches,
            medium: window.matchMedia("(min-width: 601px) and (max-width: 840px)").matches,
            expand: window.matchMedia("(min-width: 841px)").matches
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
<style lang="scss">
.title {
  color: var(--on-primary-container-color)
}
//html {
//  overscroll-behavior: none;
//}
body {
  background: var(--surface-container-lowest);
}
#content_area {
  width: 100%;
}

.colors {
  width: 100%;
  height: 128*6px;
  padding: 28px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr;
  &>* {
    padding: 8px;
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

.color_roles {
  width: 100%;
  height: 136*2px;
  padding: 28px;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  &>* {
    border-radius: 16px;
  }
}

.buttons {
  padding: 0 16px 0 16px;
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
</style>

<style lang="scss" scoped>
.m-text {
  text-align: center;
}
</style>