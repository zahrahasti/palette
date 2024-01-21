 <script lang="ts">
   import { invalidateAll } from '$app/navigation'
    import "../app.css";
	import Card from "../app/Card.svelte";
	import LikedCard from '../app/LikedCard.svelte';
	import SelectedCard from '../app/SelectedCard.svelte';
    export let data;
    // console.log(data.colors);
    // console.log(data.filterColors);
  // localStorage.setItem("colors",JSON.stringify(data.colors)) 
  // console.log("parse",JSON.parse(localStorage.getItem("colors")));
    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
     "isLike":boolean
}
   export let loading:number
     
    let isVisibleLikedCardSelected:boolean,selectedColor:color<string,number>;
    function showComponent(color:color<string,number>){
       isVisibleLikedCardSelected=true;
       selectedColor=color
    }
    let canvas:HTMLCanvasElement;
    
</script>


<section  
 class="mb-[12rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
 data-active="1">
 {#if data.colors}
  {#each data.colors as color, i}
       <Card  {color}/>
  {/each}   
 {/if}
</section>



<!-- i handle this in +layout.svelte  -->
<!-- {#if data.filterColors}
  {#each data.filterColors as color}
   <LikedCardSamll on:customsubmit={updateDataPalette} {color} />
  {/each}     
{/if}    -->
