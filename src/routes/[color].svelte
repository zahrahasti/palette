
<script context="module">
    export function load({params}){
      return {
        props:{
          color:params.color
        }
      }
    }
  </script>
  <script lang="ts">
     export let color;
     console.log(color);
      import { page } from "$app/stores";
      import randomcolor from "randomcolor";
      type paletteColorType={isLike:boolean,colors:string[]}[];
      export let data;
      const dataColor = data.colors.map(obj => ({ ...obj, isLike: false })); 
      import { splitArrayToSmallerArrays } from "$lib";
        import Card from "$components/Card.svelte";
      let colorsPalette:paletteColorType=[],stordColors:paletteColorType=[]
      let count=36;
      import { onMount } from 'svelte';
      let url = ``;
      onMount(() =>{
        
        url =window.location.href});
    function renderColor(){ 
  
      let colorsSpesific=randomcolor({
      count,
      hue: url
      })
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
   const colors=splitArrayToSmallerArrays(4,randomcolor({
      count,
      hue: url
      })).map(color=>{
        return  {
    isLike:false,
    colors:color
    }
      })
   renderColor()
   </script>
  <svelte:window on:scroll={()=>{ 
      const totalHeight = document.documentElement.scrollHeight; 
     // Calculate the current scroll position of the viewport 
     const scrollPosition = window.scrollY + window.innerHeight; 
     if (scrollPosition >= totalHeight - 10) { 
       count+=12;
      //  colorsSpesific=randomcolor({
      //  count,
      //  hue: `${$page.params.color}`
      // })
      // colorsPalette= renderColor()
       } 
     }} /> 
   {url}
   <section   
   class="mb-[12rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]" 
    >
    {#each colorsPalette as color} 
    <Card {color}/> 
    {/each} 
  </section>
   