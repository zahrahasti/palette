
 <script lang="ts">
   import "../app.css";  
   import randomcolor from 'randomcolor';
   import { baseColors } from "$lib";
  import {isEqual,generatedColors,splitArrayToSmallerArrays} from "$lib";
	import Card from "$components/Card.svelte";
  export let data
  let count=200;
  import Header from "$components/Header.svelte";
	import { e } from "mathjs";
  type paletteColorType={isLike:boolean,colors:string[]}[]; 
  let colorsPalette:paletteColorType=[],stordColors:paletteColorType; 
  const dataColor = data.colors.map(obj => ({ ...obj, isLike: false })); 
  let colors;
  let tagColor='';
  
 async function renderColor(){ 
  let randomColors:string[]=randomcolor({
   count,
   hue:tagColor
  })  ;
  const spitedArray=splitArrayToSmallerArrays(2,randomColors);

 colors= spitedArray.map(color=>
 colorsPalette.push(
  {
  isLike:false,
  colors:generatedColors(color)
   }
  )) 
  stordColors = colorsPalette.filter(
     obj1 => !dataColor.some(
     obj2 => {
     return isEqual(obj1, obj2) 
     } 
  ));  

  stordColors.unshift(...(new Set(data.colors)));  
 
} 
 
 renderColor()
 console.log([...(new Set(data.colors)),...splitArrayToSmallerArrays(2,randomcolor({
    count,
    hue:tagColor
   })).map((color)=>{
    return   {
  isLike:false,
  colors:generatedColors(color)
   }
  })]);
</script> 
 
<svelte:window on:scroll={()=>{ 
 const totalHeight = document.documentElement.scrollHeight; 
// Calculate the current scroll position of the viewport 
const scrollPosition = window.scrollY + window.innerHeight; 
// if (scrollPosition >= totalHeight - 10) { 
//    count+=12;
//    randomColors=randomcolor({
//    count
//   })  ;
//   renderColor()
//   } 
}} /> 
 <Header on:handleColor={(e)=>{
  tagColor=e.detail.color
 }} {baseColors} />


  <section 
  class="mb-[12rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]" 
   >
    {#if tagColor}
    {#each [...splitArrayToSmallerArrays(2,randomcolor({
      count,
      hue:tagColor
     })).map((color)=>{
      return   {
    isLike:false,
    colors:generatedColors(color)
     }
    })]  as color } 
   
    <Card {color}/> 
     {/each}    
     {:else}   {#each [...(new Set(data.colors)),...splitArrayToSmallerArrays(2,randomcolor({
      count,
      hue:tagColor
     })).map((color)=>{
      return   {
    isLike:false,
    colors:generatedColors(color)
     }
    })]  as color } 
   
    <Card {color}/> 
     {/each}    
  {/if}

 </section>

 