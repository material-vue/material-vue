<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  expose: ['getSelected', 'selectOption'],
  props: {
    selected: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      selected_option: this.selected
    }
  },
  methods: {
    selectOption(value) {
      this.selected_option = value
    },
  },
  provide() {
    return {
      selected_option: computed(() => this.selected_option),
      selectOption: this.selectOption,
    }
  },
  computed: {
    getSelected() {
      return this.selected_option
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  //gap: 0; //TODO: check specs (lists?)
}
</style>