<script lang="ts">
      import { invalidateAll } from '$app/navigation'
	import { json } from "@sveltejs/kit";
    import "../app.css";
	import Card from "../app/Card.svelte";
    import { onMount } from 'svelte';
	import LikedCardSamll from '../app/LikedCardSamll.svelte';
    export let data;
    
type color<T,U>= {
    "name": T,
    "id": T,
    "color_1": T,
    "color_2":T,
    "color_3": T,
    "color_4":T,
    "timer":T,
    "likes": U,
    "popular": boolean
}
  let colors:color<string,number>[] | undefined=data.colors?.filter(color=>color.popular===true);
  console.log(colors);
  console.log(colors);
     let isAdding=false;
     async function updateDataPalette(e:CustomEvent){
        let popular=e.detail.color.popular;
        const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
      if(!popular){
        const res=await fetch(form.action,{
            method:"POST",
            body:formData,         
         })
       popular=true;
      
       console.log(colors);
    }
        else {
            const res=await fetch(form.action,{
            method:"DELETE",
            body:formData,         
        })  
        }
          form.reset()
          await invalidateAll()
 
     }
console.log(data.colors);
  
 
</script>
<slot/>
<header class="header w-full bg-white fixed left-1/2  -translate-x-1/2 z-[2] py-[.8rem]  ">
    <nav class="nav flex justify-between   items-center  border-b-[.1rem] pb-[1rem] border-gray-50">
        <figure class="min-w-[5rem] max-w-[5rem] sm:max-w-[24rem] sm:min-w-[24rem] pl-[2.5rem]  flex gap-[1rem]  items-center">
            <img src="./img/Untitled-1.png" alt="" class="w-[3.2rem]">
            <strong class="font-semibold hidden sm:inline-block text-[2rem]">Color Hunt</strong>
        </figure>

        <div class="nav--section__2 px-[2.5rem] w-full  relative">
            <div class="h-full relative rounded-[2rem] ">
                <input type="search" 
                     aria-label="search bar"
                    class="w-full pl-[3rem] relative z-[3] py-[.8rem] text-gray-800  focus:pl-[1.2rem] rounded-[2rem] border-[.1rem] border-gray-200   duration-100   outline-none "
                    placeholder="Search Palletes">
                <div class="absolute color--template w-full h-full top-0">
                    <svg
                        class="text-gray-600 z-[4] left-[.8rem] w-[1.8rem] h-[1.8rem] top-1/2 -translate-y-1/2 absolute">
                        <use href="./img/icon.svg#search"></use>
                    </svg>

                    <div
                        class="color--template__items bg-white hidden duration-200  absolute p-[2rem]  w-full  rounded-b-2xl   border-gray-100 border-[.1rem] border-t-transparent top-[140%] ">
                        <p class="font-semibold">Colors</p>
                        <div class="flex flex-wrap items-center gap-2 py-[1rem] text-[1.2rem]">
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-blue-400 rounded-full"></span><span>Blue</span>
                            </div>


                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-green-600 rounded-full"></span><span>Green</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-red-600 rounded-full"></span><span>red</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-yellow-400 rounded-full"></span><span>Yellow</span>
                            </div>

                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-red-800 rounded-full"></span><span>Brown</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-orange-600 rounded-full"></span><span>Orange</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-purple-600 rounded-full"></span><span>purple</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-red-300 rounded-full"></span><span>pink</span>
                            </div>
                            <div class="small-color">
                                <span
                                    class="block w-[1.5rem] h-[1.5rem] shadow-sm  bg-gray-300 rounded-full"></span><span>grey</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="nav--section__3 pr-[2.5rem] min-w-[5rem] max-w-[5rem] md:max-w-[28rem] md:min-w-[28rem] xl:max-w-[32rem] xl:min-w-[32rem] relative flex items-center justify-between gap-4">
            <a href="../file.htm"
                class="btn-chrome hidden px-[1.2rem] h-full py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[1rem] border-[.1rem] border-gray-200">
                <img src="./img/chrome.png" alt="" class="w-[1.8rem]  h-[1.8rem]">
                <span>Add to Chrome</span>
            </a>
            <button type="button"
                class="btn  flex self-end items-end justify-end btn--open__menu p-3  btn--link__page   rounded-full transition-all duration-300 hover:bg-gray-50"
                data-content="open">
                <svg class="w-[2rem] h-[2rem] text-gray-600">
                    <use href="./img/icon.svg#bar"></use>
                </svg>
            </button>

            <ul
                class="absolute text-[1.4rem] hidden   menu bg-white min-w-[12rem] md:min-w-[15rem] rounded-sm shadow-sm px-[.5rem] py-[1.2rem] top-[5rem] right-[2rem] border-[.1rem] border-gray-50">
                <li class="py-[.5rem] px-[1rem] active rounded-[.8rem]"><a href="#">palettes</a></li>
                <li class="py-[.5rem] px-[1rem] rounded-[.8rem]"><a href="#">create</a></li>
                <li class="py-[.5rem] px-[1rem] rounded-[.8rem]"><a href="#">collection</a></li>
            </ul>

        </div>
    </nav>
