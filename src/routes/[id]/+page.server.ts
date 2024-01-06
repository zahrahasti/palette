import {updateDataPalette } from "$lib"

 export async function load({params}){
    const id:string=params?.id;
     const colors=updateDataPalette()
      if(colors!==undefined){
     colors.colors=colors.colors.filter(color=>color.name===id);
   
    }
     
      if(colors?.colors.length)
     return {colors:colors.colors,filterColors:colors.filterColors}
}