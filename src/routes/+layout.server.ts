import {updateDataPalette,fetchingDataPalette } from "$lib"
type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
     
 }
 export async function load(){
     const colors=updateDataPalette();
      if(colors)
     return {colors:colors.colors,filterColors:colors.filterColors}
}

 