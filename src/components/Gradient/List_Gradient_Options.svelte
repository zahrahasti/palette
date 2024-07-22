<script lang='ts'>
  export let show: boolean, details
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

{#if show}
  <ul class='absolute bg-white p-5 rounded-2xl w-4/5 right-0 z-20 top-full'>
    {#each details.optionValues as value}
      <li
        data-value={value}
        class='relative h-12 mb-1 px-3 py-1 duration-100 hover:bg-gray-100 rounded-lg w-full'
      >
       <button
            on:click={(e) => {
            	dispatch('changeSetting', { liElement: e.target })
            }}
             class="absolute block mx-auto translate-x-1/2 -left-1/2 w-full h-full"
             type="button">
        {value}
        {details.sign}
       </button>
      </li>
    {/each}
  </ul>
{/if}
