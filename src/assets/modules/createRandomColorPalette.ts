import { chromaMixingColor } from './chromaMixingColor'
function createRandomColorPalette() {
  return [
    chromaMixingColor('rgb'),
    chromaMixingColor('hsl'),
    chromaMixingColor('lab'),
    chromaMixingColor('lch')
  ]
}
export { createRandomColorPalette }
