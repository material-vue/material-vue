<template>
  <div ref="drawer" class="container" :class="[{'container--modal': modal, 'container--rounded': rounded}, 'container--'+side]">
    <div class="inner-container" :style="style">
      <p class="inner-container__headline m-text m-title-large"><slot name="headline"></slot></p>
      <slot name="items"></slot>
    </div>
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
    side: {
      type: String,
      default: 'left',
      validator(value) {
        //TODO: full
        return ['right', 'left', 'full'].includes(value)
      }
    },
    rounded: {
      type: Boolean,
      default: true
    },
    mask: {
      type: String
    },
    style: {
      type: String
    }
  },
  data() {
    return {
      opened: false,
      items: []
    }
  },
  methods: {
    openNav() {
      this.opened = true;
      this.$refs.drawer.style.width = '360px';
      if (!this.modal) {
        if (this.side === 'left') {
          document.querySelector(this.content_area).style.marginLeft = '360px';
        } else {
          document.querySelector(this.content_area).style.marginRight = '360px';
        }
        document.querySelector(this.content_area).style.setProperty('width', 'calc(100% - 360px)');
      } else {
        document.getElementsByClassName('m-scrim')[0].style.opacity = '0.4';
      }
    },
    closeNav() {
      this.opened = false;
      this.$refs.drawer.style.width = '0';
      document.querySelector(this.content_area).style.width = '100%';
      document.querySelector(this.content_area).style.marginLeft = '0';
      document.querySelector(this.content_area).style.marginRight = '0';
      if (this.modal) {
        document.getElementsByClassName('m-scrim')[0].style.opacity = '0';
      }
    }
  },
  mounted() {
    this.$refs.drawer.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    })
    let content_el = document.querySelector(this.content_area);
    content_el.style.transition = 'margin-left .5s, width .5s, margin-right .5s';
    document.addEventListener('mousedown', () => {
      if (this.opened && this.modal) {
        this.closeNav();
      }
    })

    if (!this.modal) {
      this.openNav()
    }

    //get all sections
    console.log(this.$slots.items()[0])
    const slotItems = this.$slots.items();
    const firstSlot = slotItems[0];
    const children = firstSlot.fn ? firstSlot.fn()[0].children : null;
    console.log(children)
    for (const section of this.$slots.items()) {
      console.log(section.children.$slots)
      for (const item of section.children) {
        console.log(item)
      }
    }

  },
  watch: {
    modal(new_value, old_value) {
      if (new_value) {
        this.closeNav()
      } else {
        this.openNav()
      }
    },
    side(new_value, old_value) {
      if (this.opened) {
        this.closeNav()
        this.openNav()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 360px;
  background: var(--surface-container-low);
  //padding: 12px; // width 0 doesnt work with this
  overflow: hidden;

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
  &--rounded.container--right {
    border-radius: 16px 0 0 16px;
  }
  &--rounded.container--full {
    border-radius: 16px;
  }
}
.inner-container {
  min-width: 360px;
  padding: 12px;


  color: var(--on-surface-var);
  &__headline {
    margin: 18px 8px 18px 16px;
    &:empty {
      margin: 0;
    }

    text-align: left;
  }
}
</style>