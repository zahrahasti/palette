import {updateDataPalette } from "$lib"
export async function load({params}){
    const id=params.palette;
    console.log("params in card",params);
     const colors=updateDataPalette()
      if(colors!==undefined){
         colors.colors=colors.colors.filter(color=>{return `${color.name}${color.id}`===id});
         
    }
     
      if(colors?.colors.length)
     return {colors:colors.colors,filterColors:colors.filterColors}
}