<script lang="ts">
  import { navigating } from '$app/stores';
      import { invalidateAll } from '$app/navigation'
	import { removeUpdata } from '$lib';
    import "../app.css";
	import Header from '../app/Header.svelte';
// 	import Card from "../app/Card.svelte";
//     import { onMount } from 'svelte';
	import LikedCardSamll from '../app/LikedCardSamll.svelte';
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
let res;
export const colors=data.colors?.map(({name,id})=>{
    return {name,id}
    
})
 
 
const listItems:{[prop:string]:string}[]=[
    {
      icon:"star2",
      text:"new",
      stroke:"1rem",
      link:""
    },
    {
      icon:"moon",
      text:"popular",
      stroke:".5rem",
      link:"./popular"
     
    },
    {
      icon:"random3",
      text:"random",
      stroke:".7rem",
      link:"./random"
    },
    {
      icon:"heart3",
      text:"collection",
      stroke:"1rem",
      link:"./collection"
    }
]
async function updateDataPalette(e:CustomEvent){
       let color=e.detail.color;
        let isLike=e.detail.color.isLike;
 
        
        const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
        console.log(formData);
      if(!isLike){
        const res=await fetch(form.action,{
            method:"PUT",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }
         })
       isLike=true;
   
    }
        else {
            const   res=await fetch(form.action,{
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
  function toggleActiveClasses(e:CustomEvent){
    //  console.log(e.target);
    const links=document.querySelectorAll(".active")!
    //  console.log(e.currentTarget);
    const {target,currentTarget}=e;
    if(target===currentTarget)return;
    links.forEach((link)=>link.classList.remove("active"));
     target?.closest(".link-page")?.classList.add("active")
  } 
   </script>
{#if colors!==undefined}
    
<Header {colors} />
{/if}
<main class="main min-h-full flex justify-between ">
    <section
        class="main--section__1 pl-[2.5rem] z-50  min-w-[5rem] max-w-[5rem] sm:max-w-[24rem] sm:min-w-[24rem] absolute sm:sticky    h-[85vh] top-[8rem] mt-[8rem] overflow-y-scroll">
        <menu
            on:click={toggleActiveClasses}
            class="bg-white control--pallete border-t-[.1rem] border-t-[#f8f8f8] sm:border-t-0 fixed sm:relative left-1/2 bottom-0  -translate-x-1/2 gap-[.5rem] w-full flex sm:flex-col items-center justify-around p-[.5rem] bg-red-400 sm:p-[1rem]  sm:items-start   bg-wh ite z-10 text-gray-800 text-[1.6rem]">
           
            {#each listItems as item}
            <li  class="link-page w-full mb-[.5rem] rounded-[.8rem] sm:rounded-[1rem]"
            data-btn="btn" data-content="new">
            <a href="/{item.link}"
                class="flex  flex-col sm:flex-row gap-[.8rem] px-[.8rem]  py-[1rem] text-[1.7rem] items-center">
                <span>
                    <svg
                        class="w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] stroke-[{item.stroke}] sm:h-[2.2rem]  stroke-black text-transparent">
                        <use href="icon.svg#{item.icon}"></use>
                    </svg>
                </span>
                <span>{item.text}</span>
            </a>
        </li>
            {/each}
           
        </menu>

        <ul class="control--pallete__color p-[1rem] hidden sm:block ">
            
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
       
        </ul>
    </section>
       
   

    <div class="container-main__palettes w-full  mt-[8rem] px-[2.5rem]">
        <div class="h-auto w-full sm:w-1/2 md:w-3/5 lg:w-1/3 text-[1.4rem] container--selected__palette flex items-center justify-center flex-col mx-auto"
            data-active="0">
      
        </div>
      
         <slot/>
        <section
            class="container--color__palette mb-[8rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--popular hide w-full justify-between gap-[1rem]"
            data-active="1">
          
        </section>

        <section
            class="container--color__palette mx-auto sm:mx-0 relative  w-full  mb-[10rem] sm:mb-0 h-max section--collection hide    active-page gap-[1rem]"
            data-active="1">
            <div
                class="flex mx-auto sm:mx-0 w-[70%] h-max mb-[3.5rem] sm:mb-[5rem] py-[.5rem] border-b-[.1rem] border-b-gray-100 justify-between">
                <h3 class="font-semibold text-[1.8rem] mb-[1rem]">My Collection</h3>
                <p class="text-gray-500 text-[1.4rem]">
                    <span class="counter-palette mx-1 inline-block">0</span>palette
                </p>
            </div>
            <section
                class="flex container--empty-palette items-center flex-col gap-[.5rem] mx-auto sm:mx-0  w-[70%] h-max">
                <svg
                    class="text-transparent w-[5rem] h-[5rem] sm:w-[5rem] sm:h-[5rem] stroke-[.7rem] text-black stroke-gray-400 ">
                    <use href="./img/icon.svg#heart3"></use>
                </svg>
                <h3 class="font-semibold text-[1.8rem] mb-[1rem]">No palettes in collectio</h3>
                <p class="text-[1.4rem] text-gray-900">You haven't liked anything yet!</p>
            </section>
            <section
                class="container--palette__liked grid gap-[1rem] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max">
              
            </section>
        </section>


        <section class="container--color__palette mb-[10rem] sm:mb-0 min-h-[85vh] hide section--create w-full  top-[8rem]  grid gap-[1.5rem] justify-center z-1  items-center" data-active="1">
            <h3 class="text-center font-bold">New Color Palette</h3>
            <p class="text-center">Create a new palette and contribute to Color Hunt’s collection</p>
            <div class="flex  items-center relative justify-center">
                <div 
                    class="container-user-selected grid grid-rows-4 gap-1.2fr 2fr 3fr 4fr min-w-[30rem]  min-h-[30rem] text-white  top-0 rounded-[1rem] overflow-hidden  pallete--color__1"
                    data-id="1">
                    <div class="user--selected relative cursor-pointer bg-[#BBBBBB]" data-color="1"></div>
                    <div class="user--selected relative cursor-pointer bg-[#CCCCCC]" data-color="2"></div>
                    <div class="user--selected relative cursor-pointer bg-[#DDDDDD]" data-color="3"></div>
                    <div class="user--selected relative cursor-pointer bg-[#EEEEEE]" data-color="4"></div>
                    <div class="container--picker absolute top-0 right-0"></div>
                </div>
            </div>
            <button type="button" class="btn btn-custom mx-auto w-max btn--submit__palette">
                <svg class="w-[2rem] mr-1 h-[2rem]">
                    <use href="./img/icon.svg#tel"></use>
                </svg>
                Submit Palette
            </button>
        </section>

    </div>


    <aside class="main--section__3 pr-[2.5rem] md:block hidden min-w-[5rem] max-w-[5rem] md:max-w-[28rem] md:min-w-[28rem] xl:max-w-[32rem] xl:min-w-[32rem] overflow-y-scroll sticky h-[80vh] top-[8rem]">
        <div class=" border-b-[.1rem] pb-[2rem] border-gray-100">
            <h3 class="font-semibold text-[1.8rem]">Color Palettes for <br> Designers and Artists</h3>
            <p class="text-[1.3rem] mt-[.5rem]">Discover the newest hand-picked <br> palettes of Color Hunt</p>
        </div>
         <section class="my-[1.5rem]">
            <h3 class="font-semibold text-[1.8rem] mb-[1rem]">Collection</h3>
            
<div class="collection--user__love h-[30rem] flex flex-wrap gap-[.5rem]">
        
{#if data.filterColors}
  {#each data.filterColors as color}
   <LikedCardSamll on:customsubmit={updateDataPalette} {color} />
  {/each}     
{/if}   

</div>

         </section>
    </aside>
</main>
 <button class="scrollToTop grid place-content-center animate-[scroll_.4s_ease_forwards] fixed mb-[8rem] sm:mb-0 opacity-0 z-50  translate-y-full right-5 bg-blue-500 rounded-full p-2 sm:p-3">
     <svg class="w-14 aspect-square sm:w-16 text-white -rotate-90">
         <use href="./img/icon.svg#upArrow"></use>
     </svg>
 </button>