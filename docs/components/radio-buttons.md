<script setup>
import MRadio from '../../lib/src/components/MRadio/MRadio.vue'
import MRadioGroup from '../../lib/src/components/MRadio/MRadioGroup.vue'
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue' 
import {ref} from "vue"; 
import ToMD from '../common/ToMD.vue'

const radioValue = ref(null)
</script>

# Radio button
<ToMD href="https://m3.material.io/components/radio-button/overview"/>

<MIOList :items="['Use radio buttons (not switches) when only one item can be selected from a list', 'Label should be scannable', 'Selected items are more prominent than unselected items']"/>

## Basic usage


<ExampleWrapper vertical>
    <m-radio-group v-model="radioValue">
        <m-radio value="1" text="option 1"/>
        <m-radio style="margin-top: -12px" value="2" text="option 2"/>
    </m-radio-group>
    <p style="color: var(--md-sys-color-on-background); margin-top: -8px" v-text="radioValue || 'none selected'"/>
    <m-button style="margin-top: -16px" variant="tonal" text="reset" @click="radioValue = null"/>
</ExampleWrapper>

::: details code
vue template
```vue
<m-radio-group v-model="radioValue">
  <m-radio value="1" text="option 1"/>
  <m-radio value="2" text="option 2"/>
</m-radio-group>
{{ radioValue || "(none selected)" }}
<m-button variant="tonal" text="reset" @click="radioValue = null"/>
```
script setup
```js
import {ref} from "vue"; 

const radioValue = ref(null)
```
:::
