 
  // @ts-nocheck
 import {load as loadColors} from "../../routes/+page.server";
 console.log("loadcolors",loadColors());
const {colors}=loadColors()
 export function load(){
    return {colors}
 }

  
export const actions={
    removeColor:async ({request})=>{
        const formData=await request.formData();
        const data=JSON.parse(formData.get("hidden"))!
        console.log(colors);
        console.log(data);
        const foundObjectIndex = colors.findIndex(obj => {
            return obj.isLike === data.isLike && obj.colors.every((color, index) => color === data.colors[index]);
        });
        console.log(foundObjectIndex);
        if (foundObjectIndex !== -1)
        colors.splice(foundObjectIndex, 1);   
    }
}