<script lang='ts'>
  import '../app.css'
  import PaletteCard from '$components/PaletteCards/Palette_Card.svelte'

  export let data

</script>

<section
  class='mb-[12rem] sm:mb-0 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new active-page w-full justify-between gap-[1rem]'
>
  {#each data.colors as color}
    <PaletteCard name='random' {color} />
  {/each}
</section>
