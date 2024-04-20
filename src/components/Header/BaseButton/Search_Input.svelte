<script lang="ts">
 	export let selectedColor:string;
	export let listColor: HTMLElement;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();    
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
		class="w-full {selectedColor!==""
			? `pl-[12rem] `
			: `pl-[3rem] focus:pl-[1.2rem]`} relative z-[3] py-[.8rem] text-gray-800 rounded-[2rem] border-[.1rem] border-gray-200 duration-100 outline-none"
		placeholder={selectedColor!==""?"Add Tag":"Search Palette"}
	/>
</form>

 