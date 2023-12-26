# Material Vue
UI components for each your new project, made according to m3 guidelines.

![npm](https://img.shields.io/npm/dm/%40korpusovmax/material-vue)


## Installation
You can install **MaterialVue** from NPM:
```shell
npm install @korpusovmax/material-vue
```

## Setup project
After installation all you need to fast 
start is to add some lines to your `index.js` in vue project.

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import lib
import MaterialVue from '@korpusovmax/material-vue'
// import styles
import "@korpusovmax/material-vue/style.css"

const app = createApp(App)
// use as plugin
app.use(MaterialVue)

app.mount('#app')
```

