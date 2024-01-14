<script lang="ts">
	import LikedCard from "../../app/LikedCard.svelte";
    import { invalidateAll } from '$app/navigation'

    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
   }
     export let data;
     async function updateDataPalette(e:CustomEvent){
       let color=e.detail.color;
         let isLike=e.detail.color.isLike;
         const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
        
      if(!isLike){
        const res=await fetch(form.action,{
            method:"POST",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }
         })
       isLike=true;
   
    }
        else {
            const res=await fetch(form.action,{
            method:"DELETE",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }        
        })  
        }
          form.reset()
          await invalidateAll()
 
     }
 
 </script>


<p class="font-semibold text-[1.8rem] my-4 pb-6 border-b-gray-100 border-b-[1px]">My collection</p>
{#if data.filterColors?.length!==0}   
<section class="mb-[10rem] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]">

{#if data.filterColors!==undefined}
{#each data.filterColors as color}
<LikedCard on:customsubmit={updateDataPalette} {color} />
{/each}
{/if}
</section>

{:else}
  <div class="text-center">
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
 