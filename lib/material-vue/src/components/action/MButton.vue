<template>
  <div ref="btn" class="container" :class="[enabled ? 'container--enabled' : 'container--disabled', type, {'container--wrap': wrap}]">
<!--    <div class="m-state" ></div>-->
    <m-state :class="[enabled ? 'm-state--enabled' : 'm-state--disabled']"></m-state>
    <p class="container__label-text m-text m-label-large"><slot></slot></p>
    <span ref="btn_ripple" class="ripple"></span>
  </div>
</template>

<script>
import MState from "../utils/MState.vue";

export default {
  name: 'MButton',
  components: {MState},
  props: {
    enabled: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'filled',
      validator(value) {
        return ['filled', 'outlined', 'filled-tonal'].includes(value);
      }
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    let refs = this.$refs;
    function createRipple(event) {
      const button = event.currentTarget;

      const circle = refs.btn_ripple;
      button.removeChild(circle);

      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;


      button.appendChild(circle)
    }

    refs.btn.addEventListener('mousedown', (event) => {
      if (this.enabled) createRipple(event)
    })
  }
}
</script>

<style lang="scss" scoped>

.container {
  position: relative;

  display: flex;
  align-items: center;

  padding: 10px 24px 10px 16px;
  height: min-content;
  min-width: min-content;

  border-radius: 100px;

  cursor: pointer;
  transition: background 200ms;
  overflow: hidden;
  &__label-text {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-left: 8px;
    user-select: none;

    &:has(span) {
      margin-left: 0;
    }
  }

  width: auto;
  &--wrap {
    max-width: min-content;
  }

  &--disabled {
    cursor: default;
    //background-color: var(--primary-container-color-a18);
    &.filled {
      background-color: var(--md-sys-color-primaryA12) !important;
    }
    &.outlined &.filled-tonal {
      background-color: var(--md-sys-color-onSurfaceA12) !important;
    }

    color: var(--md-sys-color-onSurface) !important;
    //.container__label-text {
    //  opacity: 68%;
    //}
  }
  &--enabled:not(.outlined):not(.filled-tonal) {
    &:hover:not(&:active) {
      box-shadow: var(--elevation-1);
    }
  }
}

.filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-onPrimary);
  .m-state {
    background-color: var(--md-sys-color-onPrimary);
  }
}
.filled-tonal {
  background-color: var(--md-sys-color-secondaryContainer);
  color: var(--md-sys-color-onSecondaryContainer);
  .m-state {
    background-color: var(--md-sys-color-onSecondaryContainer);
  }
}
.outlined {
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
  &:hover:not(.container--disabled) {
    //background-color: var(--primary-color-a8);
  }
  .m-state {
    background-color: var(--md-sys-color-primary);
  }
}
</style>