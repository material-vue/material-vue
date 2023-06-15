<template>
  <div ref="item" class="item" :class="[isActive]" @click="selectItem">
    <p class="item__label m-text m-label-large" v-html="content"></p>
    <span ref="ripple" class="ripple"></span>
  </div>
</template>

<script>
import {toRaw} from "vue";

export default {
  props: {
    value: {
      type: String
    },
    content: {
      type: String
    }
  },
  methods: {
    selectItem() {
      toRaw(this.$parent).selectItem({'value': this.value})
    },
  },
  inject: ['selected'],
  computed: {
    isActive() {
      return this.selected === this.value ? 'item--active' : 'item--inactive';
    }
  },
  mounted() {
    let refs = this.$refs;
    function createRipple(event) {
      const button = event.currentTarget;

      const circle = refs.ripple;
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

      button.removeChild(circle);
      button.appendChild(circle)
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

  color: var(--on-surface-var);

  &--active {
    background: var(--secondary-container-color);
    color: var(--on-secondary-container-color);
  }
  &--inactive:hover {
    background: var(--on-surface-a8);
  }

  & > p {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}
</style>