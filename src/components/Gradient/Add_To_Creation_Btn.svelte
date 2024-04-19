<script lang="ts">
    import { enhance } from "$app/forms";
    export let dynamicColors:string[];
    let showSuccess=false
    function showSuccessText(){
         showSuccess=false;
    }
</script>
<form
		action="?/addToCreation"
		method="post"
		on:submit|preventDefault={()=>{
          showSuccess=true;
          setTimeout(()=>{
             showSuccessText();
          },500)
        }}
		use:enhance
	>
		<input
			type="hidden"
			id="hidden"
			class="getColor"
			name="hidden"
			value={JSON.stringify({isLike:false,colors:dynamicColors})}
		/>

		<button
			type="submit"
			formaction="?/addToCreation"
			class="btn btn-custom relative mx-auto w-max btn--submit__palette">
			<svg class="w-[2rem] mr-1 h-[2rem]">
				<use href="./icon.svg#tel"></use>
			</svg>
			Submit Palette
            <p class="{showSuccess?`block`:`hidden`} absolute w-max -top-14 bg-blue-600 text-white px-4 py-1 rounded-md duration-300 -left-10">Added successfully</p>
		</button>
	</form>