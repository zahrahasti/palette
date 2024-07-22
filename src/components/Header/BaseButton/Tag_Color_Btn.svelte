<script lang='ts'>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  export let tagName: string
</script>

<a
  href='/{tagName}'
  on:click={() => {
  	dispatch('setTagColor', {})
  }}
  class='capitalize flex gap-2 items-center'
>
  <span
    style='display: block; background-color:{tagName}'
    class='block w-[2rem] h-[2rem] border-[1px] border-gray-100 shadow-sm rounded-full'
  ></span>
  {tagName}
</a>
