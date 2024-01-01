<script setup>
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue'
import ToMD from '../common/ToMD.vue'
</script>


# Buttons 
<ToMD href="https://m3.material.io/components/buttons/overview"/>

<MIOList :items="['Can contain an optional leading icon', 'Containers have fully rounded corners and are wide enough to fit label text', 'Keep labels concise and in sentence-case']"/>

[//]: # (## Usage)

## Button variants

<ExampleWrapper>
    <MButton text="Filled"/>
    <MButton text="Tonal" variant="tonal"/>
    <MButton text="Outlined" variant="outlined"/>
    <MButton text="Text" variant="text"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Filled"/>
<m-button text="Tonal" variant="tonal"/>
<m-button text="Outlined" variant="outlined"/>
<m-button text="Text" variant="text"/>
```
:::

## Icons

[//]: # (todo: create article for icon props and link here)
You can use all icons from [Google's material symbols](https://fonts.google.com/icons).

<ExampleWrapper>
    <MButton text="Go to" append-icon="arrow_forward"/>
    <MButton text="Search" variant="tonal" prepend-icon="search"/>
</ExampleWrapper>


::: details code
```vue
<m-button text="Go to" append-icon="arrow_forward"/>
<m-button text="Search" variant="tonal" prepend-icon="search"/>
```
:::

::: warning
Don’t use two icons in the same button, as said in [guidelines](https://m3.material.io/components/buttons/guidelines#cb583641-335d-4a48-8407-899bc795e0f2)
:::

## Disabled state
You can set disabled state to button, by adding `disabled` prop

<ExampleWrapper>
    <MButton text="Filled" disabled/>
    <MButton text="Tonal" variant="tonal" disabled/>
    <MButton text="Outlined" variant="outlined" disabled/>
    <MButton text="Text" variant="text" disabled/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Filled" disabled/>
<m-button text="Tonal" variant="tonal" disabled/>
<m-button text="Outlined" variant="outlined" disabled/>
<m-button text="Text" variant="text" disabled/>
```
:::
