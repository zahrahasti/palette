import {updateDataPalette } from "$lib"
import { error } from "@sveltejs/kit";
 
 export async function load({params}){
   const startTime=performance.now();
    const id:string=params?.id;
    const colors=updateDataPalette()
    const findColors =colors?.colors.filter(color => {
      return String(color.name) === id || String(`${color.name}${color.id}`) === id;
    }) || undefined
   const endTime=performance.now();
   const timer=endTime-startTime;
    if(colors?.colors.filter(color=>{return `${color.name}${color.id}`===id}).length)console.log("unfornatlyy it is correct");
    if(colors?.colors&&findColors?.length){return {colors:findColors,filterColors:colors.filterColors,timer}}
    else	
    throw error(404, {
      message: 'Not found',
    });
}