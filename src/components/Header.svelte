<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { createEventDispatcher, onMount } from 'svelte';
	let inputSearch: HTMLInputElement;
	export let baseColors: string[];

	const defalultInputDetail = { placeholderText: 'Search Palette', padding: 1.2 };
	const optionInputDetail = { placeholderText: 'Add tag', padding: 1.2 };
	let listColor: HTMLElement;
	let navEventElements = {
		listColor: null,
		showButtonTag: false,
		baseColorsCopied: baseColors,
		listColorTagsExist: false,
		filterColorTags: false,
		selectedColor: '',
		inputSearch: null,
		inputDetail: defalultInputDetail
	};
	let {
		inputDetail,
		showButtonTag,
		baseColorsCopied,
		listColorTagsExist,
		filterColorTags,
		selectedColor
	} = navEventElements;

	const dispatch = createEventDispatcher();

	// let inputDetail:{placeholderText:string,padding:number}=defalultInputDetail;
	function handleBodyClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('nav')) {
			if (listColor) listColor.style.display = 'none';
			listColorTagsExist = false;
		} else {
			listColor.style.display = 'block';
			listColorTagsExist = true;
		}
	}

	function filterSearchText(e: Event) {
		let text = e?.detail.el.value.toLowerCase();
		if (text.length > 0) {
			baseColors = baseColors.filter((color) => color.toLowerCase().startsWith(text));
			filterColorTags = true;
		} else baseColors = baseColorsCopied;
	}

	function checkValue(e: Event) {
		e.preventDefault();
		if (filterColorTags) {
			const input = ((e?.target as HTMLFormElement).search! as HTMLInputElement) || '';
			const [color] = baseColorsCopied.filter((color) =>
				color.toLowerCase().startsWith(input.value)
			);
			setTagColor(color);
		}
	}
	function setTagColor(color: string) {
		dispatch('handleColor', { color });
		selectedColor = color;
		showButtonTag = true;
	}
	function resetListColor() {
		selectedColor = '';
		showButtonTag = false;
		baseColors = baseColorsCopied;
		inputDetail = defalultInputDetail;
		listColor.style.display = 'none';
		dispatch('delete', { selectedColor });
	}

	import ThLogo from './Header/Th_Logo.svelte';
	import ChromeButton from './Button/Chrome_Button.svelte';
	import SearchInput from './Input/Search_Input.svelte';
	import ColorTag from './Container/Color_Tag.svelte';
	import TagColorShown from './Container/Color_Tag_Active.svelte';
</script>

<svelte:body lang="ts" on:click={handleBodyClick} />

<header
	class="flex items-center top-0 justify-between w-full bg-white fixed left-1/2 -translate-x-1/2 z-[100] py-[.8rem]"
>
	<ThLogo />

	<nav class="w-full nav">
		<div class="parent px-[2.5rem] w-full relative">
			<div class="h-full relative rounded-[2rem]">
				<TagColorShown {selectedColor} {showButtonTag} on:deletetagColor={resetListColor} />
				<SearchInput
					on:filterSearchText={(e) => {
						filterSearchText(e);
					}}
					on:handleColor={(e) => {
						checkValue(e.detail.e);
					}}
					{listColor}
					{baseColors}
					{navEventElements}
				/>

				<ColorTag
					{listColorTagsExist}
					bind:listColor
					{baseColors}
					{navEventElements}
					on:setTafColor={(e) => {
						setTagColor(e.detail.color);
					}}
				/>
			</div>
		</div>
	</nav>
	<ChromeButton />
</header>
