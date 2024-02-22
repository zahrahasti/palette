 
 
 <script lang="ts">
   import "../app.css";  
   import randomcolor from 'randomcolor';
  import {isEqual,generatedColors,splitArrayToSmallerArrays} from "$lib";
	import Card from "$components/Card.svelte";
  export let data
  console.log(data.colors);
  let count=200;
  type paletteColorType={isLike:boolean,colors:string[]}[]; 
  let colorsPalette:paletteColorType=[],stordColors:paletteColorType; 
  const dataColor = data.colors.map(obj => ({ ...obj, isLike: false })); 
  let colors;
  let randomColors:string[]=randomcolor({
   count
  })  ;
 async function renderColor(){ 
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
</script> 
 
<svelte:window on:scroll={()=>{ 
 const totalHeight = document.documentElement.scrollHeight; 
// Calculate the current scroll position of the viewport 
const scrollPosition = window.scrollY + window.innerHeight; 
if (scrollPosition >= totalHeight - 10) { 
   count+=12;
   randomColors=randomcolor({
   count
  })  ;
  renderColor()
  } 
}} /> 
 

<section   
 class="mb-[12rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]" 
  >
  {#each stordColors as color} 
  <Card {color}/> 
  {/each}    
</section>
 