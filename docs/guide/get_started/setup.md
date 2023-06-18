# Setup project
Simply add some lines to your **main.js** file
```js{3,5,9}
import { createApp } from 'vue'
import App from './App.vue'
import material from '@korpusovmax/material-vue'

import '@korpusovmax/material-vue/dist/style.css'

const app = createApp(App)

app.use(material)
app.mount('#app')
```