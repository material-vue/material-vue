<script setup>
import MDialog from '../../lib/src/components/MDialog/MDialog.vue'
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue' 
import {ref} from "vue"; 

const dialog = ref(null)
</script>


# Dialogs
<m-button style="float: right; transform: translateY(-100%)" target="_blank" rel="noopener noreferrer" link="https://m3.material.io/components/dialogs/overview" variant="text" prepend-icon="open_in_new" text="material docs"/>

<MIOList :items="['Use dialogs to make sure users act on information', 'Commonly used to confirm high-risk actions like deleting progress']"/>

[//]: # (## Usage)

## Basic usage

<ExampleWrapper>
    <m-button text="Open dialog" @click="dialog.open()"/>
    <m-dialog ref="dialog" title="Title" text="Some lorem ipsum dialog text">
        <template #actions>
            <m-button variant="text" text="cancel" @click="dialog.close()"/>
            <m-button text="action 2"/>
        </template>
    </m-dialog>
</ExampleWrapper>

::: details code
```vue
<m-button text="Open dialog" @click="dialog1.open()"/>
<m-dialog ref="dialog" title="Title" text="Some lorem ipsum dialog text"/>
```
:::
