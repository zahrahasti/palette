<script lang="ts">
	export let listColor: HTMLElement,
		baseColors: string[],
		navEventElements,
		listColorTagsExist: boolean;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let { selectedColor } = navEventElements;
	import TagColorButton from '$components/Button/Tag_Color_Button.svelte';
	function setTagColor(color: string) {
		dispatch('setTagColor', { color, selectedColor });
	}
</script>

<div class="absolute color--template w-full h-full top-0">
	<svg
		class="{listColorTagsExist
			? `hidden`
			: `block`} text-gray-600 z-[4] left-[.8rem] w-[1.8rem] h-[1.8rem] top-1/2 -translate-y-1/2 absolute"
	>
		<use href="./icon.svg#search"></use>
	</svg>

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
</div>
