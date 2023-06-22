<template>
  <div>

  </div>
</template>

<script>
// import '../../../lib/material-vue/src/assets/global.css'
import {ColorUtils, MaterialColor} from "../../../lib/material-vue/src/index";


export default {
  mounted() {
    ColorUtils.applyTheme(
        ColorUtils.lightFromSource(MaterialColor.argbFromHex('#003CBD')),
        ColorUtils.darkFromSource(MaterialColor.argbFromHex('#003CBD')),
    )
  }
}
</script>

<style lang="scss">

</style>