</header>

<main class="main min-h-full flex justify-between ">
    <section
        class="main--section__1 pl-[2.5rem] z-50  min-w-[5rem] max-w-[5rem] sm:max-w-[24rem] sm:min-w-[24rem] absolute sm:sticky    h-[85vh] top-[8rem] mt-[8rem] overflow-y-scroll">
        <menu
            class="control--pallete border-t-[.1rem] border-t-[#f8f8f8] sm:border-t-0 fixed sm:relative left-1/2 bottom-0  -translate-x-1/2 gap-[.5rem] w-full flex sm:flex-col items-center justify-around p-[.5rem] bg-red-400 sm:p-[1rem]  sm:items-start  bg-white z-10 text-gray-800 text-[1.6rem]">
            <li class="active new btn--link__page w-full mb-[.5rem]   rounded-[.8rem] sm:rounded-[1rem]"
                data-btn="btn" data-content="new">
                <a href="#"
                    class="flex  flex-col sm:flex-row gap-[.8rem] px-[.8rem]  py-[1rem] text-[1.7rem] items-center">
                    <span>
                        <svg
                            class="w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] sm:h-[2.2rem] stroke-[1rem] stroke-black text-transparent">
                            <use href="./img/icon.svg#star2"></use>
                        </svg>
                    </span>
                    <span>New</span>
                </a>
            </li>
            <li class=" btn--link__page w-full  mb-[.5rem]   rounded-[.8rem] sm:rounded-[1rem]" data-btn="btn"
                data-content="popular">
                <a href="#"
                    class="flex  flex-col sm:flex-row  gap-[.8rem]  px-[.8rem]  py-[1rem] text-[1.7rem] items-center">
                    <span>
                        <svg
                            class="w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] sm:h-[2.2rem] stroke-[.1rem] stroke-black text-transparent">
                            <use href="./img/icon.svg#moon"></use>
                        </svg>
                    </span>
                    <span>Popular</span>
                </a>
            </li>
            <li class=" btn--link__page w-full mb-[.5rem] rounded-[.8rem] sm:rounded-[1rem]" data-btn="btn"
                data-content="collection">
                <a href="#"
                    class="flex  flex-col sm:flex-row  gap-[.8rem]  px-[.8rem]  py-[1rem] text-[1.7rem] items-center">
                    <span>
                        <svg class="w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] sm:h-[2.2rem]">
                            <use href="./img/icon.svg#random3"></use>
                        </svg>
                    </span>
                    <span>Collection</span>
                </a>
            </li>
            <li class=" btn--link__page   mb-[.5rem] w-full  rounded-[.8rem] sm:rounded-[1rem]" data-btn="btn"
                data-content="create">
                <a href="#"
                    class="flex  flex-col sm:flex-row  gap-[.5rem] md:gap-[1rem] px-[.8rem]  py-[1rem] text-[1.7rem] items-center">
                    <span>
                        <svg
                            class="text-transparent w-[2.8rem] h-[2.8rem] sm:w-[2.2rem] sm:h-[2.2rem] stroke-[1rem] text-black stroke-black ">
                            <use href="./img/icon.svg#heart3"></use>
                        </svg>
                    </span>
                    <span>Create</span>
                </a>
            </li>
        </menu>

        <ul class="control--pallete__color p-[1rem] hidden sm:block ">
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
            <li class="py-4 px-[.8rem] text-gray-600 text-[1.4rem]"><a href="#">link</a></li>
        </ul>
    </section>
       
   

    <div class="container-main__palettes w-full  mt-[8rem] px-[2.5rem]">
        <div class="h-auto w-full sm:w-1/2 md:w-3/5 lg:w-1/3 text-[1.4rem] container--selected__palette flex items-center justify-center flex-col mx-auto"
            data-active="0">

        </div>
        <!-- Container Pallete in deffernt places -->
        <section
            class="container--color__palette mb-[8rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
            data-active="1">
        {#each data.colors as color}
              <Card on:customsubmit={updateDataPalette}  {color}/>
        {/each}
           
       
        </section>
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
                {#if colors}
                {#each colors as color}
                 <LikedCardSamll {color} />
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