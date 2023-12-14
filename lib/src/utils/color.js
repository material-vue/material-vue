import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from '@material/material-color-utilities'

export const themeColorDirective = (el, binding) => {
  if (binding.value == null) return
  const theme = themeFromSourceColor(argbFromHex(binding.value))
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  applyTheme(theme, { target: el, dark: systemDark })
}
