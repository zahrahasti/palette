import { it, expect } from 'vitest'
type FormatColors = 'rgb' | 'hsl' | 'lch' | 'lab'
import { mixTwoColors } from './colorMixer'

it('should return a valid hex color for each format', () => {
  const formats: FormatColors[] = ['rgb', 'hsl', 'lch', 'lab']

  formats.forEach((format) => {
    const result = mixTwoColors(format)
    expect(result).toMatch(/^#([0-9a-f]{6})$/i)
  })
})
