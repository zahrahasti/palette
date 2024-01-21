import {updateDataPalette } from "$lib";
import { fetchingDataPalette } from "$lib";
import { json } from "@sveltejs/kit";
 export async function load(){
    const startTime=performance.now();
     const colors=updateDataPalette()
    const endTime=performance.now();
    const timer= endTime - startTime
     if(colors)
     return {colors:colors.colors,filterColors:colors.filterColors,timer}
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
   addColor:async ({request})=>{
       const formData=await request.formData();
       const data=JSON.parse(formData.get("hidden"))!
     
    const colors=await fetchingDataPalette();
    console.log("finding...",);
        const color:color<string,number>=colors.find(color=>color.id===data.id)!
   
    if(color.isLike){
    color.likes--;
    color.isLike=false;
   }
   else{
      color.likes++;
      color.isLike=true
   }
    return {succsess:true}
   },
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

// export async function PUT({request}){
//    // let startTime=performance.now();
//    const formData = await request.json();
//    // let endTime=performance.now();
//     const id=formData.id;
//    const colors=await fetchingDataPalette();
//    const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
//    return json( updateDataPalette(colors[colorIndex]))
// }

// export async function DELETE({request}) {
//    const formData = await request.json();
// ;
//    const id=formData.id;

//    const colors=await fetchingDataPalette();
//     const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
//    return json(removeUpdata(colors[colorIndex]))
// }