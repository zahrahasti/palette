 <script lang="ts">
   import { invalidateAll } from '$app/navigation'
    import "../app.css";
	import Card from "../app/Card.svelte";
	import LikedCard from '../app/LikedCard.svelte';
	import SelectedCard from '../app/SelectedCard.svelte';
    export let data;
    console.log(data.colors);
    console.log(data.filterColors);
  // localStorage.setItem("colors",JSON.stringify(data.colors)) 
  // console.log("parse",JSON.parse(localStorage.getItem("colors")));
    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
     "isLike":boolean
}
     async function updateDataPalette(e:CustomEvent){
       let color=e.detail.color;
        let isLike=e.detail.color.isLike;
         const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
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
            const res=await fetch(form.action,{
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
    let isVisibleLikedCardSelected:boolean,selectedColor:color<string,number>;
    function showComponent(color:color<string,number>){
       isVisibleLikedCardSelected=true;
       selectedColor=color
    }
    let canvas:HTMLCanvasElement;

   
</script>

<section class="w-full md:w-2/3 mx-auto">
   {#if isVisibleLikedCardSelected}
    <SelectedCard color={selectedColor} />
   {/if}
</section>
<section  
 class="mb-[8rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
 data-active="1">
 {#if data.colors}
  {#each data.colors as color}
       <Card  on:showComponent={()=>
       showComponent(color)
       }
        on:customsubmit={updateDataPalette}  {color}/>
  {/each}   
 {/if}
</section>



<!-- i handle this in +layout.svelte  -->
<!-- {#if data.filterColors}
  {#each data.filterColors as color}
   <LikedCardSamll on:customsubmit={updateDataPalette} {color} />
  {/each}     
{/if}    -->
