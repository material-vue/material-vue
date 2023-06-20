<template>
  <div ref="top_bar" class="container" :class="['behavior_'+behavior]">
    <p class="container__headline m-text m-title-large"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'MTopBar',
  props: {
    configuration: {
      type: String,
      default: 'small-centered',
      validator(value) {
        return ['small-centered', 'small', 'medium', 'large'].includes(value);
        //TODO: sm, md, lg
      }
    },
    behavior: {
      type: String,
      default: 'background',
      validator(value) {
        return ['none', 'elevation', 'background'].includes(value);
      }
    }
  },
  mounted() {
    let top_bar = this.$refs.top_bar;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        top_bar.classList.add('container__scrolled');
      } else {
        top_bar.classList.remove('container__scrolled');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 64px;
  top: 0;
  padding: 18px;

  background: var(--md-sys-color-surfaceContainerlowest);
  color: var(--on-surface);

  transition: 0.4s;
  position: sticky;

  &__headline {
    display: flex;
    align-items: center;
    gap: 24px;
    :slotted(span) {
      &:nth-child(2) {
        margin-left: auto;
      }
    }
  }

  &__scrolled {
    &.behavior_elevation {
      box-shadow: var(--elevation-2);
    }
    &.behavior_background {
      background: var(--md-sys-color-surfaceContainerLowest);
    }
    //padding: 8px 16px;
  }
}
</style>