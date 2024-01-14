import {updateDataPalette } from "$lib"
 export async function load(){
    const startTime=performance.now();
     const colors=updateDataPalette()
    const endTime=performance.now();
    const timer= endTime - startTime
     if(colors)
     return {colors:colors.colors,filterColors:colors.filterColors,timer}
}