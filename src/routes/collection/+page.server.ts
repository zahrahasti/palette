import {updateDataPalette } from "$lib"
 export async function load(){
     const colors=updateDataPalette()
      if(colors)
     return {colors:colors.colors,filterColors:colors.filterColors}
}