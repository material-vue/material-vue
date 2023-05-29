<template>
  <div class="colors">
    <div class="primary"><p class="text">Primary</p></div>
    <div class="primary_container"><p class="text">Primary container</p></div>
  </div>
</template>

<style lang="scss">
.colors {
  width: 100vw;
  height: 128px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.primary {
  background-color: var(--primary-color);
  color: var(--on-primary-color);
}
.primary_container {
  background-color: var(--primary-container-color);
  color: var(--on-primary-container-color);
}
.text {
  font-size: 36px;
  font-weight: 600;
}
</style>