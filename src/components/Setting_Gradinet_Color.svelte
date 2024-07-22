<script>
  // @ts-nocheck
   import { createEventDispatcher } from 'svelte'
   import ListGradientOptions from './Gradient/List_Gradient_Options.svelte'

  export let details
  let show = false

  const dispatch = createEventDispatcher()
  function changePosition(value) {
  	dispatch('changePosition', { value })
  }
</script>

<form
  class='flex'
  on:submit|preventDefault={() => {
  	changePosition(details.value)
  }}
>
  <input
    type='number'
    min='0'
    max='${details.optionValues[-1]}'
    bind:value={details.value}
    class='w-full border-0 outline-0 text-center'
    on:input={() => changePosition(details.value)}
  />
</form>

<button on:click={() => { show = !show }}>
  <svg class='w-8 h-8'>
    <use href='icon.svg#downArrow'></use>
  </svg>
</button>
<ListGradientOptions
  {show}
  on:changeSetting={(e) => {
  	const inputEl = e.detail.liElement
  	details.value = inputEl.dataset.value
  	show = false
  	changePosition(inputEl.dataset.value)
  }}
  {details}
/>
