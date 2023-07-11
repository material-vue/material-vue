<template>
  <div class="container" ref="container">
    <slot :windowSize="windowSize"/>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from "vue";
import basicComponent from "../basic-component";

export default {
  name: 'MLayout',
  data() {
    return {
      windowSize: {
        compact: window.matchMedia("(max-width: 600px)").matches,
        medium: window.matchMedia("(min-width: 601px) and (max-width: 840px)").matches,
        expand: window.matchMedia("(min-width: 841px)").matches
      },
      stateElements: []
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowSize = {
        compact: window.matchMedia("(max-width: 600px)").matches,
        medium: window.matchMedia("(min-width: 601px) and (max-width: 840px)").matches,
        expand: window.matchMedia("(min-width: 841px)").matches
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  width: 100%;
  height: 100%;
}
</style>