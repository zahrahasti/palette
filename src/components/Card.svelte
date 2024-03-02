<script lang="ts">
	 import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
let cardContainer:HTMLElement
 const cardInformation={
    codeColorBase:"",
    loading:false
 }
 let {codeColorBase,loading}=cardInformation;
// let cardContainer:HTMLElement, 
//    codeColorBase:string;
let canvas:HTMLCanvasElement,colorWrapper:HTMLElement;
export function downloadPalette(containerPaletteColors:HTMLElement) {
    // Create a new canvas element
     const ctx:CanvasRenderingContext2D  = canvas.getContext('2d');
  
    // Set canvas dimensions based on the color palette size
    const paletteWidth = containerPaletteColors.offsetWidth;
    const paletteHeight = containerPaletteColors.offsetHeight;
    canvas.width = paletteWidth;
    canvas.height = paletteHeight;
  
    // Get the colors from the color palette
    const colorBoxes = containerPaletteColors.getElementsByClassName('container-color');
    console.log(colorBoxes);
    // Loop through the color boxes and draw them on the canvas
    let yPos = 0;
    for (let i = 0; i < colorBoxes.length; i++) {
      const colorBox = colorBoxes[i] as HTMLElement;
      const color = colorBox.style.backgroundColor;
       const boxHeight = colorBox.offsetHeight;
      
      // Draw the color box on the canvas
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, paletteWidth, boxHeight);

      // Increment the y-position for the next color box
      yPos += boxHeight;
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
   
 
// let loading:boolean=false;;
class CardObserver {
  _cardContainer;
  _threshold=.5
  _beforeAnimatedClassName="before-animated"
  _AnimatedClassName="card-animated";
    constructor(cardContainer:HTMLElement) {
        this._cardContainer=cardContainer
        this.initIntersectionObserver();
    }

    initIntersectionObserver() {
      onMount(()=>{
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.intersectionRatio >= 0.5) {
                    const card = entry.target;
                    this.AnimatedCard(card);
                }
            }
        }, {
            threshold: this._threshold
        });

        observer.observe(cardContainer);
    }
      )
    }
   AnimatedCard(card:Element){
      card.classList.remove(this._beforeAnimatedClassName);
      card.classList.add(this._AnimatedClassName)
   }
}
 const card=new CardObserver(cardContainer);
 export let color:{isLike:boolean,colors:string[]};
</script>
<canvas bind:this={canvas} class="hidden"></canvas>
<!-- svelte-ignore a11y-no-static-CardContainer-interactions -->
<div data-color={color} bind:this={cardContainer} class="relative before-animated animated-translate-y w-full scale-[.85] sm:scale-100">
    <div bind:this={colorWrapper}  class="w-full relative  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white   aspect-square bottom-0 rounded-[1rem] overflow-hidden  pallete--color__1">
      {#if color}
      {#each color.colors as codeColor , id}
      <div style="animation-delay:{(id+1)*.05}s; background-color:{codeColor};height:{100-(10+(id)*4)*id}%;" class="container-color decrease-height  absolute  z-[{id+10}] w-full group flex  cursor-pointer">
       <button on:click={
           function(){
       codeColorBase=codeColor
       codeColor="copy text";
       navigator.clipboard.writeText(String(codeColor));
       setTimeout(()=>codeColor=codeColorBase,500)
       }
       } type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]">
         {codeColor} 
       </button>
        
      </div>
     {/each} 
      {/if}
    </div>
      <div class="flex container--btn__pallete container--main__btn justify-between w-full gap-3 items-center my-[1rem]">
        <form on:submit|preventDefault={()=>{
           if(color.isLike) color.isLike=false
           else color.isLike=true
           
        }} use:enhance action="{color.isLike ? `?/addColor`:`?/removeColor`}" method="post">
          <input type="hidden" name="hidden" id="hidden" value="{JSON.stringify(color)}">
          <button    formaction="{color.isLike ? `?/addColor`:`?/removeColor`}" type="submit" class="{color.isLike? `bg-gray-200`:``} btn btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem]  btn-custom">
            <span>
               <svg class="{!loading ? `block` : `hidden`} stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]">
                 <use href="./icon.svg#heart3"></use></svg>
             </span>
             <span id="like-count" class="like-counter">Like</span>
          </button>
        </form>
      <button 
      type="button" 
      class="btn text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem]  btn-custom"
      on:click={()=>downloadPalette(colorWrapper)}>Download</button>
      </div>
</div>


<style>
  .before-animated{
    opacity:0;
    transition:.3s;
    transform: translateY(3rem);
  }
  .card-animated{
    animation:card .5s ease-in;
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
