<script lang="ts" setup>
import ColorCopyButton from './ColorCopyButton.vue'
</script>

<template>
  <Story>
    <Variant title="default style in coloCopyButton">
      <ColorCopyButton :item="`#000FFF`" :style="1" />
    </Variant>
    <Variant title="second Style in colorCopyButton">
      <ColorCopyButton :item="`#000FFF`" :style="2" />
    </Variant>
  </Story>
</template>
