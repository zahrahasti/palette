<script>
	// @ts-nocheck
	export let details;
	let show = false,
		inputValue;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function changePosition(value) {
		dispatch('changePosition', { value });
	}
	let ul;
</script>

<form
	class="flex"
	on:submit|preventDefault={() => {
		changePosition(details.value);
	}}
>
	<input
		type="number"
		min="0"
		max="${details.optionValues[-1]}"
		bind:value={details.value}
		class="w-full border-0 outline-0 text-center"
		on:input={() => changePosition(details.value)}
	/>
</form>

<button on:click={() => (show = !show)}>
	<svg class="w-8 h-8">
		<use href="icon.svg#downArrow"></use>
	</svg>
</button>
{#if show}
	<ul bind:this={ul} class="absolute p-5 rounded-2xl bg-white w-4/5 right-0 z-20 top-full">
		{#each details.optionValues as value}
			<li
				on:click={(e) => {
					console.log(e.target.dataset.value);
					details.value = e.target.dataset.value;
					show = false;
					changePosition(e.target.dataset.value);
				}}
				data-value={value}
				class="mb-1 px-3 py-1 duration-100 hover:bg-gray-100 rounded-lg w-full"
			>
				{value}{details.sign}
			</li>
		{/each}
	</ul>
{/if}
