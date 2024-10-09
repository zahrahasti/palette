<script lang="ts" setup>
import { getRandomHexColor } from '@/assets/modules/getRandomHexColor'
import ColorCopyButton from '@/components/common/ColorCopyButton/ColorCopyButton.vue'
function returnTwoRandomColor() {
  const randomColor1 = getRandomHexColor()
  const randomColor2 = getRandomHexColor()
  return [randomColor1, randomColor2]
}
const colors = [returnTwoRandomColor(), returnTwoRandomColor()]
</script>
<template>
  <div class="flex flex-col" v-for="(color, index) in colors" :key="index">
    <div
      :style="{ background: `linear-gradient(to right,${color})` }"
      class="rounded-3xl overflow-hidden group relative aspect-square w-full flex justify-between items-center"
    ></div>
    <div class="flex my-5 justify-between">
      <ColorCopyButton v-for="item in color" :key="item" :item="item" />
    </div>
  </div>
</template>
