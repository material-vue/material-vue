<script setup>
import MButton from '../../lib/src/components/MButton/MButton.vue';
import { themeColorDirective } from '../../lib/src/utils/color.js';
import ExampleWrapper from '../common/ExampleWrapper.vue'

const vThemeColor = themeColorDirective
</script>

# Custom color
You can use your own color to theme components with `v-theme-color` directive

::: info
Now `v-theme-color` is working only with hex values
:::

## Use custom color
<ExampleWrapper description="Using of custom color tokens" :toggleable="false">
    <m-button text="Pinky" v-theme-color="'#F85284'"/>
    <m-button text="Green!" v-theme-color="'#6AA569'"/>
    <m-button text="Lavanda" v-theme-color="'#7D6FA5'"/>
</ExampleWrapper>

::: details code
```vue
<m-button text="Pinky" v-theme-color="'#F85284'"/>
```
:::
