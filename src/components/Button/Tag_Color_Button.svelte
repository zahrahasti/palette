<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let color: string;
</script>

<button
	on:click={() => {
		dispatch('setTagColor', {});
	}}
	class="capitalize flex gap-2 items-center"
>
	<span
		style="display: block; background-color:{color}"
		class="block w-[2rem] h-[2rem] border-[1px] border-gray-100 shadow-sm rounded-full"
	></span>
	{color}
</button>
