<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { createEventDispatcher, onMount } from 'svelte';
	let selectedColor: string, inputSearch: HTMLInputElement;
	export let baseColors: string[];
	const dispatch = createEventDispatcher();
	let listColor: HTMLElement,
		listColorExist = false;
	let showButtonTag = false;
	const defalultInputDetail = { placeholderText: 'Search Palette', padding: 1.2 };
	const optionInputDetail = { placeholderText: 'Add tag', padding: 1.2 };

	let inputDetail: { placeholderText: string; padding: number } = defalultInputDetail;
	function handleBodyClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('nav')) {
			listColor.style.display = 'none';
			listColorExist = false;
		}
	}
	const copyBaseColor = baseColors;

	let filterColor: boolean = false;
	function filterSearchText(e: Event) {
		const text = (e?.target as HTMLInputElement).value.toLowerCase();
		if (text.length > 0) {
			baseColors = baseColors.filter((color) => color.toLowerCase().startsWith(text));
			filterColor = true;
		} else baseColors = copyBaseColor;
	}

	function checkValue(e: Event) {
		e.preventDefault();
		if (filterColor) {
			const input = ((e?.target as HTMLFormElement).search! as HTMLInputElement) || '';
			console.log(input);
			const [color] = copyBaseColor.filter((color) => color.toLowerCase().startsWith(input.value));

			dispatch('handleColor', { color });
			goto('/');
			console.log('remove color');
			selectedColor = color;
			showButtonTag = true;
			inputDetail = optionInputDetail;
			inputSearch.value = '';
			resetListColor(color);
		}
	}
	function resetListColor(value: string) {
		showButtonTag = true;
		selectedColor = value;
		listColor.style.display = 'none';
		listColorExist = false;
	}
	let showNavList: boolean = false;
	//    import ThLogo from './Header/Th_Logo.svelte';
	import DeleteTagcolorButton from '../Button/Delete_Tagcolor_Button.svelte';
	//   import ChromeButton from './Button/Chrome_Button.svelte';
	//   import TheNav from './Header/Th./Delete_Tagcolor_Button.svelte
</script>

<nav class="w-full nav">
	<div class="parent px-[2.5rem] w-full relative">
		<div class="h-full relative rounded-[2rem]">
			{#if showButtonTag}
				<div
					class="z-[140] rounded-[4rem] px-4 absolute top-1/2 left-2 -translate-y-1/2 bg-gray-100 flex justify-between items-center gap-1"
				>
					<div class="flex pr-3 py-2 gap-2 items-center border-r-[1px] border-r-gray-200">
						<span
							style="background-color: {selectedColor};"
							class="block w-5 aspect-square rounded-3xl"
						></span>
						<span>{selectedColor}</span>
					</div>
					<DeleteTagcolorButton
						on:deletetagColor={() => {
							selectedColor = '';
							showButtonTag = false;
							inputDetail = defalultInputDetail;
							dispatch('delete', { selectedColor });
						}}
					/>
				</div>
			{/if}

			<form
				on:submit={checkValue}
				class="relative {listColor ? `` : `pl-[3rem] focus:pl-[1.2rem]`} focus:bg-blue-600"
			>
				<input
					bind:this={inputSearch}
					on:input={filterSearchText}
					on:focus={() => {
						listColor.style.display = 'block';
						listColorExist = true;
					}}
					type="search"
					aria-label="search bar"
					id="search"
					class="w-full {showButtonTag
						? `pl-[12rem] `
						: `pl-[3rem] focus:pl-[1.2rem]`} relative z-[3] py-[.8rem] text-gray-800 rounded-[2rem] border-[.1rem] border-gray-200 duration-100 outline-none"
					placeholder={inputDetail.placeholderText}
				/>
			</form>

			<div class="absolute color--template w-full h-full top-0">
				<svg
					class="{listColorExist
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
							<button
								on:click={(e) => {
									dispatch('handleColor', { color });
									selectedColor = color;
									showButtonTag = true;

									inputDetail = optionInputDetail;
								}}
								class="capitalize flex gap-2 items-center"
							>
								<span
									style="display: block; background-color:{color}"
									class="block w-[2rem] h-[2rem] border-[1px] border-gray-100 shadow-sm rounded-full"
								></span>
								{color}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
