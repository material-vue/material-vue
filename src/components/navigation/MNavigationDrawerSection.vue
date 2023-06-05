<template>
  <div class="container">
    <div v-if="title.length > 0">
      <p class="container__section-header m-text m-title-small">{{title}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    divider: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: var(--on-surface-var);
  &__section-header {
    margin: 18px 8px 18px 16px;
    text-align: left;
  }
}
</style>