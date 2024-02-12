//fetching the data 
//we can accsess the data in +layout.svelte.ts 
//we can getColors;
//we need to update data that user clicked
//actually first we need to say when click is happend the fethcing the data in +server.js 
//in server.js we need post function
//after update we need a function to tell if the button click on that again re updatte data;
//defind base color;
 


 
import { randomColor, randomNumber  } from "./randomColor";
import chroma from "chroma-js";
export const colorsBase:string[]=["#FFFFFF","#FF0000",
"#800000","#FFFF00",
"#808000","#00FF00",
"#008000","#00FFFF",
"#008080","#0000FF",
"#000080","#FF00FF"];

  export function generateSimilarColors([color1,color2]:string[]):string[] {
    const palette = [];
    
    // Convert the colors to chroma instances
    const c1 = chroma(color1).hex();
    const c2 = chroma(color2).hex();
    
    // Interpolate between the two colors to generate two additional colors
    const c3 = chroma.mix(c1, c2, 0.33, 'lab').hex();
    const c4 = chroma.mix(c1, c2, 0.66, 'lab').hex();
    
    palette.push(c1, c3, c4,c2);
    return  palette
    }
    
     
   export function generatedColors(color:string):string[] {
    // Convert the color to a chroma instance
    const chromaColor = chroma(color)
    const darkerColor = chromaColor.darken(randomNumber(5,3)).hex();
    const generatedColorPalette=generateSimilarColors([color,darkerColor])
    
    return generatedColorPalette;
    }

  export const darkenColor=():string[]=>{
      const  chromeColor=chroma(randomColor()).brighten(.3).hex()
      const darkenColor=chroma(randomColor()).darken(.3).hex();
      return  [chromeColor,darkenColor]
  }