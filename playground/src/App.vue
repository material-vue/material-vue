<template>
  <div v-theme-color="'#e08840'" style="display: flex; flex: 1; justify-content: center; align-items: center; gap: 8px;">
    <m-button @click="dialog.open()" v-theme-color="'#474b39'" text="Добавить" variant="filled" prepend-icon="add"/>
    <!--<m-button text="Click me" variant="tonal"/>-->
    <!--<m-button v-theme-color="'#866700'" text="Search" variant="outlined" append-icon="search"/>-->
    <!--<m-button text="Click me" variant="text" append-icon="arrow_forward"/>-->
    <!--<m-radio/>-->

    <m-dialog ref="dialog" title="Basic dialog title" text="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.">
      <template #actions>
        <m-button variant="text" text="action 1"/>
        <m-button text="action 2"/>
      </template>
    </m-dialog>
  </div>
</template>

<script setup>
import {ref} from "vue";

const dialog = ref(null)
</script>
