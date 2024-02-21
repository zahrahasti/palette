 
 export const baseColors=[
  "white",
  "gray",
  "silver",
  "nevy",
  "blue",
  "Aqua",
 "Teal",
 "Lime",
 "fuchsia",
 "purple",
 "green",
 "olive",  
 "yellow",  
  "orange",
 "red",
 "maroon"
]
type color={isLike:boolean,colors:string[]}
import { randomNumber } from "./randomColor";
export function splitArrayToSmallerArrays<T>(chunkSize: number, array: Array<T>): Array<Array<T>> {
  // Calculate the number of chunks needed
  const chunkCount = Math.ceil(array.length / chunkSize);
  // Create an array of empty arrays with the chunk count
  const chunks = Array.from({ length: chunkCount }, () => []);
  // Loop over the original array and push each item to the corresponding chunk
  array.forEach((item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    chunks[chunkIndex].push(item);
  });
  // Return the array of chunks
  return chunks;
}
import chroma from "chroma-js"
 
export function generatedColors<T>(color:T[]){
  return [  `${chroma.mix(...color,.5).brighten()}`,
      ...color,
      `${chroma.average(color).darken(randomNumber(3,1))}`
       ] 
}

export const isEqual = (obj1:color, obj2:color) => JSON.stringify(obj1.colors) === JSON.stringify(obj2.colors); 
