<script lang="ts">
    import { page } from "$app/stores";
    import { isEqual } from "$lib";
    import randomcolor from "randomcolor";
    type paletteColorType={isLike:boolean,colors:string[]}[];
  export let data;
  const dataColor = data.colors.map(obj => ({ ...obj, isLike: false })); 
    import { splitArrayToSmallerArrays } from "$lib";
	import Card from "$components/Card.svelte";
    let colorsPalette:paletteColorType=[],stordColors:paletteColorType=[]
    let count=36;
    let colorsSpesific=randomcolor({
    count,
    hue: `${$page.params}`
    })
 function renderColor(){ 
  const spitedArray=splitArrayToSmallerArrays(4,colorsSpesific);
 spitedArray.map(color=>
 colorsPalette.push(
  {
  isLike:false,
  colors:color
  }
  ))  
  return stordColors;
} 
 
 renderColor()
 </script>
<svelte:window on:scroll={()=>{ 
    const totalHeight = document.documentElement.scrollHeight; 
   // Calculate the current scroll position of the viewport 
   const scrollPosition = window.scrollY + window.innerHeight; 
   if (scrollPosition >= totalHeight - 10) { 
    console.log("end of page");
     count+=12;
     colorsSpesific=randomcolor({
     count,
     hue: `${$page.params}`
    })
    colorsPalette= renderColor()
     } 
   }} /> 
 
 <section   
 class="mb-[12rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]" 
  >
  {#each colorsPalette as color} 
  <Card {color}/> 
  {/each} 
</section>
 