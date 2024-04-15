<script lang="ts">
  import { goto } from '$app/navigation';
  import { v4 } from 'uuid';
  import { page } from '$app/stores';
  import { createEventDispatcher } from 'svelte';
  let selectedColor:string,inputSearch:HTMLInputElement;
  export let baseColors:string[]
  const dispatch=createEventDispatcher()
  let listColor:HTMLElement,listColorExist=false;
  let showButtonTag=false;
const defalultInputDetail={placeholderText:"Search Palette",padding:1.2};
const optionInputDetail={placeholderText:"Add tag",padding:1.2};

let inputDetail:{placeholderText:string,padding:number}=defalultInputDetail;
function handleBodyClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest("nav")) {
        listColor.style.display="none"
        listColorExist=false
    }
  }
  const copyBaseColor=baseColors;

let filterColor:boolean=false;
function filterSearchText(e:Event){
    const text=(e?.target as HTMLInputElement).value.toLowerCase();
     if(text.length > 0){
       baseColors= baseColors.filter(color=>color.toLowerCase().startsWith(text))
       filterColor=true;
    }
     else baseColors= copyBaseColor
  }

 function checkValue(e:Event){
    e.preventDefault();
    if(filterColor){
        const input=(e?.target as HTMLFormElement).search! as HTMLInputElement || "";
        console.log(input);
        const [color]=copyBaseColor.filter(color=>color.toLowerCase().startsWith(input.value));
         
        dispatch("handleColor",{color})
        goto("/")
        console.log("remove color");
        selectedColor=color
         showButtonTag=true;         
         inputDetail=optionInputDetail
         inputSearch.value=""
        resetListColor(color)
        
    }
 }
 function resetListColor(value:string){
    showButtonTag=true;
    selectedColor=value
    listColor.style.display="none"
    listColorExist=false
 }
 let showNavList:boolean=false
</script>
<svelte:body lang="ts" on:click={handleBodyClick}/>
 
<header  class="flex items-center top-0 justify-between w-full bg-white fixed   left-1/2  -translate-x-1/2 z-[100] py-[.8rem]  ">
         <figure class="min-w-[5rem] max-w-[5rem] sm:max-w-[24rem] sm:min-w-[24rem] pl-[2.5rem]  flex gap-[1rem]  items-center">
            <img src="./logo.png" alt="" class="w-[3.2rem]">
            <strong class="font-semibold hidden sm:inline-block text-[2rem]">Color Hunt</strong>
        </figure> 
         <nav class="w-full nav">
            <div class="parent px-[2.5rem] w-full  relative">
                <div class="h-full relative rounded-[2rem] ">
                    {#if showButtonTag}
                    <div class="z-[140]  rounded-[4rem] px-4 absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 flex justify-between items-center gap-1">
                        <div class="flex  pr-3 py-2 gap-2 items-center border-r-[1px] border-r-gray-200">
                            <span style="background-color: {selectedColor};" class="block w-5 aspect-square rounded-3xl"></span>
                            <span>{selectedColor}</span>
                        </div>
                    
                        <button on:click={()=>{
                            selectedColor=""
                             showButtonTag=false
                             inputDetail=defalultInputDetail;
                             goto("/")
                            dispatch("delete",{selectedColor})
                        }} class="ml-2" on:click={()=>{
                             
                            }}>
                           <svg class="w-4 aspect-square text-gray-400">
                              <use href="./icon.svg#delete"></use>
                           </svg>
                        </button>  
                    </div>
                    {/if}
               
                    <form on:submit={checkValue} class="relative {listColor ? ``:`pl-[3rem] focus:pl-[1.2rem]`} focus:bg-blue-600">
                        <input 
                        bind:this={inputSearch}
                         on:input={filterSearchText}
                         on:focus={
                          ()=>{
                              listColor.style.display="block";
                              listColorExist=true;
                          }
                       } type="search" 
                           aria-label="search bar"
                           id="search"
                          class="w-full {showButtonTag ? `pl-[12rem] `:`pl-[3rem] focus:pl-[1.2rem]`} relative z-[3] py-[.8rem] text-gray-800 rounded-[2rem] border-[.1rem] border-gray-200   duration-100   outline-none "
                          placeholder="{inputDetail.placeholderText}">
                    </form>
                    
                    <div class="absolute color--template w-full h-full top-0">
                        <svg
                            class="{listColorExist ? `hidden` : `block`} text-gray-600 z-[4] left-[.8rem] w-[1.8rem] h-[1.8rem] top-1/2 -translate-y-1/2 absolute">
                            <use href="./icon.svg#search"></use>
                        </svg>
                         
                        <div bind:this={listColor}
                        class="bg-white  top-[3.5rem] hidden duration-200  absolute p-[2rem]  w-full  rounded-b-2xl   border-gray-100 border-[.1rem] border-t-transparent ">
                        <p class="font-semibold mt-5">Colors</p>
                        <div class="flex flex-wrap items-center gap-5 py-[1rem] text-[1.2rem]">
                            {#each baseColors as color}
                              <button  on:click={(e)=>{
                                 dispatch("handleColor",{color})
                                 goto("/")
                                 selectedColor=color
                                 showButtonTag=true;
                                 
                                 inputDetail=optionInputDetail
                                }}   class="capitalize flex gap-2 items-center">
                                <span style="display: block; background-color:{color}" class="block w-[2rem] h-[2rem] border-[1px] border-gray-100 shadow-sm rounded-full"></span>
                                {color}
                              </button>
                               {/each}
                         </div>
                     </div>
                    </div>
                </div>
            </div>
         </nav>

             <a href="javascript:void(0)"
                class="btn-chrome mr-5 min-w-max hidden px-[1.2rem] h-full py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[1rem] border-[.1rem] border-gray-200">
                <img src="./chrome.png" alt="" class="w-[1.8rem]  h-[1.8rem]">
                <span>Add to Chrome</span>
            </a>         
</header>