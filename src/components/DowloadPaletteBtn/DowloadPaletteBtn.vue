<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { PropType } from 'vue'
const { colors } = defineProps({ colors: Array as PropType<string[]> })
const canvas = ref<HTMLCanvasElement | null>(null)
const drawPalette = (colors: string[]) => {
  const canvasEl = canvas.value
  if (canvasEl) {
    const ctx = canvasEl.getContext('2d')
    if (ctx) {
      canvasEl.width = 200
      canvasEl.height = 200
      colors.forEach((color, index) => {
        ctx.fillStyle = color
        ctx.fillRect(index * 50, 0, 100, 200) // Draw each 50x50 block
      })
    }
  }
}

const downloadImage = () => {
  const canvasEl = canvas.value
  if (canvasEl) {
    const dataURL = canvasEl.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'palette.png'
    link.click()
  }
}

onMounted(() => {
  if (colors) drawPalette(colors)
})
</script>
<template>
  <canvas width="200" height="200" class="hidden" ref="canvas"></canvas>
  <button @click="downloadImage" type="button" class="button-default">Download</button>
</template>
