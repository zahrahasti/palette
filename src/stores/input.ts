import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInputStore = defineStore('input', () => {
  const hexColor = ref<string>()
  function updateHexColor(text: string) {
    hexColor.value = text
    return text
  }
  return {
    hexColor,
    updateHexColor
  }
})
