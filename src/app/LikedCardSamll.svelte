
<script lang="ts">
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();
   import { slide,fade,blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing'
	import { enhance } from "$app/forms";
  type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
     
}
    export let color:color<string,number>= {
      "name": "",
      "id": "",
      "colors":["","","",""],
      "timer":"",
      "likes":0,
      "popular":false,
       "isLike":false
  }
 
</script>

 
<div in:blur={{amount:2}} out:fade={{ delay: 100, duration: 300, easing: quintOut}} class="relative w-[7rem] group h-[7.5rem] rounded-md   cursor-pointer ">
   {#each color.colors  as baseColor , id}
   <div style="background:#{
    baseColor
  };height:{100-(10+(id)*4)*id}%;" class=" rounded-t-md container-color absolute w-full  cursor-pointer">
   </div>
   {/each}
 
     <form method="post"  action="?/removeColor" use:enhance >
      <input type="hidden" id="hidden" name="hidden" value="{JSON.stringify(color)}">
       <button on:click type="submit" class="absolute bg-[rgba(0,0,0,.5)] w-6  hidden group-hover:block transition-all duration-150 h-6 rounded-full top-2 right-2">
           <svg class="w-[.7rem] h-[.7rem] text-white mx-auto">
              <use href="./icon.svg#delete"></use>
            </svg>
       </button>
     </form>
    <div  class="w-[5rem] top-[7rem] h-[2.5rem] animate-[fadeAndTranslate_1.8s_ease_forwards] rounded-[.4rem] text-[1.2rem] grid place-content-center text-white bg-black  z-20 absolute">Saved
    <span class="border-r-[.7rem] border-l-[.7rem] w-0 h-0 border-b-[.7rem] border-r-transparent border-l-transparent border-b-black absolute -top-[.5rem] left-3"></span> 
    </div>
  </div>

 