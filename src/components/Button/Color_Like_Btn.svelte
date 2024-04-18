<script lang="ts">
	import { enhance } from '$app/forms';
	export let color: { isLike: boolean; colors: string[] };
</script>

<form
	on:submit|preventDefault={() => {
		if (color.isLike) color.isLike = false;
		else color.isLike = true;
	}}
	use:enhance
	action={color.isLike ? `?/addColor` : `?/removeColor`}
	method="post"
>
	<input type="hidden" name="hidden" id="hidden" value={JSON.stringify(color)} />
	<button
		on:click={() => {}}
		formaction={color.isLike ? `?/addColor` : `?/removeColor`}
		type="submit"
		class="{color.isLike
			? `bg-gray-200`
			: ``} btn btn-like text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] btn-custom"
	>
		<span>
			<svg
				class="{color.isLike
					? `text-black`
					: `text-transparent`} stroke-[1rem] stroke-black w-[2rem] h-[2rem]"
			>
				<use href="./icon.svg#heart3"></use>
			</svg>
		</span>
		<span id="like-count" class="like-counter">Like</span>
	</button>
</form>
