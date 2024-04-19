<script lang="ts">
	import CollectionPalette from '$components/Collection_Palette.svelte';
import ColorPaletteBase from '$components/PaletteCards/Color_Palette_Base.svelte';
     import LikedCard from '$components/PaletteCards/Liked_Palette_Card.svelte';
 	export let data;
	 const createPaletteText={
		title:"My collection",
		text:"No palettes in favorite collection",
		ideaText:"You haven't liked anything yet!",
		linkText:"Find beautiful palettes"
	 }
	 const collectionPaletteText={
		title:"My creation",
		text:"No palettes in your creation",
		ideaText:"You haven't liked anything yet!",
		linkText:"Create your own palette"
	 }
</script>

<svelte:head>
	<title>My collection</title>
</svelte:head>

<CollectionPalette colors={data.colors} colorsContent={createPaletteText}/>
<CollectionPalette colors={data.dynamicColors} colorsContent={collectionPaletteText}/> 
 