<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { computed, provide, ref, watch } from 'vue'
import { radioGroupModelValueSymbol } from '../../utils/keys.js'

const props = defineProps({
  modelValue: {
    default: null,
  },
})

const emits = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    internalValue.value = props.modelValue
  }
)

const model = computed({
  get() {
    return internalValue.value
  },
  set(value) {
    internalValue.value = value
    emits('update:modelValue', value)
  },
})

provide(radioGroupModelValueSymbol, model)
</script>

<script>
export default {
  name: 'MRadioGroup',
}
</script>
