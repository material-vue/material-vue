<template>
  <div ref="btn" class="container" :class="[{'container--enabled':enabled}, type]">
    <p class="container__label-text m-text m-headline-small">Label</p>
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
  mounted() {
    const createRipple = function (event) {
      const button = event.currentTarget;

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    }
    //Если кнопка активна - добавляем эффект нажатия
    if (this.enabled) this.$refs.btn.addEventListener('click', createRipple);
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 24px;
  height: min-content;
  width: min-content;

  background-color: var(--primary-color);
  color: var(--on-primary-color);
  border-radius: 100px;

  cursor: pointer;
  transition: background 200ms;
  position: relative;
  overflow: hidden;
  &__label-text {
    user-select: none;
  }

  &:not(&--enabled) {
    //opacity: 18%;
    background-color: var(--primary-container-color-a18);
    color: black;
    .container__label-text {
      //color - on surface TODO

      opacity: 38%;
    }
  }
  &--enabled {
    &:hover {
      box-shadow: var(--elevation-light-1);
    }
  }
}
</style>