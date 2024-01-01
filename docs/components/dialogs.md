<script setup>
import MDialog from '../../lib/src/components/MDialog/MDialog.vue'
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue' 
import {ref} from "vue"; 
import ToMD from '../common/ToMD.vue'

const dialog = ref(null)
</script>


# Dialogs
<ToMD href="https://m3.material.io/components/dialogs/overview"/>

<MIOList :items="['Use dialogs to make sure users act on information', 'Commonly used to confirm high-risk actions like deleting progress']"/>

[//]: # (## Usage)

## Basic usage
You can use dialog with `m-dialog`. The component ref has `open()` and `close()`
exposed functions, use it to show/hide modal dialog.

<ExampleWrapper>
    <m-button text="Open dialog" @click="dialog.open()"/>
    <m-dialog ref="dialog" title="Title" text="Some lorem ipsum dialog text">
        <template #actions>
            <m-button variant="text" text="cancel" @click="dialog.close()"/>
            <m-button text="action"/>
        </template>
    </m-dialog>
</ExampleWrapper>

::: details code
vue template
```vue
<m-button text="Open dialog" @click="dialog.open()"/>
<m-dialog ref="dialog" title="Title" text="Some lorem ipsum dialog text">
  <template #actions>
    <m-button variant="text" text="cancel" @click="dialog.close()"/>
    <m-button text="action 2"/>
  </template>
</m-dialog>
```
script setup
```js
import {ref} from "vue";

const dialog = ref(null)
```
:::
