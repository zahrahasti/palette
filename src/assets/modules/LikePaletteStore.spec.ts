import { it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePaletteStore } from '@/stores/palette' // Import the store
import { updateLikedPalette } from '@/stores/update.palettes' // Import the function to test
import { createRandomColorPalette } from './createRandomColorPalette'

const colorPalette = createRandomColorPalette()
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem(key: string) {
      return store[key] || null
    },
    setItem(key: string, value: string) {
      store[key] = value
    },
    clear() {
      store = {}
    }
  }
})()

Object.defineProperty(global, 'localStorage', { value: localStorageMock })

beforeEach(() => {
  setActivePinia(createPinia())
  localStorage.clear()
})

it('should initialize the store with localStorage data if available', () => {
  // Simulate data in localStorage
  localStorage.setItem('palette', JSON.stringify(colorPalette))

  const paletteStore = usePaletteStore()

  expect(paletteStore.colorPalettes).toEqual(colorPalette)
})

it('should add a new palette to the store if not existing', () => {
  const paletteStore = usePaletteStore()
  paletteStore.addToColorPalette(colorPalette)
  console.log(paletteStore.colorPalettes)
  console.log()
  expect(paletteStore.colorPalettes).toEqual([colorPalette])
})

it('should not add a duplicate palette to the store', () => {
  const paletteStore = usePaletteStore()
  paletteStore.colorPalettes = []

  // Add the same palette twice
  paletteStore.addToColorPalette(colorPalette)
  paletteStore.addToColorPalette(colorPalette)
  expect(paletteStore.colorPalettes).toEqual([colorPalette])
})

it('should remove a palette from the store', () => {
  const paletteStore = usePaletteStore()
  paletteStore.addToColorPalette(colorPalette)
  paletteStore.removeColorPalette(colorPalette)

  expect(paletteStore.colorPalettes).not.toContain(colorPalette)
})

it('should update localStorage when updateLikedPalette is called', () => {
  updateLikedPalette(colorPalette)

  const storedPalettes = JSON.parse(localStorage.getItem('palette') || '[]')
  expect(storedPalettes).toContainEqual(colorPalette)
})
