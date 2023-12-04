import * as components from './components'
import './styles/style.css'

const MaterialVue = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)

      const kebabCaseName = `m-${component.name.substring(1)}`.toLowerCase()
      Vue.component(kebabCaseName, component)
    }
  },
}

export default MaterialVue

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MaterialVue)
}
