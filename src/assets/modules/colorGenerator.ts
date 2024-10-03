import { mixTwoColors, averageTwoColors } from './colorMixer'
function createRandomColorPalette(randomColor?: string): string[] {
  return [
    mixTwoColors('rgb', randomColor),
    mixTwoColors('hsl', randomColor),
    averageTwoColors('rgb', randomColor),
    averageTwoColors('rgb', randomColor)
  ]
}
export { createRandomColorPalette }
