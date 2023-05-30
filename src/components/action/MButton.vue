<template>
  <div ref="btn" class="container" :class="[{'container--enabled':enabled}, type]">
    <p class="container__label-text m-text m-headline-small"><slot></slot></p>
  </div>
</template>

<script>

export default {
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
    }
  },
  setup() {

  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 24px 10px 16px;
  height: min-content;
  min-width: min-content;

  border-radius: 100px;

  cursor: pointer;
  transition: background 200ms;
  position: relative;
  overflow: hidden;
  &__label-text {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 8px;
    user-select: none;

    &:has(span) {
      margin-left: 0;
    }
  }

  &:not(&--enabled) {
    //opacity: 18%;
    cursor: default;
    background-color: var(--primary-container-color-a18);
    color: var(--on-surface-light);
    .container__label-text {
      opacity: 38%;
    }
  }
  &--enabled:not(.outlined) {
    &:hover:not(&:active) {
      box-shadow: var(--elevation-1-light);
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
  border: 1px solid var(--outline-light);
  &:hover:not(&:active) {
    background-color: var(--primary-color-a8);
  }
}
</style>