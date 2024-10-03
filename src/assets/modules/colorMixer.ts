import { getRandomHexColor } from './getRandomHexColor'
import chroma from 'chroma-js'

type ColorFormat = 'rgb' | 'hsl' | 'lch' | 'lab'
function mixTwoColors(format: ColorFormat, baseColor = getRandomHexColor()) {
  let mixingColor = getRandomHexColor()
  if (baseColor === mixingColor) mixingColor = getRandomHexColor()
  return chroma.mix(baseColor, mixingColor, 0.9, format).hex()
}

function averageTwoColors(format: ColorFormat, baseColor = getRandomHexColor()) {
  let mixingColor = getRandomHexColor()
  if (baseColor === mixingColor) mixingColor = getRandomHexColor()
  return chroma.average([baseColor, mixingColor], format).hex()
}

export { mixTwoColors, averageTwoColors }
