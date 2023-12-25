import { watch } from 'vue'

export const useLocalModel = (fallback, resolved) => {
  resolved.value = fallback

  watch(fallback, () => {
    if (fallback !== resolved.value) resolved.value = fallback
  })
}
