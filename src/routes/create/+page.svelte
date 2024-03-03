
<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto, preloadCode } from "$app/navigation";
    let lastPickerColor:string|undefined;
    function userSelectedInput(e:Event){
          //Getting the element
          const target=e.target as HTMLDivElement;
          const id:number|undefined=+target.dataset.index!;
          console.log(id);
          const inputColors=document.querySelectorAll("input[type=color]") as NodeListOf<HTMLInputElement>
       
         inputColors[id].click()
         inputColors[id].addEventListener("input",()=> target.style.backgroundColor=inputColors[id].value)  
    }
    
    let  pickerEl:HTMLDivElement,picker;
     let c1:string,c2:string,c3:string,c4:string;
   
    </script>
     
     <section id="container--color__palette" class="container--color__palette mb-[10rem] sm:mb-0 min-h-[85vh] section--create w-full  top-[8rem]  grid gap-[1.5rem] justify-center z-1  items-center">
        <h3 class="text-center font-bold">New Color Palette</h3>
        <p class="text-center">Create a new palette and contribute to Color Hunt’s collection</p>
        <div class="flex gap-4 flex-wrap relative justify-center">
            <div 
                class="relative grid grid-rows-4 gap-1.2fr 2fr 3fr 4fr min-w-[30rem]  min-h-[30rem] text-white  top-0 rounded-[1rem] overflow-hidden  pallete--color__1"
                data-id="1">
                <div on:click={userSelectedInput} class="relative cursor-pointer bg-[#BBBBBB]" data-index="0" data-color="#BBBBBB"></div>
                <div on:click={userSelectedInput} class="relative cursor-pointer bg-[#CCCCCC]" data-index="1" data-color="#CCCCCC"></div>
                <div on:click={userSelectedInput} class="relative cursor-pointer bg-[#DDDDDD]" data-index="2" data-color="#DDDDDD"></div>
                <div on:click={userSelectedInput} class="relative cursor-pointer bg-[#EEEEEE]" data-index="3" data-color="#EEEEEE"></div>
                <div bind:this={pickerEl} class="absolute top-0">
                   <input type="color" bind:value="{c1}" bind:this={picker} class=" absolute left-[30rem] top-0 opacity-0">
                   <input type="color" bind:value="{c2}" bind:this={picker} class=" absolute left-[30rem] top-0 opacity-0">
                   <input type="color" bind:value="{c3}" bind:this={picker} class=" absolute left-[30rem] top-0 opacity-0">
                   <input type="color" bind:value="{c4}" bind:this={picker} class=" absolute left-[30rem] top-0 opacity-0">
                </div>
            </div>
         
        </div>
        <form  
              action="?/addToCreation"
              method="post"
              
              on:submit|preventDefault={async ()=>{
                goto("/mycreation")
                // setTimeout(()=>goto("./mycreation"),0)
              }}
              >
              <input type="hidden" 
                     id="hidden" 
                     class="getColor" 
                     name="hidden" 
                     value="{JSON.stringify({c1,c2,c3,c4})}">

             <button  type="submit"
                     formaction="?/addToCreation" 
                    class="btn btn-custom mx-auto w-max btn--submit__palette">
                  <svg class="w-[2rem] mr-1 h-[2rem]">
                   <use href="./icon.svg#tel"></use>
                 </svg>
         Submit Palette
     </button>  
            </form>
        
    </section>
     
    <style>
      
    </style>