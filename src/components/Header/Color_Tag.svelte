<script lang="ts">
	export let listColorTagsExist: boolean;
</script>

<div class="absolute  w-full h-full top-0">
	<svg
		class="{listColorTagsExist
			? `hidden`
			: `block`} text-gray-600 z-[4] left-[.8rem] w-[1.8rem] h-[1.8rem] top-1/2 -translate-y-1/2 absolute"
	>
		<use href="./icon.svg#search"></use>
	</svg>

	 <slot/>

</div>
