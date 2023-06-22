<template>
  <div class="radio-item" @click="handleClick">
    <div ref="radio" class="container" :class="[getChecked ? 'container--checked' : 'container--unchecked']">
      <div class="m-state"></div>
      <p class="container__icon">
        <span class="material-symbols-outlined">{{getChecked ? 'radio_button_checked' : 'radio_button_unchecked'}}</span>
      </p>
      <span ref="ripple" class="ripple"></span>
    </div>
    <p class="container__label m-text m-title-large"><slot name="label"/></p>
  </div>
</template>

<script>
export default {
  expose: ['checked', 'setChecked'],
  data() {
    return {
      checked: false
    }
  },
  inject: ['selectOption', 'selected_option'],
  methods: {
    setChecked(newState) { //TODO important set, without changing radios in group
      this.checked = newState
      //if inside group
      if (this.selected_option !== undefined) {
        if (this.checked) {
          this.selectOption(this.value)
        } else {
          this.selectOption(null)
        }
      }
    },
    handleClick() {
      this.selectOption(this.value)
      this.checked = !this.checked
    }
  },
  props: {
    initialChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  beforeCreate() {
    this.checked = this.$props.initialChecked
  },
  computed: {
    getChecked() {
      //if radio placed inside radio-group
      if (this.selected_option !== undefined) {
        return this.selected_option === this.value;
      }
      return this.checked
    }
  },
  mounted() {
    let refs = this.$refs;
    function createRipple(event) {
      const element = event.currentTarget;

      const circle = refs.ripple;
      element.removeChild(circle);

      const diameter = Math.max(element.clientWidth, element.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - element.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${event.clientY - element.getBoundingClientRect().top - radius}px`;


      element.appendChild(circle)
    }

    refs.radio.addEventListener('click', createRipple)
  }
}
</script>

<style lang="scss" scoped>
.radio-item {
  display: flex;
  align-items: center;

}

.container {
  border-radius: 90px;
  overflow: hidden;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: min-content;
  min-width: 40px;
  height: 40px;
  &__icon {
    display: flex;

    font-size: 20px;
    color: var(--md-sys-color-onSurfaceVariant);
  }

  &__label {
    margin-left: 6px;
    color: var(--md-sys-color-onSurface);

    cursor: pointer;

    &:empty {
      margin-left: 0;
    }
  }
}

.container--checked {
  .container__icon {
    color: var(--md-sys-color-primary)
  }

  &>.m-state {
    background-color: var(--md-sys-color-primary);
  }
}

.m-state {
  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 90px;

  background-color: var(--md-sys-color-onSurfaceVariant)
}

.ripple {
  background-color: var(--md-sys-color-primary);
  animation: ripple 350ms ease-in;
}

</style>