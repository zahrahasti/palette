<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { createEventDispatcher, onMount } from 'svelte';
	let inputSearch: HTMLInputElement;
	export let baseColors: string[];
 
	let listColor: HTMLElement;
	let navEventElements = {
		listColor: null,
		showButtonTag: false,
		baseColorsCopied: baseColors,
		listColorTagsExist: false,
		filterColorTags: false,
		selectedColor: '',
		inputSearch: null,
	};
	let {
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
			console.log("base color in filtered"),baseColors;
			filterColorTags = true;
		}  else baseColors=baseColorsCopied
	}

	function checkValue(e: Event) {
		e.preventDefault();
		if (filterColorTags) {
			const input = ((e?.target as HTMLFormElement).search! as HTMLInputElement) || '';
			const [color] = baseColors.filter((color) =>
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
		listColor.style.display = 'none';
		dispatch('delete', { selectedColor });
	}

	import ThLogo from './Th_Logo.svelte';
	import ChromeButton from './BaseButton/Chrome_Btn.svelte';
	import SearchInput from './BaseButton/Search_Input.svelte';
	import ColorTag from './Color_Tag.svelte';
	import ColorTagActive from './Color_Tag_Active.svelte';
	import ColorSuggestionPanel from './Color_suggestion_Panel.svelte';
	import TagColorBtn from './BaseButton/Tag_Color_Btn.svelte';
</script>

<svelte:body lang="ts" on:click={handleBodyClick} />

<header
	class="flex items-center top-0 justify-between w-full bg-white fixed left-1/2 -translate-x-1/2 z-[100] py-[.8rem]"
>
	<ThLogo />

	<nav class="w-full nav">
		<div class="parent px-[2.5rem] w-full relative">
			<div class="h-full relative  rounded-[2rem]">
				<ColorTagActive {selectedColor} {showButtonTag} on:deletetagColor={resetListColor} />
				<SearchInput
					on:filterSearchText={(e) => {
						filterSearchText(e);
					}}
					on:handleColor={(e) => {
						checkValue(e.detail.e);
					}}
					{listColor} 
					{selectedColor}
				/>

				<ColorTag
				    {listColorTagsExist}>
				  <ColorSuggestionPanel bind:listColor {baseColors} {navEventElements} >
                    {#each baseColors as color}
			      	  <TagColorBtn {color} on:setTagColor={() => setTagColor(color)} />
		     	    {/each}
			     </ColorSuggestionPanel>
			  </ColorTag>
			</div>
		</div>
	</nav>
	<ChromeButton />

</header>

 