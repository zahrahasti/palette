import { getRandomHexColor } from './getRandomHexColor'
import chroma from 'chroma-js'
type FormatColors = 'rgb' | 'hsl' | 'lch' | 'lab'
function chromaMixingColor(format: FormatColors) {
  const randomColor1 = getRandomHexColor()
  let randomColor2 = getRandomHexColor()
  if (randomColor1 === randomColor2) randomColor2 = getRandomHexColor()
  return chroma.mix(randomColor1, randomColor2, 0.5, format).hex()
}

export { chromaMixingColor }
