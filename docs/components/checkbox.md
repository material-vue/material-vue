<script setup>
import MIOList from '../common/MIOList.vue';
import ExampleWrapper from '../common/ExampleWrapper.vue';
import ToMD from '../common/ToMD.vue';
import MCheckbox from '../../lib/src/components/MCheckbox/MCheckbox.vue'
</script>

# Checkbox
<ToMD href="https://m3.material.io/components/checkbox/overview"/>

<MIOList :items="[
'Use checkboxes if multiple options can be selected from a list',
'Label should be scannable',
'Selected items are more prominent than unselected items'
]"/>

## Basic usage

Checkboxes may be standalone, pre-checked. Indeterminate state is planned for future releases.

<ExampleWrapper vertical gap="0">
    <m-checkbox value="1" text="option 1"/>
    <m-checkbox value="2" text="option 2"/>
</ExampleWrapper>

::: details code
vue template
```vue
<m-checkbox value="1" text="option 1"/>
<m-checkbox value="2" text="option 2"/>
```
:::
