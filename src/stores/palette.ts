import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePaletteStore = defineStore('palette', () => {
  const colorPalettes = ref<string[]>([])
  const stringFormatOfdata: string | null = localStorage.getItem('palette')
  const parsePaletteSorted: string[] =
    stringFormatOfdata !== null ? JSON.parse(stringFormatOfdata) : []

  colorPalettes.value.push(...parsePaletteSorted)

  function addToColorPalette(value: string[]) {
    const isExistingPalette = colorPalettes.value.some(
      (palette) => JSON.stringify(palette) === JSON.stringify(value)
    )

    if (!isExistingPalette) {
      //@ts-ignore
      colorPalettes.value.push(value)
    }

    return colorPalettes
  }

  function removeColorPalette(value: string[]) {
    colorPalettes.value = colorPalettes.value.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(value)
    )
    return colorPalettes
  }

  return {
    colorPalettes,
    addToColorPalette,
    removeColorPalette
  }
})
