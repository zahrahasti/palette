
<script lang="ts">
          import { invalidateAll } from '$app/navigation'
    import { page } from "$app/stores";
	import Card from "../../app/Card.svelte";
    
    type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
}
let colors:color<string,number>[] |undefined;
    const idPage=$page.params.id;
 
   export let data;
   let res;
    colors=data.colors?.filter((color)=>{
        if(color.name+color.id===idPage)return color 
     });

     async function updateDataPalette(e:CustomEvent){
       let color=e.detail.color;
        let isLike=color.isLike;
 
        
        const form=e.detail.form as HTMLFormElement;
        const formData=new FormData(form);
        console.log(formData);
      if(!isLike){
         res=await fetch(form.action,{
            method:"PUT",
            body:JSON.stringify(color),
            headers:{
              "content-type":"application/json"
            }
         })
       isLike=true;
   
    }
        else {
              res=await fetch(form.action,{
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
</script>
 

 
<section  
 class="mb-[8rem] mt-10 sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
 data-active="1">
 {#if colors!==undefined}
    
 {#each colors as color}
     <Card  on:showComponent={()=>{}}
      on:customsubmit={updateDataPalette}  {color}/>
 {/each}   
 {/if}
</section>
