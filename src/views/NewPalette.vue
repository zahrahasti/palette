<script setup lang="ts">
import { ref } from 'vue'
import MainWrapper from '@/components/Base/MainWrapper.vue'
import CardPalette from '@/components/Card/CardPalette.vue'
import { createRandomColorPalette } from '@/assets/modules/createRandomColorPalette'
const colorsMain = [
  createRandomColorPalette(),
  createRandomColorPalette(),
  createRandomColorPalette()
]

const paletteLikedStatus = ref(false)
</script>

<template>
  <MainWrapper>
    <CardPalette
      :reactive-cliked="paletteLikedStatus"
      v-for="(colors, index) in colorsMain"
      :colors="colors"
      :key="index"
    />
  </MainWrapper>
</template>
