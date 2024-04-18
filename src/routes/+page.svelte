<script lang="ts">
	import '../app.css';
	import randomcolor from 'randomcolor';
	import { baseColors } from '$lib';
	import { generatedColors, splitArrayToSmallerArrays } from '$lib';
	import PaletteCard from '$components/PaletteCards/Palette_Card.svelte';
	let count = 200;

	import Header from '$components/Header/Header.svelte';

	let tagColor = '';
</script>

<Header
	on:delete={() => {
		tagColor = '';
	}}
	on:handleColor={(e) => {
		tagColor = e.detail.color;
	}}
	{baseColors}
/>

<section
	class="mb-[12rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]"
>
	{#if tagColor}
		{#each [...splitArrayToSmallerArrays(2, randomcolor({ count, hue: tagColor })).map((color) => {
				return { isLike: false, colors: generatedColors(color) };
			})] as color}
			<PaletteCard {color} />
		{/each}
	{:else}
		{#each [...splitArrayToSmallerArrays(2, randomcolor({ count, hue: tagColor })).map((color) => {
				return { isLike: false, colors: generatedColors(color) };
			})] as color}
			<PaletteCard {color} />
		{/each}
	{/if}
</section>
