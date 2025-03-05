<script lang="ts" setup>
import CardPalette from '@/components/common/Cards/ColorPalette/CardPalette.vue'
import { ref } from 'vue'
const palette: string | null = localStorage.getItem('palette')
const parsedAvailableColorPalettes = palette !== null ? (JSON.parse(palette) as string[][]) : []
const paletteLikedStatus = ref(true)
</script>

<template>
  <p>Collection</p>
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-between gap-5">
    <CardPalette
      v-for="(ColorPalette, index) in parsedAvailableColorPalettes"
      :colors="ColorPalette"
      :reactive-cliked="paletteLikedStatus"
      :key="index"
    />
  </div>
</template>
