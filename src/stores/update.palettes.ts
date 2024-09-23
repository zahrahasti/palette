import { usePaletteStore } from '@/stores/palette'
import { createRouter, createWebHistory } from 'vue-router'

// Properly configure the router
const router = createRouter({
  history: createWebHistory(),
  routes: []
})

// Define the propsType
type PropsType = string[]

function updateLikedPalette(colors: PropsType) {
  const palette = usePaletteStore()
  palette.addToColorPalette(colors)
  localStorage.setItem('palette', JSON.stringify(palette.colorPalettes))
}

function removeLikedPalette(colors: PropsType) {
  const stringFormatOfdata: string | null = localStorage.getItem('palette')
  const parsePaletteSorted: string[] =
    stringFormatOfdata !== null ? JSON.parse(stringFormatOfdata) : []
  const data = parsePaletteSorted.filter((item) => `${item}` !== `${colors}`)
  localStorage.setItem('palette', JSON.stringify(data))
  return data
}

router.beforeEach((_, __, next) => {
  next()
})

export { updateLikedPalette, removeLikedPalette }

export default router
