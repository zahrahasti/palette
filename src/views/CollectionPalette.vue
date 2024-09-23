<script lang="ts" setup>
import MainWrapper from '@/components/Base/MainWrapper.vue'
import CardPalette from '@/components/Card/CardPalette.vue'
import { ref } from 'vue'
const palette: string | null = localStorage.getItem('palette')
const parsedAvailableColorPalettes = palette !== null ? (JSON.parse(palette) as string[][]) : []
const paletteLikedStatus = ref(true)
</script>

<template>
  <p>Collection</p>
  <MainWrapper>
    <CardPalette
      v-for="(ColorPalette, index) in parsedAvailableColorPalettes"
      :colors="ColorPalette"
      :reactive-cliked="paletteLikedStatus"
      :key="index"
    />
  </MainWrapper>
</template>
