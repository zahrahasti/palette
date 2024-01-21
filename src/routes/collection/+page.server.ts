import {updateDataPalette,fetchingDataPalette } from "$lib"
 export async function load(){
     const colors=updateDataPalette()
      if(colors)
     return {colors:colors.colors,filterColors:colors.filterColors}
}
type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
     
 }
export const actions={
 
    removeColor:async ({request})=>{
       const formData=await request.formData();
       const data=JSON.parse(formData.get("hidden"))
       const colors=await fetchingDataPalette();
       const colorIndex:number=(await colors).findIndex(color=>String(color.id)===String(data.id));
       const color:color<string,number>=colors[colorIndex];
       color.isLike=false;
       color.likes--
    }
 }