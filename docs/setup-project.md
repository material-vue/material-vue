# Setup project
Let's setup new vue project to use Material Vue in it. After [installation](./get-started.md)
all you need to fast start is to add some lines to your ``index.js``

```js{4-5,8}
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MaterialVue from '@korpusovmax/material-vue'
import "@korpusovmax/material-vue/style.css"

const app = createApp(App)
app.use(MaterialVue)

app.mount('#app')
```
