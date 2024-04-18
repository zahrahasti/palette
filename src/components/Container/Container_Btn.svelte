<script lang="ts">
	export let listColor, baseColors: string[], navEventElements, showButtonTag;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let { selectedColor, inputDetail } = navEventElements;
	import TagColorButton from '$components/Button/Tag_Color_Button.svelte';
	function setTagColor(color: string) {
		dispatch('handleColor', { color });
		selectedColor = color;
		showButtonTag = true;
	}
</script>

<div
	bind:this={listColor}
	class="bg-white top-[3.5rem] hidden duration-200 absolute p-[2rem] w-full rounded-b-2xl border-gray-100 border-[.1rem] border-t-transparent"
>
	<p class="font-semibold mt-5">Colors</p>
	<div class="flex flex-wrap items-center gap-5 py-[1rem] text-[1.2rem]">
		{#each baseColors as color}
			<TagColorButton {color} on:setTagColor={() => setTagColor(color)} />
		{/each}
	</div>
</div>
