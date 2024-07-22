<script lang='ts'>
    // @ts-expect-error
  import PaletteCard from '$components/PaletteCards/Palette_Card.svelte'
  import { page } from '$app/stores'

  async function fetchData(tagName: string) {
  	const response = await fetch(`http://localhost:3000/${tagName}`)
  		const data = await response.json()
  	return data
  }
</script>
{#if $page.params.colors}
{#await fetchData($page.params.colors)}
loading ...
{:then data}
<section
  class='mb-[12rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]'
>
  {#each data as color}
    <PaletteCard name={$page.params.colors} {color} />
  {/each}
</section>
{/await}
{/if}
