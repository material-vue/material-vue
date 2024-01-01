<template>
  <m-button v-theme="'#4171b8'" style="float: right; transform: translateY(-94%)" target="_blank" rel="noopener noreferrer" variant="text" prepend-icon="open_in_new" text="material docs"/>
</template>

<script setup>
import MButton from '../../lib/src/components/MButton/MButton.vue'
import {themeColorDirective} from "../../lib/src/utils/color";
const vTheme = themeColorDirective
</script>
