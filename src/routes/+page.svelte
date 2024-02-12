 <script lang="ts">
  import "../app.css";  
  import { randomColor } from '$lib/randomColor';
  import { generatedColors ,colorsBase} from "$lib";
	import Card from "../app/Card.svelte";
  export let data;
  let colors:{isLike:boolean,colors:string[]}[]=[];
  const isEqual = (obj1:object, obj2:object) => JSON.stringify(obj1) === JSON.stringify(obj2);

 
 colorsBase.forEach(color=>colors.push({isLike:false,colors:generatedColors(color)}));
 //set isLike to false in data.colors objects
 const dataColor = data.colors.map(obj => ({ ...obj, isLike: false }));
 //set and delete duplicate object 
 let stordColors = colors.filter(obj1 => !dataColor.some(obj2 => isEqual(obj1, obj2)));
//add colors that user liked
 stordColors.unshift(...data.colors);
 </script>

<svelte:window on:scroll={(e)=>{
  console.log(e);
  const totalHeight = document.documentElement.scrollHeight;

// Calculate the current scroll position of the viewport
const scrollPosition = window.scrollY + window.innerHeight;
if (scrollPosition >= totalHeight - 10) {
    stordColors=[...stordColors,{isLike:false,colors:generatedColors(randomColor())}]
  }
}} />
<section  
 class="mb-[12rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
 data-active="1">
  {#each stordColors as color}
    <Card {color}/>
  {/each}
</section>
 