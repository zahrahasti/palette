<script lang='ts'>
  export let optionValues: string[]
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<select
  on:change={() => {
  	dispatch('changeType')
  }}
  class='w-full'
>
  {#each optionValues as option}
    <option value={option}>
      {option}
    </option>
  {/each}
</select>
