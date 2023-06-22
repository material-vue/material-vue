<template>
  <div ref="drawer" class="container drawer" :class="[{'container--modal': modal, 'container--rounded': rounded}, 'container--'+side]">
    <div class="inner-container" :style="style">
<!--      <p class="inner-container__headline m-text m-title-large"></p>-->
      <div class="inner-container__headline">
        <slot name="prepend"/>
      </div>
      <slot/>
    </div>
  </div>
  <div class="m-scrim" ref="scrim"></div>
</template>

<script>
import {computed} from "vue";
export default {
  name: 'MNavigationDrawer',
  expose: ['openNav', 'closeNav', 'selectItem'],
  props: {
    selected: {
      //only for init
      type: String,
      default: ''
    },
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
        return ['right', 'left', 'full'].includes(value)
      }
    },
    rounded: {
      type: Boolean,
      default: true
    },
    style: {
      type: String
    }
  },
  data() {
    return {
      opened: false,
      selected_item: this.selected,
    }
  },
  provide() {
    return {
      selected_item: computed(() => this.selected_item),
      selectItem: this.selectItem
    }
  },

  methods: {
    selectItem(item) {
      this.selected_item = item.value;
      this.$forceUpdate()
    },

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
        this.$refs.scrim.classList.add('m-scrim--active');
      }
    },
    closeNav() {
      this.opened = false;
      this.$refs.drawer.style.width = '0';
      const content_el = document.querySelector(this.content_area);
      content_el.style.width = '100%';
      content_el.style.marginLeft = '0';
      content_el.style.marginRight = '0';
      if (this.modal) {
        this.$refs.scrim.classList.remove('m-scrim--active');
      }
    }
  },
  mounted() {
    this.$refs.drawer.addEventListener('mousedown', (e) => {
      e.stopPropagation();
    })
    const content_el = document.querySelector(this.content_area);
    content_el.style.position = 'relative';
    content_el.style.transition = 'margin-left .5s, width .5s, margin-right .5s';
    // const scrim = document.createElement("div");
    // scrim.classList.add('m-scrim')
    // content_el.append(scrim)

    document.addEventListener('mousedown', (e) => {
      e.stopPropagation()
      if (this.opened && this.modal) {
        this.closeNav();

      }
    })

    if (!this.modal) {
      this.openNav()
    }

  },
  watch: {
    modal(new_value, old_value) {
      if (new_value) {
        this.closeNav()
      } else {
        this.$refs.scrim.classList.add('m-scrim--active');
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
  background: var(--md-sys-color-surfaceContainerLow);
  //padding: 12px; // width 0 doesnt work with this
  overflow: hidden;

  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  transition: 0.5s;

  &--modal {
    width: 0;
    background: var(--md-sys-color-surfaceContainerLowest);
    box-shadow: var(--elevation-1);
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


  &--right {
    left: unset;
    right: 0;
  }
  &--full {
    width: 100% !important;
    border-radius: 0 !important;
  }
}
.inner-container {
  height: 100%;
  min-width: 360px;
  padding: 12px;


  color: var(--md-sys-color-onSurfaceVariant);
  &__headline {
    margin: 18px 8px 18px 16px;
    &:empty {
      margin: 0;
    }
  }
}
</style>