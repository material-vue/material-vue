<template>
  <div class="container" :class="['container--'+state]">
    <p class="container__label m-text m-label-large">
      <slot/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: false,
      default: 'inactive',
      validator(value) {
        return ['inactive', 'active'].includes(value);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
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
}
</style>