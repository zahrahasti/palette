<script lang="ts">
    import { enhance } from "$app/forms";
    export let dynamicColors:string[];
</script>
<form
		action="?/addToCreation"
		method="post"
		on:submit|preventDefault
		use:enhance
	>
		<input
			type="hidden"
			id="hidden"
			class="getColor"
			name="hidden"
			value={JSON.stringify({dynamicColors})}
		/>

		<button
			type="submit"
			formaction="?/addToCreation"
			class="btn btn-custom mx-auto w-max btn--submit__palette"
		>
			<svg class="w-[2rem] mr-1 h-[2rem]">
				<use href="./icon.svg#tel"></use>
			</svg>
			Submit Palette
		</button>
	</form>