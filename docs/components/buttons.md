<script setup>
import MButton from '../../lib/src/components/MButton/MButton.vue'
import MIOList from '../common/MIOList.vue'
import ExampleWrapper from '../common/ExampleWrapper.vue'
import '../style/custom-tokens.css'
</script>


# Buttons 
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
    <MButton variant="text" icon="lock"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Go to" append-icon="arrow_forward"/>
<m-button text="Search" variant="tonal" prepend-icon="search"/>
<m-button variant="text" icon="lock"/>
```
:::

::: warning
Don’t use two icons in the same button, as said in [guidelines](https://m3.material.io/components/buttons/guidelines#cb583641-335d-4a48-8407-899bc795e0f2)
:::

## Custom color
You can use your own color tokens or another default m3 tokens (like tertiary or error color) with ``color`` prop.

### Default colors

<ExampleWrapper>
    <MButton text="Tertiary color" color="tertiary"/>
    <MButton text="Error color" color="error" append-icon="error"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Tertiary color" color="tertiary"/>
<m-button text="Error color" color="error" append-icon="error"/>
```
:::

### Use custom color tokens
<ExampleWrapper description="Using of custom color tokens">
    <MButton text="custom color" color="custom" append-icon="palette"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="custom color" color="custom" append-icon="palette"/>
```

Add custom tokens to your css file. Replace `custom` with your color name

```css
.light {
    --md-sys-color-custom: #8B992F;
    --md-sys-color-on-custom: #FFFFFF;
    --md-sys-color-custom-container: #DFE6B3;
    --md-sys-color-on-custom-container: #2E3310;
}
.dark {
    --md-sys-color-custom: #DCE69F;
    --md-sys-color-on-custom: #464C18;
    --md-sys-color-custom-container: #5D6620;
    --md-sys-color-on-custom-container: #DFE6B3;
}

```
:::
