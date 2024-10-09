<script setup lang="ts">
import { ref } from 'vue'
import MainWrapper from '@/components/Base/MainWrapper.vue'
import CardPalette from '@/components/common/Cards/ColorPalette/CardPalette.vue'
import { createRandomColorPalette } from '@/assets/modules/colorGenerator'
import { useInputStore } from '@/stores/input'
const hexColor = useInputStore().hexColor
const paletteLikedStatus = ref(false)
</script>

<template>
  <MainWrapper>
    <CardPalette
      :reactive-cliked="paletteLikedStatus"
      v-for="(colors, index) in [
        createRandomColorPalette(hexColor),
        createRandomColorPalette(hexColor)
      ]"
      :colors="colors"
      :key="index"
    />
  </MainWrapper>
</template>
