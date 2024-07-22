<script lang='ts'>
  export let colors: string[],
  	codeColorBase = ''
</script>

{#if colors}
  {#each colors as codeColor, id}
    <div
      style='animation-delay:{(id + 1) * 0.05}s; background-color:#{codeColor};height:{100 - (10 + id * 4) * id}%;'
      class='container-color decrease-height absolute z-[{id + 10}] w-full group flex cursor-pointer'
    >
      <button
        on:click={function () {
        	codeColorBase = codeColor
        	codeColor = 'copy text'
        	navigator.clipboard.writeText(String(codeColor))
        	return setTimeout(() => {
        		(codeColor = codeColorBase)
        	}, 500)
        }}
        type='button'
        class='btn btn--copy__color w-max group-hover:opacity-100 self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md px-[1rem] bg-[rgba(0,0,0,.15)]'
      >
        {codeColor}
      </button>
    </div>
  {/each}
{/if}
