<script setup>
import MIOList from '../common/MIOList.vue';
import ExampleWrapper from '../common/ExampleWrapper.vue';
import ToMD from '../common/ToMD.vue';

import MDivider from '../../lib/src/components/MDivider/MDivider.vue'
</script>

# Divider
<ToMD href="https://m3.material.io/components/divider/overview"/>

<MIOList :items="[
'Only use dividers if items can’t be grouped with open space',
'Use dividers to group things, not separate individual items',
'Use dividers to separate content vertically'
]"/>

## Basic usage

[//]: # (TODO: add description)

<ExampleWrapper vertical gap="4" styles="align-items: start; padding: 36px">
<p class="headline-small">Lorem ipsum</p>
<p class="body-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at doloribus eaque esse et iste minima molestias mollitia repellendus sapiente unde, veritatis! Aliquam, beatae deleniti ipsam magni minima officia ullam?</p>
<m-divider style="margin-top: 12px"/>
<p class="headline-small">Lorem ipsum</p>
<p class="body-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at doloribus eaque esse et iste minima molestias mollitia repellendus sapiente unde, veritatis! Aliquam, beatae deleniti ipsam magni minima officia ullam?</p>
</ExampleWrapper>

::: details code
```vue
<m-divider/>
```
:::
