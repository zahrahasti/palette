
<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();
	import { json } from "@sveltejs/kit";

  export  let details:{
        title:string,
        value?:string|number,
        optionValues?:string[]|number[]
        sign?:string|""
    }
    ;
</script>
<div>
  <p class="font-semibold text-xl mb-4 capitalize">{details.title}</p>
  <div class="flex relative justify-between border-[1px] rounded-xl border-gray-200 p-3">
    <slot/>
  </div>
</div>


<style>
   select{
    -webkit-appearance: none;
   }
</style>