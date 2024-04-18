<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let listColorTagsExist: boolean, listColor: HTMLElement, baseColors, navEventElements;
	import ColorSuggestionPanel from './Color_suggestion_Panel.svelte';
</script>

<div class="absolute  w-full h-full top-0">
	<svg
		class="{listColorTagsExist
			? `hidden`
			: `block`} text-gray-600 z-[4] left-[.8rem] w-[1.8rem] h-[1.8rem] top-1/2 -translate-y-1/2 absolute"
	>
		<use href="./icon.svg#search"></use>
	</svg>

	<ColorSuggestionPanel
		on:setTagColor={(e) => {
			dispatch('setTafColor', { color: e.detail.color });
		}}
		bind:listColor
		{listColorTagsExist}
		{baseColors}
		{navEventElements}
	/>
</div>
