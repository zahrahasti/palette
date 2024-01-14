
<script lang="ts">
      import { invalidateAll } from '$app/navigation'
      import { page } from "$app/stores";
 	    import Card from "../../app/Card.svelte";

      console.log("params",$page.params);
    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
}
     const idPage=$page.params.id;
     export let data;
     let res;
    
   
     async function updateDataPalette(e:CustomEvent){

       let color=e.detail.color;
        let isLike=e.detail.color.isLike;
         const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
        console.log(isLike);
      if(!isLike){
       res=await fetch(form.action,{
            method:"POST",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }
         })
       isLike=true;
     console.log(
      "liked"
     );
    }
        else {
          console.log("delrete is hapeeding");
         res=await fetch(form.action,{
            method:"DELETE",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }        
        })  
        console.log("remove liked");
        }
          form.reset()
          await invalidateAll()
 
     }
     console.log(data.colors); 
     console.log(data);
     const colors=data.colors;
     import SelectedCard from "../../app/SelectedCard.svelte";
      console.log($page.params.id);
      if(data.colors?.find(color=>color.name===$page.params.id)){
        console.log("we are in palette ");
      }else console.log("we are in image card");
      
</script> 
 

{#if data.colors}
   {#if data.colors.find(color=>color.name===$page.params.id)}
   <section  
class="mb-[8rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
data-active="1">
  {#each data.colors as color}
  <Card  
  on:showComponent={()=>{}}
  on:customsubmit={updateDataPalette}  
  {color}/>
      {/each}
</section>
   {/if}
    {#if data.colors.find(color=>{return `${color.name}${color.id}`===$page.params.id})}
    <section class="w-full md:w-2/3 mx-auto">
        {#each data.colors as color}
           <SelectedCard {color} on:customsubmit={updateDataPalette} />
        {/each}
    </section>
    {/if}
{/if}