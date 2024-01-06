
<script lang="ts">
    import { goto } from '$app/navigation';
    let selectedColor:string;
  import { createEventDispatcher } from 'svelte';
 const dispatch=createEventDispatcher()
 type color={name:string;id:string}
export let colors:color[];
  function handleClicked(color:string){
     console.log(color);
    dispatch("selectedColor",{color})
 }
 console.log(colors);
let copyColors=colors;
let listColor:HTMLElement,listColorExist:boolean=false;
let showButtonTag:boolean=false;
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
let filterColor:boolean=false;
  function filterSearchText(e:Event){
    const text=(e?.target as HTMLInputElement).value.toLowerCase();
    const patternRegex = new RegExp(`^${text}$`, "i");
    const colorsNames=colors.map(color=>color.name)
     if(colorsNames.indexOf(text)>=0){
        
        colors=colors.filter(color=>patternRegex.test(color.name.toLowerCase()))
        filterColor=true;
    }
     else colors=copyColors
  }
 function checkValue(e:Event){
    e.preventDefault();
    if(filterColor){
       
        
        const input=(e?.target as HTMLFormElement).search! as HTMLInputElement || "";
        const [color]=copyColors.filter(color=>color.name===input.value);
        goto(`./${input.value}${color.id}`);
        resetListColor(input.value)
        // Reset input value & colors objects
        input.value="";
        colors=copyColors;
        //
      
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
 
<header  class="header flex items-center justify-between w-full bg-white fixed left-1/2  -translate-x-1/2 z-[2] py-[.8rem]  ">
    <!-- <nav class="nav flex justify-between   items-center  border-b-[.1rem] pb-[1rem] border-gray-50"> -->
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
                    
                        <button class="ml-2" on:click={()=>{
                            inputDetail=defalultInputDetail;
                            showButtonTag=false;
                            goto("./")
                            }}>
                           <svg class="w-4 aspect-square text-gray-400">
                              <use href="./icon.svg#delete"></use>
                           </svg>
                        </button>  
                    </div>
                    {/if}
               
                    <form on:submit={checkValue} class="relative {listColor ? ``:`pl-[3rem] focus:pl-[1.2rem]`} focus:bg-blue-600">
                        <input 
                         on:input={filterSearchText}
                       on:focus={
                          ()=>{
                              listColor.style.display="block";
                              listColorExist=true;
                          }
                       } type="search" 
                           aria-label="search bar"
                           id="search"
                          class="w-full {showButtonTag ? `pl-[10rem] `:`pl-[3rem] focus:pl-[1.2rem]`} relative z-[3] py-[.8rem] text-gray-800 rounded-[2rem] border-[.1rem] border-gray-200   duration-100   outline-none "
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
                        <div class="flex flex-wrap items-center gap-2 py-[1rem] text-[1.2rem]">
                            {#each colors as color}
                              <button on:click={(e)=>{
                                e.preventDefault()
                                e.stopPropagation() //not sure about this
                                goto(`./${color.name}`)
                                 inputDetail=optionInputDetail
                                  resetListColor(color.name)
                                }}   class="small-color capitalize">
                                <span style="display: block; background-color: {color.name}" class="block w-[1.5rem] h-[1.5rem] shadow-sm bg-blue-400 rounded-full"></span>
                                <span>{color.name}</span>
                              </button>
                               {/each}
                         </div>
                     </div>
                    </div>
                </div>
            </div>
         </nav>

        <div class="nav--section__3 pr-[2.5rem] min-w-[5rem] max-w-[5rem] md:max-w-[28rem] md:min-w-[28rem] xl:max-w-[32rem] xl:min-w-[32rem] relative flex items-center justify-between gap-4">
            <a href="../file.htm"
                class="btn-chrome hidden px-[1.2rem] h-full py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[1rem] border-[.1rem] border-gray-200">
                <img src="./chrome.png" alt="" class="w-[1.8rem]  h-[1.8rem]">
                <span>Add to Chrome</span>
            </a>
            <button type="button"
                on:click={()=>{showNavList=!showNavList}}
                class="btn btn-nav-list  flex self-end items-end justify-end btn--open__menu p-3  btn--link__page   rounded-full transition-all duration-300 hover:bg-gray-50"
                data-content="open">
                <svg class="w-[2rem] h-[2rem] text-gray-600">
                    <use href="./icon.svg#bar"></use>
                </svg>
            </button>

            <ul
                class="absolute text-[1.4rem] {showNavList ? `block`: `hidden`}  menu bg-white min-w-[12rem] md:min-w-[15rem] rounded-sm shadow-sm px-[.5rem] py-[1.2rem] top-[5rem] right-[2rem] border-[.1rem] border-gray-50">
                <li class="py-[.5rem] px-[1rem] active rounded-[.5rem]">
                    <a href="./">
                        palettes
                    </a>
                </li>
                <li class="py-[.5rem] px-[1rem] rounded-[.5rem]">
                    <a href="./create">
                      create
                    </a>
                </li>
                <li class="py-[.5rem] px-[1rem] rounded-[.5rem]">
                    <a href="./collection">
                        collection
                    </a>
                </li>
            </ul>

        </div>
    <!-- </nav> -->
</header>