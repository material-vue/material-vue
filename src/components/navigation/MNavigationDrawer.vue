<template>
  <div ref="drawer" class="container" :class="[{'container--modal': modal, 'container--rounded': rounded}, 'container--'+side]">
    <slot name="headline"></slot>
    <slot name="sections"></slot>
  </div>
</template>

<script>
export default {
  expose: ['openNav', 'closeNav'],
  props: {
    content_area: {
      type: String,
      required: true
      //only for non-modals
    },
    modal: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'left',
      validator(value) {
        return ['right', 'left', 'full'].includes(value)
      }
    },
    rounded: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    openNav() {
      this.opened = true;
      this.$refs.drawer.style.width = '360px';
      if (!this.overlay) {
        document.querySelector(this.content_area).style.marginLeft = '360px';
      }
    },
    closeNav() {
      this.opened = false;
      this.$refs.drawer.style.width = '0';
      if (!this.overlay) {
        document.querySelector(this.content_area).style.marginLeft = '0';
      }
    }
  },
  mounted() {
    this.$refs.drawer.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    })
    document.querySelector(this.content_area).style.transition = 'margin-left .5s';
    document.addEventListener('mousedown', () => {
      if (this.opened && this.modal) {
        console.log('close')
        this.closeNav();
      }
    })

    if (!this.modal) {
      this.openNav()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 360px;
  background: var(--surface);
  padding: 12px;

  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  transition: 0.5s;

  &--modal {
    width: 0;
    background: var(--surface-container-low);
    box-shadow: var(--elevation-1);
  }


  &--right {
    left: unset;
    right: 0;
  }
  &--rounded.container--left {
    border-radius: 0 16px 16px 0;
  }
  &--rounde.container--right {
    border-radius: 16px 0 0 16px;
  }
  &--rounded.container--full {
    border-radius: 16px;
  }
}
</style>