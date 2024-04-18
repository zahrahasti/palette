<script lang="ts">
	import { enhance } from '$app/forms';
	export let color: { isLike: boolean; colors: string[] };
</script>

<form method="post" action="?/removeColor" use:enhance>
	<input type="hidden" name="hidden" id="hidden" value={JSON.stringify(color)} />
	<button
		on:click
		class:like={color.isLike}
		formaction="?/removeColor"
		type="submit"
		class="bg-gray-200 flex items-center gap-[1rem] px-[.7rem]
    py-[.4rem] border-[.1rem] border-gray-200
    rounded-[.5rem] duration-300"
		data-liked="false"
	>
		<svg class="text-black stroke-[1rem] stroke-black w-[2rem] h-[2rem]">
			<use href="./icon.svg#heart3"></use>
		</svg>
		<span id="like-count" class="like-counter"> Liked </span>
	</button>
</form>
