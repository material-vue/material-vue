import components from'./material-components'
import * as MVColor from './colors'

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export const MaterialColor = MVColor.MaterialColor;
export const ColorUtils = {
    applyTheme: MVColor.applyTheme,
    lightFromSource: MVColor.lightFromCorePalette,
    darkFromSource: MVColor.darkFromCorePalette,
}

export default plugin