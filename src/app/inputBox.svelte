
<script >
    // @ts-nocheck
    export let details;
    let show=false,inputValue;
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();
    function changePosition(value){
        dispatch("changePosition",{value})
    }
    let ul;
</script>
 <svelte:body on:click={(e)=>{
  console.log(e);
   if(e.target){
      console.log("click on l");
   }
 }} />
  <form class="flex"  on:submit|preventDefault={()=>{
    console.log(details.value);
    changePosition(details.value)}}>
    <input 
    type="text" 
    min="0" 
    max="${details.optionValues[-1]}"  
    bind:value={details.value}
    class="w-full border-0 outline-0 text-center">  
    <button on:click={()=>show=!show}>?</button>
  </form>
   
       
       {#if show}
       <ul bind:this={ul}
      class="absolute p-5 rounded-2xl  bg-white w-4/5 right-0 z-20 top-full">
        
        {#each details.optionValues as value}
          <li on:click={(e)=>{
            console.log(e.target.dataset.value);
             details.value=e.target.dataset.value;
             show=false;
             changePosition(e.target.dataset.value)

       }} 
       data-value="{value}"
       class="mb-1 px-3 py-1 duration-100 hover:bg-gray-100 rounded-lg w-full">{value}{details.sign}</li>
        {/each}    
     </ul>
       {/if}
 
 