<script lang="ts">
	let codeColorBase = '';
	export let colorWrapper: HTMLElement;
	import { fade } from 'svelte/transition';
	import CopyHexButton from './Button/Copy_Hex_Button.svelte';
	import ColorRemovePalette from './Button/Color_Remove_Palette.svelte';
	export let color: { isLike: boolean; colors: string[] };
</script>

<div
	transition:fade={{ duration: 300, delay: 150 }}
	class="relative w-full scale-[.85] sm:scale-100"
>
	<div
		bind:this={colorWrapper}
		class="w-full relative text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white aspect-square bottom-0 rounded-[1rem] overflow-hidden pallete--color__1"
	>
		<CopyHexButton colors={color.colors} {codeColorBase} />
	</div>
	<div
		class="flex container--btn__pallete container--main__btn justify-between mt-9 w-full gap-3 items-center my-[1rem]"
	>
		<ColorRemovePalette {color} />
	</div>
</div>
