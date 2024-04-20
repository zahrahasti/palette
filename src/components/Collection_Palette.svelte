<script lang="ts">
    export let colors:{isLike:boolean,colors:string[]}[];
    export let colorsContent:{
        title:string,
        text:string,
        ideaText:string
        linkText:string
    }
</script>

<p class="font-semibold text-[1.8rem] my-4 pb-6 border-b-gray-100 border-b-[1px]">{colorsContent.title}</p>
{#if colors.length}
	<section
		class="mb-[10rem] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]"
	>
	   <slot/>
	</section>
{:else}
	<div class="mb-[5rem] text-center mx-auto">
		<svg class="mb-4">
			<use></use>
		</svg>
		<p class="font-semibold text-[1.8rem] p-2 mb-3 text-gray-900">{colorsContent.text}</p>
		<p class="text-[1.1rem]">{colorsContent.ideaText}</p>
		<a
			href="/"
			class="px-[1.2rem] block text-gray-700 h-full mx-auto mt-10 py-[.6rem] w-max md:flex items-center gap-[1rem] duration-200 hover:bg-[rgba(0,0,0,.01)] rounded-[.8rem] border-[.1rem] border-gray-200"
		>
			 {colorsContent.linkText}
		</a>
	</div>
{/if}