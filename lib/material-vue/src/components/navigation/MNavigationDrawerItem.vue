<template>
  <div ref="item" class="item" :class="[isActive]" @click="selectItem({'value': this.value})">
    <m-state/>
    <p class="item__label m-text m-label-large" v-html="content"></p>
    <span ref="ripple" class="ripple"></span>
  </div>
</template>

<script>
import {toRaw} from "vue";
import MState from "../utils/MState.vue";

export default {
  name: 'MNavigationDrawerItem',
  components: {MState},
  props: {
    value: {
      type: String
    },
    content: {
      type: String
    }
  },
  inject: ['selected_item', 'selectItem'],
  computed: {
    isActive() {
      return this.selected_item === this.value ? 'item--active' : 'item--inactive';
    }
  },
  mounted() {
    let refs = this.$refs;
    function createRipple(event) {
      const element = event.currentTarget;

      const circle = refs.ripple;
      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - element.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - element.getBoundingClientRect().top - radius}px`;

      element.removeChild(circle);
      element.appendChild(circle)
    }

    refs.item.addEventListener('click', createRipple)
  }
}
</script>

<style lang="scss" scoped>
.item {
  //for ripple
  position: relative;
  overflow: hidden;

  cursor: pointer;

  width: 100%;
  height: 56px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 16px;
  padding-right: 24px;
  border-radius: 100px;

  color: var(--md-sys-color-onSurfaceVariant);

  &--active {
    background: var(--md-sys-color-secondaryContainer);
    color: var(--md-sys-color-onSecondaryContainer);
  }
  //&--inactive:hover {
  //  background: var(--on-surface-a8);
  //}

  & > p {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}

.m-state {
  background-color: var(--md-sys-color-onSecondaryContainer);
}
</style>