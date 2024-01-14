 <script lang="ts">
  let canvas:HTMLCanvasElement
    	import { formatTimeDifference } from "$lib/utils";
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
  function downloadPalette() {
    // Create a new canvas element
    const ctx = canvas.getContext('2d')!;
  
    // Set canvas dimensions based on the color palette size
    const paletteWidth =parentEl.offsetWidth;
    const paletteHeight=parentEl.offsetHeight;
    console.log(paletteWidth,paletteHeight);
    canvas.width = paletteWidth;
    canvas.height = paletteHeight;
  
    // Get the colors from the color palette
    const colorBoxes =color.colors.map(color=>`#`+color);
    console.log("color Boxe",colorBoxes);  
    // Loop through the color boxes and draw them on the canvas
    let yPos = 0;
    for (let i = 0; i < colorBoxes.length; i++) {
;
      const color = colorBoxes[i];
       const boxHeight =containerColor.offsetHeight;
       const currentHeight=(paletteWidth-boxHeight*4)/4;
       console.log(currentHeight*4);
       console.log("box height",paletteWidth,boxHeight*4);
       console.log("How much we are differnt??",paletteWidth-boxHeight*4);
      // Draw the color box on the canvas
      ctx.fillStyle = color;
      ctx.fillRect(0, yPos, paletteWidth,paletteWidth/4);
  
      // Increment the y-position for the next color box
      yPos += paletteWidth/4
     }
  
    // Convert the canvas content to a data URL
    const dataUrl = canvas.toDataURL('image/png');
  
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'color-palette.png'; // Set the desired file name
  
    // Programmatically click the link to trigger the download
    link.click();
  }
  import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
 
     const dispatch = createEventDispatcher();

  function handleButtonClick(e:Event,color:color<string,number>) {
       e.preventDefault()
       //  event.preventDefault(); // Prevent the default form submission
       // Here you can perform any additional logic if needed
       dispatch('customsubmit', {form:e.target,color /* pass any necessary data */ });
 }

  let parentEl:HTMLElement,containerColor:HTMLElement;
 let cliked:string;
 </script>
<canvas style="width:100px;" class="hidden w-[300px]" bind:this={canvas}></canvas>
<div  class="relative w-full scale-[.85] sm:scale-100">
    <div bind:this={parentEl} class="pallete--color  grid grid-rows-16 w-full  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white aspect-square top-0 rounded-[1rem] overflow-hidden  pallete--color__1" data-id="${color.id}">
        {#each color.colors as codeColor , id}
        <div bind:this={containerColor} style="background:#{codeColor};"  class="bg-[#{codeColor}] container-color group row-[span_{5 + ((+id+1)-1)*-1}_/_span_16]  flex  cursor-pointer">
         <button   type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]">
           #{codeColor}
           <!-- {containerColor.offsetHeight} -->
         </button>
        </div>
       {/each} 
    </div>
    <div class="flex container--btn__pallete container--main__btn justify-between  mt-9 w-full gap-3 items-center my-[1rem]">
        <form method="post" on:submit|preventDefault={function(e){handleButtonClick(e,color)}}>
          <input type="hidden" name="data" value="{color.id}">
          <button on:click class:like={color.isLike} on:click type="submit" class="btn btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__{color.id} btn-custom" data-id="${color.id}" data-liked="false">
            <span>
               <svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]">
                 <use href="./icon.svg#heart3"></use>
                </svg>
            </span>
            <span id="like-count" class="like-counter">{color.likes}</span>
          </button>
        </form>
         <button on:click={downloadPalette} type="button" class="btn-container__palette  text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-custom">
          <span>
            <svg class="w-[2rem] h-[2rem]">
              <use href="./icon.svg#download"></use>
            </svg>
          </span>
          <span>Image</span>
        </button>
        <button type="button" class="btn-container__palette btn-link text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-custom">
          <span>
            <svg class="w-[2rem] h-[2rem]">
              <use href="./icon.svg#link"></use>
            </svg>
          </span>
        <span>Link</span>
      </button>
        <!-- <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">{formatTimeDifference(new Date(color.timer),new Date())}</time> -->
    </div>
<div>
<div class="flex justify-between cursor-pointer items-center py-[1rem] border-b-[.1rem] border-b-gray-100">
{#each color.colors as baseColor}
    <div class="w-full">
      <span style="background-color: #{baseColor};" class="block mx-auto w-[3.5rem] h-[3.5rem] rounded-full bg-red-200"></span>
    </div>
{/each}
</div>
       <div class="flex w-full justify-between  items-center text-[1.5rem] sm:text-[1.6rem] py-[2rem] border-b-[.1rem] border-b-gray-100">
       {#each color.colors as baseColor}
             <button 
                  on:click={function(){
                        navigator.clipboard.writeText(String(baseColor));
                         const copyColor=baseColor;
                         baseColor="copied"
                         
                         setTimeout(()=>baseColor=copyColor,1000)
                         }} 
                   
                     type="button"
                     class="w-full px-3 rounded-5 btn btn--copy__color group-hover:opacity-100    duration-150 rounded-t-md">
   
                     <!-- <span class="block w-max"> -->
                       {baseColor}
                     <!-- </span> -->
                   
</button>

        {/each}
       </div>
</div>
</div>