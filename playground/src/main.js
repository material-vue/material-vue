import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MaterialVue from '@korpusovmax/material-vue'
import "@korpusovmax/material-vue/style.css"

const app = createApp(App)
app.use(MaterialVue)

app.mount('#app')
