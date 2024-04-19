<script lang="ts">
	import ColorPaletteBase from '$components/PaletteCards/Color_Palette_Base.svelte';
import LikedCard from '$components/PaletteCards/Liked_Palette_Card.svelte';
 	export let data;
	 
</script>

<svelte:head>
	<title>My collection</title>
</svelte:head>
<p class="font-semibold text-[1.8rem] my-4 pb-6 border-b-gray-100 border-b-[1px]">My collection</p>
{#if data.colors.length}
	<section
		class="mb-[10rem] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]"
	>
		{#each new Set(data.colors) as color}
			<LikedCard {color} />
		{/each}
	</section>
{:else}
	<div class="text-center mx-auto">
		<svg class="mb-4">
			<use></use>
		</svg>
		<p class="font-semibold text-[1.8rem] p-2 mb-3 text-gray-900">No palettes in favorite collection</p>
		<p class="text-[1.1rem]">You haven't liked anything yet!</p>
		<a
			href="/"
			class="px-[1.2rem] block text-gray-700 h-full mx-auto mt-10 py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[.8rem] border-[.1rem] border-gray-200"
		>
			Find beautiful palettes
		</a>
	</div>
{/if}

<p class="font-semibold text-[1.8rem] my-4 pb-6 border-b-gray-100 border-b-[1px]">My creation</p>
{#if data.dynamicColors.length}
<section
class="mb-[10rem] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]"
>

{#each new Set(data.dynamicColors) as color}
  <ColorPaletteBase {color}/>
{/each}
</section>
{:else}
	<div class="text-center mx-auto">
		<svg class="mb-4">
			<use></use>
		</svg>
		<p class="font-semibold text-[1.8rem] p-2 mb-3 text-gray-900">No palettes in your creation</p>
		<p class="text-[1.1rem]">You haven't created anything yet!</p>
		<a
			href="/create"
			class="px-[1.2rem] block text-gray-700 h-full mx-auto mt-10 py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[.8rem] border-[.1rem] border-gray-200"
		>
			Create your own palette
		</a>
	</div>
{/if}