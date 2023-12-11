<script setup>
import MRadio from '../../lib/src/components/MRadio/MRadio.vue'
import MRadioGroup from '../../lib/src/components/MRadio/MRadioGroup.vue'
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue' 
import {ref} from "vue"; 

const r = ref(null)
</script>

# Radio button
<m-button style="float: right; transform: translateY(-100%)"  target="_blank" rel="noopener noreferrer" link="https://m3.material.io/components/radio-button/overview" variant="text" prepend-icon="open_in_new" text="material docs"/>

<MIOList :items="['Use radio buttons (not switches) when only one item can be selected from a list', 'Label should be scannable', 'Selected items are more prominent than unselected items']"/>

## Inline usage

<ExampleWrapper vertical>
    <m-radio-group v-model="r">
        <m-radio value="1"/>
        <m-radio value="two"/>
    </m-radio-group>
    {{r}}
    <m-button variant="tonal" text="reset" @click="r = null"/>
</ExampleWrapper>

::: details code
```vue
<m-radio/>
```
:::
