<!-- <script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import DownloadImgButton from './Color_Download_Button.svelte';
	import CopyHexButton from './Copy_Hex_Button.svelte';
	import ColorLikeBtn from './Color_Like_Btn.svelte';
	let cardContainer: HTMLElement;
	const cardInformation = {
		codeColorBase: '',
		loading: false
	};

	let { codeColorBase, loading } = cardInformation;
	// let cardContainer:HTMLElement,
	//    codeColorBase:string;
	let canvas: HTMLCanvasElement, colorWrapper: HTMLElement;

	// let loading:boolean=false;;
	class CardObserver {
		_cardContainer;
		_threshold = 0.5;
		_beforeAnimatedClassName = 'before-animated';
		_AnimatedClassName = 'card-animated';
		constructor(cardContainer: HTMLElement) {
			this._cardContainer = cardContainer;
			this.initIntersectionObserver();
		}

		initIntersectionObserver() {
			onMount(() => {
				const observer = new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (entry.intersectionRatio >= 0.5) {
								const card = entry.target;
								this.AnimatedCard(card);
							}
						}
					},
					{
						threshold: this._threshold
					}
				);

				observer.observe(cardContainer);
			});
		}
		AnimatedCard(card: Element) {
			card.classList.remove(this._beforeAnimatedClassName);
			card.classList.add(this._AnimatedClassName);
		}
	}
	const card = new CardObserver(cardContainer);
	export let color: { isLike: boolean; colors: string[] };
</script>

<canvas bind:this={canvas} class="hidden"></canvas>
<div
	data-color={color}
	bind:this={cardContainer}
	class="relative before-animated animated-translate-y w-full scale-[.85] sm:scale-100"
>
	<div
		bind:this={colorWrapper}
		class="w-full relative text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white aspect-square bottom-0 rounded-[1rem] overflow-hidden pallete--color__1"
	>
		<CopyHexButton colors={color.colors} {codeColorBase} />
	</div>
	<div
		class="flex container--btn__pallete container--main__btn justify-between w-full gap-3 items-center my-[1rem]">
		<ColorLikeBtn {color} />
		<DownloadImgButton {canvas} {colorWrapper} />
	</div>
</div>

<style>
	.before-animated {
		opacity: 0;
		transition: 0.3s;
		transform: translateY(3rem);
	}
	.card-animated {
		animation: card 0.5s ease-in;
	}
	.like {
		background: rgba(0, 0, 0, 0.1);
	}
	.animated-translate-y {
		transition: 0.3s;
		animation: translate-y 0.4s ease-in forwards;
	}
	.decrease-height {
		/* animation: name duration timing-function delay iteration-count direction fill-mode; */
		animation: dc-height 0.5s ease-in forwards;
		/* transform-origin:bottom; */
		transition: height 0.3s;
	}
	@keyframes dc-height {
		0% {
			scale: 1 1.5;
			opacity: 0.9;
		}

		100% {
			scale: 1;
		}
	}

	@keyframes card {
		0% {
			transform: translate(3rem);
		}
		100% {
			transform: translateY(0);
		}
	}
</style> -->

 <script lang="ts">
	import ColorPaletteBase from "./Color_Palette_Base.svelte";
	import ColorLikeBtn from './BaseButtons/Color_Like_Btn.svelte';
    export let color:{isLike:boolean,colors:string[]};
 </script>

 <ColorPaletteBase {color}>
      <ColorLikeBtn {color}/>
 </ColorPaletteBase>