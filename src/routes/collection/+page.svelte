
 
<script lang="ts">
	import LikedCard from "$components/LikedCard.svelte";
    export let data;
    
 </script>


<p class="font-semibold text-[1.8rem] my-4 pb-6 border-b-gray-100 border-b-[1px]">My collection</p>
   

{#if data.colors.length}
<section class="mb-[10rem] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]">
    {#each new Set(data.colors) as color}
        <LikedCard {color}/>
    {/each}
</section>
    {:else} <div class="text-center mx-auto">
        <svg class="mb-4">
           <use></use>
        </svg>
        <p class="font-semibold text-[1.8rem] p-2 mb-3 text-gray-900">No palettes in collection</p>
        <p class="text-[1.1rem]">You haven't liked anything yet!</p>
        <a href="/popular"
           class="px-[1.2rem] text-gray-700 h-full mx-auto mt-20 py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[.8rem] border-[.1rem] border-gray-200">
             Find beautiful palettes
        </a>
    </div>
{/if}
  
 