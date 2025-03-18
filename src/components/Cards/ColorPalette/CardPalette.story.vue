<script lang="ts" setup>
import CardPalette from './CardPalette.vue'
const colors = ['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE']
</script>

<template>
  <Story :layout="{ type: 'grid', width: 400 }">
    <CardPalette :colors="colors" :reactiveCliked="false" />
  </Story>
</template>
