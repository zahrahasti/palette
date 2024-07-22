<script lang='ts'>
  import ColorPaletteBase from './Color_Palette_Base.svelte'
  import ColorLikeBtn from './BaseButtons/Color_Like_Btn.svelte'

  export let name, color: { colors: string[], id: string, isLike: boolean, createdAt: string }
</script>

<ColorPaletteBase {color}>
  <ColorLikeBtn {name} {color} />
</ColorPaletteBase>
