<script lang="ts" setup>
import DowloadPaletteBtn from './DowloadPaletteBtn.vue'
const colors = ['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE']
</script>

<template>
  <Story>
    <DowloadPaletteBtn :colors="colors" />
  </Story>
</template>
