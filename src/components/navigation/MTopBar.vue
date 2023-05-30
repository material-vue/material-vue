<template>
  <div ref="top_bar" class="container">
    <p class="m-text m-display-medium">Title</p>
  </div>
</template>

<script>
export default {
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
  background: var(--surface-light);

  transition: 0.4s;
  position: fixed; // Sticky/fixed navbar
  width: 100%;
  top: 0;
  padding: 16px;

  &__scrolled {
    padding: 8px 16px;
  }
}
</style>