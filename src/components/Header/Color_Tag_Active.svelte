<script lang="ts">
	export let showButtonTag: boolean, selectedColor: string;
 	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

{#if showButtonTag}
	<div
		class="z-[140] rounded-[4rem] px-4 absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 flex justify-between items-center gap-1"
	>
		<div class="flex pr-3 py-2 gap-2 items-center border-r-[1px] border-r-gray-200">
			<span style="background-color: {selectedColor};" class="block w-5 aspect-square rounded-3xl"
			></span>
			<span>{selectedColor}</span>
		</div>

		<button
			on:click={() => {
				dispatch('deletetagColor', {});
			}}
			class="ml-2"
			on:click={() => {}}
		>
			<svg class="w-4 aspect-square text-gray-400">
				<use href="./icon.svg#delete"></use>
			</svg>
		</button>
	</div>
{/if}
