<template>
  <div ref="drawer" class="container drawer" :class="[{'container--modal': modal, 'container--rounded': rounded}, 'container--'+side]">
    <div class="inner-container" :style="style">
      <p class="inner-container__headline m-text m-title-large"><slot/></p>
      <m-navigation-drawer-section v-for="(section, index) in sections" :title="section.title">
        <m-navigation-drawer-item v-for="(item, index2) in section.items" :key="item" :state="active_item==item ? 'active' : 'inactive'" :content="item" @click="active_item=item"/>
      </m-navigation-drawer-section>
    </div>
  </div>
</template>

<script>
import MNavigationDrawerItem from "@/components/navigation/MNavigationDrawerItem.vue";
import MNavigationDrawerSection from "@/components/navigation/MNavigationDrawerSection.vue";
export default {
  components: {MNavigationDrawerSection, MNavigationDrawerItem},
  expose: ['openNav', 'closeNav'],
  props: {
    sections: {
      type: Array,
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
      active_item: this.$props.sections[0].items[0]
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

  },
  watch: {
    modal(new_value, old_value) {
      if (new_value) {
        this.closeNav()
      } else {
        document.getElementsByClassName('m-scrim')[0].style.opacity = '0';
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
  height: 100%;
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