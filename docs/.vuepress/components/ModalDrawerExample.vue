<template>
  <div class="container">
    <MNavigationDrawer ref="drawer" :modal="true" content_area="#content1">
    </MNavigationDrawer>
    <div id="content1" @click="this.$refs.drawer.openNav()"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>