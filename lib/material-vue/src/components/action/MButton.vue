<template>
  <div ref="btn" class="container" :class="[enabled ? 'container--enabled' : 'container--disabled', type, {'container--wrap': wrap}]">
    <p class="container__label-text m-text m-headline-small"><slot></slot></p>
    <span ref="ripple" class="ripple"></span>
  </div>
</template>

<script>
export default {
  name: 'MButton',
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

      const circle = refs.ripple;
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = '10px';

      button.removeChild(circle);
      button.appendChild(circle)
    }

    refs.btn.addEventListener('click', createRipple)
  }
}
</script>

<style lang="scss" scoped>

.container {
  position: relative;

  padding: 10px 24px 10px 16px;
  height: min-content;
  min-width: min-content;

  border-radius: 100px;

  cursor: pointer;
  transition: background 200ms;
  position: relative;
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
  &--wrap {
    max-width: min-content;
  }

  &--disabled {
    cursor: default;
    //background-color: var(--primary-container-color-a18);
    &.filled {
      background-color: var(--primary-color-a12) !important;
    }
    &.outlined &.filled-tonal {
      background-color: var(--on-surface-a12) !important;
    }

    color: var(--on-surface-a38) !important;
    //.container__label-text {
    //  opacity: 38%;
    //}
  }
  &--enabled:not(.outlined) {
    &:hover:not(&:active) {
      box-shadow: var(--elevation-1);
    }
  }
}

.filled {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
}
.filled-tonal {
  background-color: var(--secondary-container-color);
  color: var(--on-secondary-container-color);
}
.outlined {
  color: var(--primary-color);
  border: 1px solid var(--outline);
  &:hover:not(&:active):not(.container--disabled) {
    background-color: var(--primary-color-a8);
  }
}
</style>