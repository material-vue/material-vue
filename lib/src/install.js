import * as components from './components'
import { themeColorDirective } from './utils/color.js'
import './styles/style.css'

const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

const MaterialVue = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component)

      Vue.component(kebabize(component.name.substring(1)), component)
    }

    Vue.directive('theme-color', themeColorDirective)
  },
}

export default MaterialVue

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MaterialVue)
}
