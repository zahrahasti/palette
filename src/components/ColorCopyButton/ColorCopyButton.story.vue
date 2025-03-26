<script lang="ts" setup>
import ColorCopyButton from './ColorCopyButton.vue'
</script>

<template>
  <Story>
    <Variant title="default style in coloCopyButton">
      <ColorCopyButton :style="'flex-row'" :item="`#000FFF`" />
    </Variant>
    <Variant title="second Style in colorCopyButton">
      <ColorCopyButton :item="`#000FFF`" />
    </Variant>
  </Story>
</template>
