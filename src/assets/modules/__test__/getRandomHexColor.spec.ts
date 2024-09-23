import { describe, it, expect } from 'vitest'
import { getRandomHexColor } from '../getRandomHexColor' // adjust the path to your function

// Regular expression to match valid hex color
const hexColorRegex = /^#[0-9A-Fa-f]{6}$/

describe('getRandomHexColor', () => {
  it('should return a valid hex color string', () => {
    const color = getRandomHexColor()

    // Test if the result matches the hex color regex pattern
    expect(hexColorRegex.test(color)).toBe(true)
  })

  it('should return a different color each time', () => {
    const color1 = getRandomHexColor()
    const color2 = getRandomHexColor()

    // Check if the two results are different (not guaranteed but highly probable)
    expect(color1).not.toBe(color2)
  })

  it('should return a color string of length 7', () => {
    const color = getRandomHexColor()

    // Check if the result has a length of 7 characters (including the #)
    expect(color.length).toBe(7)
  })
})
