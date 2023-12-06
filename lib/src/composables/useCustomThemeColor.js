export const useCustomThemeColor = (color) => {
  return (str) =>
    color == null
      ? str
      : str.replace(/primary|secondary|tertiary|error/gi, color)
}
