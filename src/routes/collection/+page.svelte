<script lang='ts'>
  // @ts-expect-error
  import CollectionPalette from '$components/Collection_Palette.svelte'
  // @ts-expect-error
  import LikedCard from '$components/PaletteCards/Liked_Palette_Card.svelte'

  export let data
  const createPaletteText = {
  	title: 'My collection',
  	text: 'No palettes in favorite collection',
  	ideaText: 'You haven\'t liked anything yet!',
  	linkText: 'Find beautiful palettes',
  }
</script>

<svelte:head>
  <title>My collection</title>
</svelte:head>

<CollectionPalette colors={data.colors} colorsContent={createPaletteText}>
  {#each data.colors as color}
    <LikedCard {color} />
  {/each}
</CollectionPalette>
