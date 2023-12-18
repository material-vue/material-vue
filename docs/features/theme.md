<script setup>
import MButton from '../../lib/src/components/MButton/MButton.vue';
import { themeColorDirective } from '../../lib/src/utils/color.js';
import ExampleWrapper from '../common/ExampleWrapper.vue'

const vThemeColor = themeColorDirective
</script>

# Custom color
You can use your own color to theme components with `v-theme-color` directive

::: info
Now `v-theme-color` working only with hex values
:::

[//]: # (## Default colors)

[//]: # ()
[//]: # (<ExampleWrapper>)

[//]: # (    <MButton text="Tertiary color" color="tertiary"/>)

[//]: # (    <MButton text="Error color" color="error" append-icon="error"/>)

[//]: # (</ExampleWrapper>)

[//]: # ()
[//]: # (::: details code)

[//]: # (```vue)

[//]: # (<m-button text="Tertiary color" color="tertiary"/>)

[//]: # (<m-button text="Error color" color="error" append-icon="error"/>)

[//]: # (```)

[//]: # (:::)

## Use custom color
<ExampleWrapper description="Using of custom color tokens">
    <m-button text="Pinky" v-theme-color="'#F85284'"/>
    <m-button text="Green!" v-theme-color="'#6AA569'"/>
    <m-button text="Lavanda" v-theme-color="'#7D6FA5'"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Pinky" v-theme-color="'#F85284'"/>
```
:::
