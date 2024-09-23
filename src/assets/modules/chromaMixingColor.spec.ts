// Import the required modules and types
import { it, expect } from 'vitest'
type FormatColors = 'rgb' | 'hsl' | 'lch' | 'lab'
import { chromaMixingColor } from './chromaMixingColor'

it('should return a valid hex color for each format', () => {
  const formats: FormatColors[] = ['rgb', 'hsl', 'lch', 'lab']

  formats.forEach((format) => {
    const result = chromaMixingColor(format)
    // Expect result to be a valid hex color string
    expect(result).toMatch(/^#([0-9a-f]{6})$/i)
  })
})
