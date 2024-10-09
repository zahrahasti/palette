<script lang="ts" setup>
import ColorSwatchPicker from './ColorSwatchPicker.vue'
import { ref } from 'vue'
const colors = ref(['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE'])
const gradientColors = ref(['#EEEEEE', '#999999'])
</script>

<template>
  <Story :layout="{ type: 'grid', width: 400 }">
    <Variant title="Simple Color Palette">
      <ColorSwatchPicker :colors="colors" :style="1" />
    </Variant>
    <Variant title="Gradient Color Palette">
      <ColorSwatchPicker :colors="gradientColors" :style="2" />
    </Variant>
  </Story>
</template>
