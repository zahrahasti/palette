<script lang="ts">
 	export let navEventElements, baseColors: string[];
	const defalultInputDetail = { placeholderText: 'Search Palette', padding: 1.2 };
	const optionInputDetail = { placeholderText: 'Add tag', padding: 1.2 };
	export let listColor: HTMLElement;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let { inputDetail, showButtonTag } = navEventElements;

	function filterSearchText(e: Event) {
		dispatch('filterSearchText', { el: e.target });
	}

	function checkValue(e: Event) {
		e.preventDefault();
		dispatch('handleColor', { e });
	}
</script>

<form
	on:submit={checkValue}
	class="relative {listColor ? `` : `pl-[3rem] focus:pl-[1.2rem]`} focus:bg-blue-600"
>
	<input
		on:input={filterSearchText}
		on:blur={filterSearchText}
		type="search"
		aria-label="search bar"
		id="search"
		class="w-full {showButtonTag
			? `pl-[12rem] `
			: `pl-[3rem] focus:pl-[1.2rem]`} relative z-[3] py-[.8rem] text-gray-800 rounded-[2rem] border-[.1rem] border-gray-200 duration-100 outline-none"
		placeholder={inputDetail.placeholderText}
	/>
</form>
