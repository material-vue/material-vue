<template>
  <div v-theme-color="'#4171b8'" class="main">
    <m-button @click="dialog.open()" text="Open dialog" variant="filled"/>

    <m-dialog ref="dialog" title="Basic dialog title" text="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.">
    <m-dialog ref="dialog" title="Create new project" text="New project have a private status by default, only you in this workspace will see it">

      <template #actions>
        <m-button variant="text" text="Cancel"/>
        <m-button text="Create"/>
      </template>
    </m-dialog>

    <m-divider style="margin-left: 8px" vertical middle/>

    <m-button text="Click me" variant="tonal"/>
    <m-button text="Search" variant="outlined" prepend-icon="search"/>
    <m-button text="Click me" variant="text" append-icon="arrow_forward"/>

    <m-divider style="margin-left: 8px" vertical middle/>

    <m-radio-group class="flex" v-model="r">
      <m-radio value="1" text="option 1"/>
      <m-radio value="2" text="option 2"/>
      <m-radio value="3" text="option 3"/>
    </m-radio-group>

    <m-divider style="margin-left: 8px" vertical middle/>

    <!--<m-icon-button @click="console.log('clicked')" icon="home"/>-->
    <!--<m-icon-button variant="filled" icon="settings"/>-->
    <!--<m-icon-button variant="tonal" icon="settings"/>-->
    <!--<m-icon-button variant="outlined" icon="settings"/>-->

    <!--<m-divider style="margin-left: 8px" vertical middle/>-->

    <m-icon-button toggleable icon="home"/>
    <m-icon-button toggleable variant="filled" icon="home"/>
    <m-icon-button toggleable variant="tonal" icon="home"/>
    <m-icon-button toggleable variant="outlined" icon="home"/>

    <m-divider style="margin-left: 8px" vertical middle/>

    <div>
      <m-checkbox v-model="c" value="1" text="Checkbox 1"/>
      <m-checkbox v-model="c" value="2" text="Checkbox 2"/>
    </div>

    <m-divider style="margin-left: 8px; margin-right: 8px" vertical middle/>


    <!--<div>-->
    <!--  <m-checkbox v-model="r2" value="3" text="Checkbox 3"/>-->
    <!--  {{ r2 }}-->
    <!--</div>-->
  </div>
</template>

<script setup>
import {ref} from "vue";

const dialog = ref(null)
const r = ref(0)
const c = ref([])
</script>

<style scoped>
.main {
  display: flex;

  padding: 16px;

  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

@media (max-width: 1024px) {
  .main {
    flex-direction: column;
  }
}
</style>
