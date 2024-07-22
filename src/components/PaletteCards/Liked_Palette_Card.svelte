<script lang='ts'>
  import ColorPaletteBase from './Color_Palette_Base.svelte'

  export let color: { isLike: boolean, colors: string[], id: string }
  import ColorRemovePalette from './BaseButtons/Color_Remove_Palette_Btn.svelte'
</script>

<ColorPaletteBase {color}>
  <ColorRemovePalette {color} />
</ColorPaletteBase>
