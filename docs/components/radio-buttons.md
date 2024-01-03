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

`m-radio` component can be used on its own, but we strongly recommend you use radios
in pair with `m-radio-group`, that creates default radio buttons single choice behavior

<ExampleWrapper vertical>
    <m-radio-group v-model="radioValue">
        <m-radio value="1" text="option 1"/>
        <m-radio style="margin-top: -12px" value="2" text="option 2"/>
    </m-radio-group>
</ExampleWrapper>

::: details code
vue template
```vue
<m-radio-group v-model="radioValue">
    <m-radio value="1" text="option 1"/>
    <m-radio value="2" text="option 2"/>
</m-radio-group>
```
script setup
```js
import {ref} from "vue"; 

const radioValue = ref(null)
```
:::
