<script lang="ts">
  import { formatTimeDifference } from '$lib/utils';
   import { slide } from 'svelte/transition';
   import { onMount } from 'svelte';
    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
     
}
let element:HTMLElement
    export let color:color<string,number>= {
      "name": "",
      "id": "",
      "colors":["","","",""],
      "timer":"",
      "likes":0,
      "popular":false,
       "isLike":false,
      
  }
  onMount(()=>{
    const observer=new IntersectionObserver((entries)=>{
      for (const entry of entries) {
      
          if (entry.intersectionRatio >= 0.5) { // Display the element when it's at least 50% visible
              const el=entry.target as HTMLElement
             el.classList.remove("card");
             el.classList.add("card-animated")
             
    }}
    },{
       threshold:.5
    })
    
    observer.observe(element)
  })
 let codeColorBase:string;
 	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
 
   
      let loading:boolean=false;
 
function handleClicked(e:Event,color:color<string,number>){
   goto(`./${color.name}${color.id}`)   
} 
 
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={element} class="relative card animated-translate-y w-full scale-[.85] sm:scale-100">
    <div   on:click={(e)=>handleClicked(e,color)}  class="w-full relative  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white   aspect-square bottom-0 rounded-[1rem] overflow-hidden  pallete--color__1">
      {#if color}
      {#each color.colors as codeColor , id}
      <div style="animation-delay:{(id+1)*.05}s; background-color:#{codeColor};height:{100-(10+(id)*4)*id}%;" class=" decrease-height  absolute  z-[{id+10}] w-full group flex  cursor-pointer">
       <button on:click={
           function(){
      //  codeColorBase=codeColor
      //  codeColor="copy text";
      //  navigator.clipboard.writeText(String(codeColor));
      //  setTimeout(()=>codeColor=codeColorBase,500)
       }
       } type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]">
         #{codeColor} 
       </button>
        
      </div>
     {/each} 
      {/if}
    </div>
      <div class="flex container--btn__pallete container--main__btn justify-between w-full gap-3 items-center my-[1rem]">
        <form use:enhance action="?/addColor" method="post">
          <input type="hidden" name="hidden" id="hidden" value="{JSON.stringify(color)}">
          <button on:click class:like={color.isLike} on:click formaction="?/addColor" type="submit" class="btn btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__{color.id} btn-custom" data-id="${color.id}" data-liked="false">
            <span>
               <svg class="{!loading ? `block` : `hidden`} stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]">
                 <use href="./icon.svg#heart3"></use></svg>
             </span>
             <div  class="{loading ? `block` : `hidden`} w-8 h-8 rounded-full animate-spin border-2 border-b-white border-t-white border-r-transparent  border-l-transparent"></div>
            <span id="like-count" class="like-counter">{color.likes}</span>
          </button>
        </form>
        <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">{formatTimeDifference(new Date(color.timer),new Date())}</time>
      </div>
</div>


<style>
  .card{
    opacity:0;
    transition:.3s;
    transform: translateY(3rem);
  }
  .card-animated{
    animation:card .3s ease-in;
  }
  .like{
    background:rgba(0,0,0,.1);
  }
  .animated-translate-y{
    transition:.3s;
    animation:translate-y .4s ease-in forwards;
  }
  .decrease-height{
    /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    animation:dc-height .5s ease-in   forwards;
    /* transform-origin:bottom; */
    transition:height .3s;
  }
  @keyframes dc-height{
      0%{
         scale:1 1.5;
         opacity:.9;
      }
     
      100%{
        scale:1;
      }
  }
 
  @keyframes card{
    0%{
      transform: translate(3rem);
    }
    100%{
      transform: translateY(0);
    }
  }
</style>
