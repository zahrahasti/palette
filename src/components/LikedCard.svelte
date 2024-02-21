
<script lang="ts">
	import { enhance } from "$app/forms"; 
  import { fade } from "svelte/transition";
  export let color:{isLike:boolean,colors:string[]}
</script>

    <div transition:fade={{duration:300,delay:150}}  class="relative w-full scale-[.85] sm:scale-100">
        <div  class="pallete--color  grid grid-rows-16 w-full  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white   aspect-square top-0 rounded-[1rem] overflow-hidden  pallete--color__1">
          {#if color}
          {#each color.colors as codeColor , id}
          <div style="background:{codeColor};"  class=" container-color group row-[span_{5 + ((+id+1)-1)*-1}_/_span_16]  flex  cursor-pointer">
           <button   type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]">
             #{codeColor}
           </button>
          </div>
         {/each} 
          {/if}
        </div>
        <div class="flex container--btn__pallete container--main__btn justify-between  mt-9 w-full gap-3 items-center my-[1rem]">
            <form method="post" action="?/removeColor" use:enhance>
                <input type="hidden" name="hidden" id="hidden" value="{JSON.stringify(color)}">
                <button  on:click class:like={color.isLike} formaction="?/removeColor" on:click type="submit" class="bg-gray-200 flex items-center gap-[1rem] px-[.7rem] 
                py-[.4rem] border-[.1rem] border-gray-200 
                rounded-[.5rem] duration-300"  data-liked="false">
                    <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
                    <span id="like-count" class="like-counter">Liked</span>
                </button>
              </form>
            <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500"></time>
           </div>
    </div>
 