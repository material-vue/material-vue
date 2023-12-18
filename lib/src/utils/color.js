import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from '@material/material-color-utilities'
import { useDark } from '@vueuse/core'
import { watch } from 'vue'

const isDark = useDark()
export const themeColorDirective = (el, binding) => {
  if (binding.value == null) return
  const theme = themeFromSourceColor(argbFromHex(binding.value))

  watch(
    isDark,
    () => {
      applyTheme(theme, { target: el, dark: isDark.value })
    },
    { immediate: true }
  )
}
