

<script lang="ts">
     type color<T,U>= {
    "name": T,
    "id": T,
     "colors":[T,T,T,T],
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
}
     import { invalidateAll } from '$app/navigation'
     import { createEventDispatcher } from 'svelte';

    export let data;
    let res;
    async function updateDataPalette(e:CustomEvent){
console.log("details color",e.detail.color);
let color=e.detail.color;
 let isLike=e.detail.color.isLike;
  const form=e.detail.form as HTMLFormElement;
 const formData=new FormData(form);
 console.log(isLike);
 console.log("form action",form.action);
 console.log(color);
if(!isLike){
res=await fetch(`${form.action}`,{
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
import SelectedCard from '../../../app/SelectedCard.svelte';
	import Card from '../../../app/Card.svelte';
</script>
<section class="w-full md:w-2/3 mx-auto">
    {#if data.colors!==undefined}
     {#each data.colors as color}
       <SelectedCard {color} on:customsubmit={updateDataPalette} />
     {/each}
    {/if}
 </section>